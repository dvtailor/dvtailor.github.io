---
pageClass: home-page
# some data for the components

name: Dharmesh Tailor
profile: /profile.jpg

socials:
  - title: google scholar
    icon: /icons/gs.svg
    link: https://scholar.google.co.uk/citations?user=boyVlJgAAAAJ
  - title: github
    icon: /icons/github.svg
    link: https://github.com/dvtailor
  - title: twitter
    icon: /icons/twitter.svg
    link: https://twitter.com/dtailor17

bio: 3rd-year PhD Student @ AMLab, University of Amsterdam
email: d.v.tailor [ AT ] uva.nl
---

<ProfileSection :frontmatter="$page.frontmatter" />

## About Me

I am a final year PhD student in the [Amsterdam Machine Learning Lab](https://amlab.science.uva.nl/) supervised by [Eric Nalisnick](https://enalisnick.github.io/) (Johns Hopkins University).
I also closely collaborate with [Emtiyaz Khan](https://emtiyaz.github.io/) (RIKEN AIP) and the [Approximate Bayesian Inference Team](https://team-approx-bayes.github.io/).
I am interested in building safe, interpretable and robust AI systems. My work is rooted in Bayesian principles, uncertainty quantification, local sensitivity measures and human-AI interplay.

<p style="font-size:17px; padding-top:0.75em ">Short Bio</p>

- PhD candidate at [Amsterdam Machine Learning Lab](https://amlab.science.uva.nl/), <span style="color:FireBrick; ">University of Amsterdam</span>, Netherlands <br/>
<span style="color:Gray; ">Sept 2021 - *present*</span>

- Research intern at [<span style="color:FireBrick; ">Qualcomm AI Research</span>](https://www.qualcomm.com/research/artificial-intelligence/ai-research), Netherlands <br/>
<span style="color:Gray; ">July - Nov 2024</span>

- Research assistant at [Approximate Bayesian Inference Team](https://team-approx-bayes.github.io/), [<span style="color:FireBrick; ">RIKEN Centre for Advanced Intelligence Project</span>](https://aip.riken.jp/), Tokyo, Japan <br/>
<span style="color:Gray; ">May 2019 - July 2021</span>, <span style="color:Gray; ">Feb 2024 - July 2024 (student trainee)</span>

- Young Graduate Trainee at [Advanced Concepts Team](https://www.esa.int/gsp/ACT/), [<span style="color:FireBrick; ">European Space Agency</span>](https://www.esa.int/), Netherlands <br/>
<span style="color:Gray; ">Sept 2017 - Dec 2018</span>

- MSc in Artificial Intelligence (ML & CompNeuro track) at <span style="color:FireBrick; ">University of Edinburgh</span>, United Kingdom <br/>
<span style="color:Gray; ">2016 - 2017</span>

- BEng in Mathematics and Computer Science at <span style="color:FireBrick; ">Imperial College London</span>, United Kingdom <br/>
<span style="color:Gray; ">2013 - 2016</span>

## Recent News

[[Past News](/pastnews/)]

- [01/2025] Accepted paper at [ICLR 2025](https://iclr.cc/Conferences/2025/) on Approximating Full Conformal Prediction for Neural Network Regression with Gauss-Newton Influence
- [07/2024] Joined Qualcomm AI Research as a summer intern in the Distributed Learning & AI Safety Team working with [Christos Louizos](https://scholar.google.nl/citations?user=xrSUChoAAAAJ&hl=en) and [Alvaro Correia](https://scholar.google.com/citations?user=E9h9QKEAAAAJ&hl=en)
- [06/2024] Participated in the [2nd Bayes-Duality Workshop](https://bayesduality.github.io/workshop_2024.html) in Japan between June 12-28 (talk + part of organizing team)</a>
- [05/2024] Received [Student Paper Highlight](https://virtual.aistats.org/virtual/2024/awards_detail) award for oral paper at [AISTATS 2024](https://aistats.org/aistats2024/)
- [03/2024] Poster presentation at [Deep Learning: Theory, Applications, and Implications workshop](https://sites.google.com/view/dl2024/) in Tokyo
- [02/2024] (Re-)joined RIKEN AIP in Tokyo as a [student trainee](https://aip.riken.jp/aip-osc2-0/) working with [Emtiyaz Khan](https://emtiyaz.github.io/) (until July 2024)
- [01/2024] Accepted paper (oral) at [AISTATS 2024](https://aistats.org/aistats2024/) on Learning to Defer to a Population: A Meta-Learning Approach
- [12/2023] Poster presentation at [NeurIPS 2023](https://nips.cc/Conferences/2023) in New Orleans
- [11/2023] Oral presentation at Dutch Society of Pattern Recognition and Image Processing [Fall Meeting on Anomaly Detection](https://nvphbv.nl/event/fall-meeting-2023-anomaly-detection-229/)
- [10/2023] Teaching assistant for [Human-in-the-Loop Machine Learning](https://enalisnick.github.io/human_ML.html) (UvA Master AI course) taught by [Eric Nalisnick](https://enalisnick.github.io/)

## Papers

[[All Publications](/papers/)]

<ProjectCard image="/images/approx-fullcp.png" hideBorder=true>

  **<p style="font-size:16px; ">Approximating Full Conformal Prediction for Neural Network Regression with Gauss-Newton Influence</p>**
  **<u>Dharmesh Tailor</u>**, Alvaro Correia, Eric Nalisnick, Christos Louizos
  
  *<span style="font-size:14px">13th International Conference on Learning Representations (ICLR)</span>*, <span style="font-size:14px">2025</span>
  
  [paper](https://openreview.net/forum?id=vcX0k4rGTt) /
  
  <!-- <p>&nbsp;</p> -->
  
  <p style="font-size:14px; padding-top:0.5rem">In this work, we construct prediction intervals for neural network regressors post-hoc without held-out data. This is achieved by approximating the full conformal prediction method (full-CP). Whilst full-CP nominally requires retraining the model for every test point and candidate label, we propose to train just once and locally perturb model parameters using Gauss-Newton influence to approximate the effect of retraining. On standard regression benchmarks and bounding box localization, we show the resulting prediction intervals are locally-adaptive and often tighter than those of split-CP.</p>

</ProjectCard>

<ProjectCard image="/images/l2d_meta.png" hideBorder=true>

  **<p style="font-size:16px; ">Learning to Defer to a Population: A Meta-Learning Approach</p>**
  <u>**Dharmesh Tailor**</u>, Aditya Patra, Rajeev Verma, Putra Manggala, Eric Nalisnick
  
  *<span style="font-size:14px">27th International Conference on Artificial Intelligence and Statistics (AISTATS)</span>*, <span style="font-size:14px">2024</span>
  
  <p style="color:red; font-size:14px">Oral presentation & Outstanding Student Paper award (top-1% of accepted papers)</p>
  
  [paper](https://proceedings.mlr.press/v238/tailor24a.html) / [arXiv](https://arxiv.org/abs/2403.02683) / [code](https://github.com/dvtailor/meta-l2d) / [poster](./docs/poster_aistats24.pdf) / [slides](./docs/slides_aistats24.pdf)
  
  <!-- <p>&nbsp;</p> -->
  
  <p style="font-size:14px; padding-top:0.5rem">We formulate a learning to defer (L2D) system that can cope with never-before-seen experts at test-time. We accomplish this by using meta-learning, considering both optimization- and model-based variants. Given a small context set to characterize the currently available expert, our framework can quickly adapt its deferral policy. For the model-based approach, we employ an attention mechanism that is able to look for points in the context set that are similar to a given test point, leading to an even more precise assessment of the expert’s abilities.</p>

</ProjectCard>

<ProjectCard image="/images/memory-perturbation.png" hideBorder=true>

  **<p style="font-size:16px; ">The Memory-Perturbation Equation: Understanding Model's Sensitivity to Data</p>**
  Peter Nickl, Lu Xu\*, <u>**Dharmesh Tailor**</u>\*, Thomas Möllenhoff, Emtiyaz Khan
  
  *<span style="font-size:14px">37th Conference on Neural Information Processing Systems (NeurIPS)</span>*, <span style="font-size:14px">2023</span>
  
  *<span style="font-size:14px">ICML 2023 Workshop on Principles of Duality for Modern Machine Learning</span>*
  
  [paper](https://papers.nips.cc/paper_files/paper/2023/hash/550ab405d0addd3de5b70e57b44878df-Abstract-Conference.html) / [arXiv](https://arxiv.org/abs/2310.19273) / [code](https://github.com/team-approx-bayes/memory-perturbation) / [poster](https://pnickl.github.io/docs/mpe_neurips23.pdf)
  
  <!-- <p>&nbsp;</p> -->
  
  <p style="font-size:14px; padding-top:0.5rem">We present the Memory-Perturbation Equation (MPE) which relates model’s sensitivity to perturbation in its training data. Derived using Bayesian principles, the MPE unifies existing sensitivity measures, generalizes them to a wide-variety of models and algorithms, and unravels useful properties regarding sensitivities. Our empirical results show that sensitivity estimates obtained during training can be used to faithfully predict generalization on unseen test data.</p>

</ProjectCard>


<ProjectCard image="/images/neural-process.png" hideBorder=true>

  **<p style="font-size:16px; ">Exploiting Inferential Structure in Neural Processes</p>**
  **<u>Dharmesh Tailor</u>**, Emtiyaz Khan, Eric Nalisnick
  
  *<span style="font-size:14px">39th Conference on Uncertainty in Artificial Intelligence (UAI)</span>*, <span style="font-size:14px">2023</span>
  
  *<span style="font-size:14px">5th Workshop on Tractable Probabilistic Modeling at UAI 2022</span>*
  
  [paper](https://proceedings.mlr.press/v216/tailor23a.html) / [arXiv](https://arxiv.org/abs/2306.15169) / [poster](https://dvtailor.github.io/docs/poster_uai23.pdf)
  
  <!-- <p>&nbsp;</p> -->
  
  <p style="font-size:14px; padding-top:0.5rem">This work provides a framework that allows the latent variable of Neural Processes to be given a rich prior defined by a graphical model. These distributional assumptions directly translate into an appropriate aggregation strategy for the context set. We describe a message-passing procedure that still allows for end-to-end optimization with stochastic gradients. We demonstrate the generality of our framework by using mixture and Student-t assumptions that yield improvements in function modelling and test-time robustness.</p>

</ProjectCard>

## Talks

**5. How to Build Transparent and Trustworthy AI**<br>
[2nd Bayes-Duality Workshop](https://bayesduality.github.io/workshop_2024.html) (Japan), 06/2024<br>
Jointly with [Emtiyaz Khan](https://emtiyaz.github.io/) (main speaker)<br>
[video](https://youtu.be/ABveE8COgNs?t=7413) /

**4. Learning to Defer to a Population: A Meta-Learning Approach** <span style="color:red">(<u>Oral presentation</u>)</span><br>
*[27th International Conference on Artificial Intelligence and Statistics](https://aistats.org/aistats2024/)* (Spain), 05/2024<br>
[slides](./docs/slides_aistats24.pdf) /

**3. Memory Maps to Understand Models**<br>
*[Dutch Society of Pattern Recognition and Image Processing: Fall Meeting on Anomaly Detection](https://nvphbv.nl/event/fall-meeting-2023-anomaly-detection-229/)* (Amsterdam, Netherlands), 11/2023 <span style="color:red">(<u>Oral presentation</u>)</span><br>
[1st Bayes-Duality Workshop](https://bayesduality.github.io/workshop_2023.html) (Japan), 06/2023<br>
[ESA Advanced Concepts Team Science Coffee](https://www.esa.int/gsp/ACT/coffee/2023-04-21%20-%20Dharmesh%20Tailor/) (Netherlands), 04/2023<br>
[slides](./docs/memory-maps-talk.pdf) /

**2. Adaptive and Robust Learning with Bayes**<br>
*[NeurIPS Bayesian Deep Learning workshop](http://bayesiandeeplearning.org/)* (virtual), 12/2021<br>
Jointly with [Emtiyaz Khan](https://emtiyaz.github.io/) (main speaker) & [Siddharth Swaroop](https://siddharthswaroop.github.io/) <br>
[video](https://slideslive.com/38973510/adaptive-and-robust-learning-with-bayes) / [slides](https://emtiyaz.github.io/papers/Dec14_2021_NeurIPS_BDL.pdf)

**1. Identifying Memorable Experiences of Learning Machines** <br>
*[RIKEN AIP Open Seminar](https://aip.riken.jp/video/aip-open-seminar-16/)* (virtual), 03/2021 <br>
[video](https://youtu.be/XvTFW0MqtZE?t=2234) / [slides](./docs/riken_seminar_march2021.pdf)


<!-- Custom style for this page -->

<style lang="stylus">

.theme-container.home-page .page
  font-size 15px
  font-family "lucida grande", "lucida sans unicode", lucida, "Helvetica Neue", Helvetica, Arial, sans-serif;
  p
    margin 0 0 0.5rem
  p, ul, ol
    line-height normal
  a
    font-weight normal
  .theme-default-content:not(.custom) > h2
    margin-bottom 0.5rem
  .theme-default-content:not(.custom) > h2:first-child + p
    margin-top 0.5rem
  .theme-default-content:not(.custom) > h3
    padding-top 4rem

  /* Override */
  .md-card
    margin-top 0.5em
    .card-image
      padding 0.2rem
    .card-content p
      -webkit-margin-after 0.2em

@media (max-width: 419px)
  .theme-container.home-page .page
    p, ul, ol
      line-height 1.5

    .md-card
      .card-image
        img 
          width 100%
          max-width 400px

</style>
