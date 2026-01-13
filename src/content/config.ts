import { z, defineCollection } from "astro:content";

// 1. BLOG SCHEMA (Existing)
const blogSchema = z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.string().optional(),
    heroImage: z.string().optional(),
    badge: z.string().optional(),
    tags: z.array(z.string()).refine(items => new Set(items).size === items.length, {
        message: 'tags must be unique',
    }).optional(),
});

// 2. STORE SCHEMA (Existing)
const storeSchema = z.object({
    title: z.string(),
    description: z.string(),
    custom_link_label: z.string(),
    custom_link: z.string().optional(),
    updatedDate: z.coerce.date(),
    pricing: z.string().optional(),
    oldPricing: z.string().optional(),
    badge: z.string().optional(),
    checkoutUrl: z.string().optional(),
    heroImage: z.string().optional(),
});

// 3. PUBLICATIONS SCHEMA (New!)
const publicationsSchema = z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.string().optional(),
    heroImage: z.string().optional(),
    badge: z.string().optional(),
    tags: z.array(z.string()).optional(),
    
    // New fields for the academic layout
    authors: z.string().optional(),    // "J. Doe, A. Smith"
    venue: z.string().optional(),      // "CVPR 2024" or "Submitted to..."
    url: z.string().optional(),        // Main paper link (PDF/HTML)
    arxiv: z.string().optional(),      // Specific ArXiv link
    code: z.string().optional(),       // GitHub link
    video: z.string().optional(),      // YouTube link
    project: z.string().optional(),    // Project page link
});

export type BlogSchema = z.infer<typeof blogSchema>;
export type StoreSchema = z.infer<typeof storeSchema>;
export type PublicationsSchema = z.infer<typeof publicationsSchema>;

const blogCollection = defineCollection({ schema: blogSchema });
const storeCollection = defineCollection({ schema: storeSchema });
const publicationsCollection = defineCollection({ schema: publicationsSchema });

// Export all collections
export const collections = {
    'blog': blogCollection,
    'store': storeCollection,
    'publications': publicationsCollection, // <--- Added this line
};