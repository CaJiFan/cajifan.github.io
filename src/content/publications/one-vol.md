---
title: "OneVol: One-Shot Food Volume Estimation via Diffusion-Based 3D Reconstruction"
description: "Ahmad AlMughrab*, Umair Haroon*, Carlos Jiménez-Farfán*, Ricardo Marques and Petia Radeva"
pubDate: "2025"
heroImage: "/one_vol.webp"
tags: ["Volume Estimation", "3D Reconstruction", "Diffusion-Models"]
---

Accurate food volume estimation is essential for dietary monitoring, medical nutrition management, and food intake analysis. Most existing methods rely on multi-view inputs or depth sensors to achieve precise estimations. In this work, we introduce OneVol, a novel framework that estimates food volume from a single image by leveraging diffusion-based 3D reconstruction techniques. After segmenting the target food item using FoodMem, OneVol employs the latest version Hunyuan3D, a flow-based diffusion neural surface reconstruction model, to generate high-resolution 3D meshes for volume computation. This represents the first demonstration of using diffusion models for food volume estimation from a single view. We introduce a robust metric scaling approach using reference objects to recover real-world dimensions. Extensive experiments on the MetaFood3D dataset demonstrate that our method achieves superior accuracy compared to state-of-the-art approaches, with a mean absolute percentage error of 4.46\% while requiring only a single image as input. Our approach significantly outperforms existing methods, reducing estimation errors by up to 75\% compared to baseline approaches.