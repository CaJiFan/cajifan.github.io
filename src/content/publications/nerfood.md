---
title: "Evaluating Large Multimodal Models for Neural Radiance Fields: A Benchmark Enriched with Contextual Metadata"
description: "Ahmad AlMughrab, Carlos Jiménez-Farfán, Ricardo Marques and Petia Radeva"
pubDate: "2025"
heroImage: "/nerfood.webp"
badge: "Submitted to Pattern Recognition Letters"
tags: ["NeRF", "Food Computing", "Neural Reconstruction", "3D Reconstruction"]
---

Neural Radiance Fields (NeRFs) have increasingly become a cornerstone in 3D scene representation, leveraging implicit neural models for high-fidelity view synthesis and geometry capture. Despite their success in closed or bounded scenes, conventional NeRF variants struggle in open-world contexts, where unconstrained camera trajectories and variable content depths exacerbate reconstruction errors, induce aliasing, and elongate optimization times. We propose NeRFood, a robust NeRF-inspired pipeline tailored for open-food scenes. NeRFood integrates strategies for multi-video input fusion, informative keyframe selection, and pose estimation that withstands geometric ambiguity and symmetry. Crucially, it incorporates neural surface reconstruction, yielding explicit mesh extraction and enabling generation of over 2,885 food meshes—a significant expansion in 3D food model availability. Meshes are essential not only for AR/VR and robotics but also as training assets for diffusion-based 3D generative models. Their importance is amplified for food, where deformability, diversity, and lack of 3D datasets hinder progress in nutrition monitoring and food synthesis. To further advance this direction, we adapt the Nutrition5k dataset to the NeRF domain and release N5k360+, an enlarged dataset offering comprehensive multi-view coverage suitable for volumetric reconstruction.