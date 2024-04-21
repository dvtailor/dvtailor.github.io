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
paper: https://papers.nips.cc/paper_files/paper/2023/hash/550ab405d0addd3de5b70e57b44878df-Abstract-Conference.html
arxiv: https://arxiv.org/abs/2310.19273
code: https://github.com/team-approx-bayes/memory-perturbation
poster: https://pnickl.github.io/docs/mpe_neurips23.pdf
---

We present the Memory-Perturbation Equation (MPE) which relates model's sensitivity to perturbation in its training data. Derived using Bayesian principles, the MPE unifies existing sensitivity measures, generalizes them to a wide-variety of models and algorithms, and unravels useful properties regarding sensitivities. Our empirical results show that sensitivity estimates obtained during training can be used to faithfully predict generalization on unseen test data.