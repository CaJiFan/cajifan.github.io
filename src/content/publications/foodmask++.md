---
title: "SegBench: A Large-Scale Dataset and Benchmark for Multi-View Food Video Segmentation"
description: "Food image segmentation is a critical task for dietary analysis, enabling accurate estimation of food volume and nutrients."
pubDate: "2025-01-13"
heroImage: "/nerfood.webp"
authors: "Ahmad AlMughrab, Guillermo Rivo, Carlos Jiménez-Farfán, Umair Haroon, Farid Al-Areqi, Hyunjun Jung, Benjamin Busam, Ricardo Marques, Petia Radeva"
venue: "Submitted to Expert Systems with Applications"
url: "https://arxiv.org/abs/2601.07581"
arxiv: "https://arxiv.org/abs/2601.07581"
tags: ["food video segmentation", "dietary assessment", "benchmark dataset", "video-based segmentation", "memory-augmented models", "cross-dataset generalization"]
---

Food image segmentation is a critical task for dietary analysis, enabling accurate estimation of food volume and nutrients. However, current methods suffer from limited multi-view data and poor generalization to new viewpoints. We introduce BenchSeg, a novel multi-view food video segmentation dataset and benchmark. BenchSeg aggregates 55 dish scenes (from Nutrition5k, Vegetables & Fruits, MetaFood3D, and FoodKit) with 25,284 meticulously annotated frames, capturing each dish under free 360° camera motion. We evaluate a diverse set of 20 state-of-the-art segmentation models (e.g., SAM-based, transformer, CNN, and large multimodal) on the existing FoodSeg103 dataset and evaluate them (alone and combined with video-memory modules) on BenchSeg. Quantitative and qualitative results demonstrate that while standard image segmenters degrade sharply under novel view- points, memory-augmented methods maintain temporal consistency across frames. Our best model based on a combination of SeTR-MLA+XMem2 outperforms prior work (e.g., improving over FoodMem by 2.63% mAP), offering new insights into food segmentation and tracking for dietary analysis. We release BenchSeg to foster future research.