---
layout: post
title:  "The Memory-Perturbation Equation: Understanding Model's Sensitivity to Data"
date:   2023-09-20 23:59:59 +00:00
image: /images/memory-perturbation.png
categories: research
author: "Dharmesh Tailor"
authors: "Peter Nickl, Lu Xu*, <strong>Dharmesh Tailor*</strong>, Thomas Möllenhoff, Emtiyaz Khan"
venue: "37th Conference on Neural Information Processing Systems (NeurIPS)"
venue2: "ICML 2023 Workshop on Principles of Duality for Modern Machine Learning"
paper: https://dp4ml.github.io/assets/pdf/MemoryPerturbation.pdf
---

Understanding model's sensitivity to its training data is crucial not only for safe and robust operation but also for future adaptations. We present the memory-perturbation equation (MPE) which relates model’s sensitivity to perturbation in its training data. Derived using Bayesian principles, the MPE unifies existing influence measures, generalizes them to a wide-variety of models and algorithms, and unravels useful properties regarding sensitivity. Our empirical results show that sensitivity estimates obtained during training can faithfully predict generalization on unseen test data and avoid the need for expensive retraining. The equation is useful for future research on robust and adaptive learning.