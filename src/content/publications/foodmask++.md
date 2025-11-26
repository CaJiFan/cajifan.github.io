---
title: "FoodMask+: A Large-Scale Dataset and Benchmark for Multi-View Food Video Segmentation"
description: "Ahmad AlMughrab, Guillermo Rivo, Carlos Jiménez-Farfán, Umair Haroon, Farid Al-Areqi, Hyunjun Jung, Benjamin Busam Ricardo Marques and Petia Radeva"
pubDate: "2025"
heroImage: "/nerfood.webp"
badge: "Submitted to Expert Systems with Applications"
url: "#"
tags: ["food video segmentation", "dietary assessment", "benchmark dataset", video-"based segmentation", memory-augmented models", "cross-dataset generalization"]
---

Food image segmentation is a critical task for dietary analysis, enabling accurate estimation of food volume and nutrients. However, current methods suffer from limited multi-view data and poor generalization to new viewpoints. We introduce FoodMask+, a novel multi-view food video segmentation dataset and benchmark. FoodMask+ aggregates 55 dish scenes (from Nutrition5k, Vegetables \& Fruits, MetaFood3D, and FoodKit) with 25,284 meticulously annotated frames, capturing each dish under free 360° camera motion. We train a diverse set of 20 state-of-the-art segmentation models (e.g., SAM-based, transformer, CNN, and large multimodal) on the existing FoodSeg103 dataset and evaluate them (alone and combined with video-memory modules) on FoodMask+. Quantitative and qualitative results demonstrate that while standard image segmenters degrade sharply under novel viewpoints, memory-augmented methods maintain temporal consistency across frames. Our best model combinations outperform prior work (e.g., improving over FoodMem by ~2.5\% mAP), offering new insights into food segmentation and tracking for dietary analysis. We release FoodMask+ to foster future research.

<!-- ---
title: "Evaluating Large Multimodal Models for Neural Radiance Fields: A Benchmark Enriched with Contextual Metadata"
description: "Ahmad AlMughrab, Carlos Jiménez-Farfán, Ricardo Marques and Petia Radeva"
pubDate: "2025"
heroImage: "/nerfood.webp"
badge: "Submitted to Pattern Recognition Letters"
url: "#"
tags: ["NeRF", "Food Computing", "Neural Reconstruction", "3D Reconstruction"]
---

Neural Radiance Fields (NeRFs) have increasingly become a cornerstone in 3D scene representation, leveraging implicit neural models for high-fidelity view synthesis and geometry capture. Despite their success in closed or bounded scenes, conventional NeRF variants struggle in open-world contexts, where unconstrained camera trajectories and variable content depths exacerbate reconstruction errors, induce aliasing, and elongate optimization times. We propose NeRFood, a robust NeRF-inspired pipeline tailored for open-food scenes. NeRFood integrates strategies for multi-video input fusion, informative keyframe selection, and pose estimation that withstands geometric ambiguity and symmetry. Crucially, it incorporates neural surface reconstruction, yielding explicit mesh extraction and enabling generation of over 2,885 food meshes—a significant expansion in 3D food model availability. Meshes are essential not only for AR/VR and robotics but also as training assets for diffusion-based 3D generative models. Their importance is amplified for food, where deformability, diversity, and lack of 3D datasets hinder progress in nutrition monitoring and food synthesis. To further advance this direction, we adapt the Nutrition5k dataset to the NeRF domain and release N5k360+, an enlarged dataset offering comprehensive multi-view coverage suitable for volumetric reconstruction. -->