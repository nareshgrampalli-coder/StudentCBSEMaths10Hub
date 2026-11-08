---
layout: book
title: "Chapter 13: Statistics"
permalink: /handbook/chapters/13-statistics/
book_section: "Chapters"
previous_title: "Chapter 12: Surface Areas and Volumes"
previous_url: /handbook/chapters/12-surface-areas-and-volumes/
next_title: "Chapter 14: Probability"
next_url: /handbook/chapters/14-probability/
---

## Chapter 13: Statistics

### A. Chapter overview
Grouped data summarises many observations in intervals. Mean, median, and mode describe different aspects of its centre.

**Objectives:** find class marks; calculate mean by three methods; identify median/modal classes; calculate grouped median and mode; interpret results.

**Assessment note:** No assessment allocations are published here because current CBSE figures could not be verified. CBSE unit information does not guarantee chapter marks or question counts; see the [examination blueprint]({{ '/handbook/sections/examination-blueprint/' | relative_url }}).

### B. Important concepts and explanations
- Class mark $x_i=(\text{lower limit}+\text{upper limit})/2$.
- Direct mean uses $\sum f_ix_i/\sum f_i$.
- Assumed-mean method sets $d_i=x_i-a$; step-deviation sets $u_i=(x_i-a)/h$.
- Median class contains the $N/2$th observation in cumulative frequencies.
- Modal class has the highest frequency.

#### Visual guide: grouped frequencies

```text
Frequency
  8 |       ████████
  6 |       ████████  ██████
  4 | ████  ████████  ██████
  2 | ████  ████████  ██████  ████
    +----------------------------→ Class interval
       0–10  10–20    20–30   30–40
```

The tallest bar identifies the modal class; cumulative frequencies are used to locate the median class.

### C. Formula and theorem sheet

#### Formulae

| Measure / method | Formula | Meaning and conditions | When to use |
| --- | --- | --- | --- |
| Class mark | $x_i=\frac{\text{lower limit}+\text{upper limit}}2$ | Midpoint of class $i$ | Represent a class by one value |
| Direct mean | $\bar{x}=\frac{\sum f_ix_i}{N}$ | $N=\sum f_i$; $x_i$ class mark | Find the frequency-weighted average |
| Assumed-mean mean | $\bar{x}=a+\frac{\sum f_id_i}{N}$ | $d_i=x_i-a$; $a$ is assumed mean | Simplify calculations using deviations |
| Step-deviation mean | $\bar{x}=a+h\frac{\sum f_iu_i}{N}$ | $u_i=(x_i-a)/h$; $h$ is common class width | Simplify further when class widths are equal |
| Grouped median | $l+\frac{(N/2-cf)}{f}h$ | $l$ lower boundary of median class; $cf$ cumulative frequency before it; $f$ its frequency; $h$ class width | Estimate the middle value of grouped observations |
| Grouped mode | $l+\frac{f_1-f_0}{2f_1-f_0-f_2}h$ | $l$ lower boundary of modal class; $f_1$ modal frequency; $f_0,f_2$ adjacent frequencies; $h$ class width | Estimate the most frequent value |

### D. Solved board-style examples
**Example 1: Direct mean**

**Question:** Values $x_i$ are 10, 20; frequencies are 2, 3. Find the mean.

**Concept used:** Direct method.

**Solution:**
1. $\sum f_ix_i=2(10)+3(20)=80$.
2. $N=2+3=5$.
3. Mean $=80/5=16$.

**Final answer:** **16.**

**Exam tip:** The total frequency is the denominator.

**Example 2: Median**

**Question:** Classes 0–10, 10–20, 20–30 have frequencies 4, 8, 8. Find the grouped median, using continuous class boundaries.

**Concept used:** Median formula.

**Solution:**
1. $N=20$, so $N/2=10$. Cumulative frequencies are 4, 12, 20; median class is 10–20.
2. $l=10,cf=4,f=8,h=10$.
3. Median $=10+\frac{10-4}{8}(10)=17.5$.

**Final answer:** **17.5.**

**Exam tip:** $cf$ means cumulative frequency before the median class.

**Example 3: Mode**

**Question:** For classes 0–10, 10–20, 20–30, frequencies 3, 8, 5, estimate the mode.

**Concept used:** Grouped mode.

**Solution:**
1. Modal class is 10–20. Thus $l=10,h=10,f_1=8,f_0=3,f_2=5$.
2. Mode $=10+\frac{8-3}{16-3-5}(10)=10+\frac{50}{8}=16.25$.

**Final answer:** **16.25.**

**Exam tip:** Identify the frequencies before, in, and after the modal class.

### E. Common examination mistakes
- Using class limits instead of class marks for mean.
- Miscalculating cumulative frequencies.
- Selecting median class by highest frequency rather than $N/2$.
- Using the wrong adjacent frequencies in the mode formula.
- Omitting class width or using inconsistent boundaries.

### F. Exam tips and problem-solving strategy
Make a table with class, class mark, frequency, and required products. For median/mode, record all formula symbols beside the selected class. Interpret the result in the data's units and context.

### G. Quick revision summary
Mean is frequency-weighted average. Median locates the middle via cumulative frequency. Mode estimates the most frequent value using the modal class and its neighbours.

### H. Chapter-end revision checklist
- [ ] I can compute class marks and total frequency.
- [ ] I can use direct, assumed-mean, and step-deviation means.
- [ ] I can locate the median and modal classes.
- [ ] I can substitute grouped median/mode values correctly.

### I. Practice questions
These are original questions written for this handbook; they are not copied from past papers.

**Difficulty guide:** Simple questions check one direct skill; Medium questions require choosing or combining a method; Complex questions require multi-step reasoning or modelling.

#### Simple
**S1.** Frequencies for values $5,10,15$ are $1,2,1$, respectively. Find the mean.

**S2.** Find the class mark of the interval $20$–$30$.

#### Medium
**M1.** Frequencies are $2,6,2$ in consecutive classes $0$–$10$, $10$–$20$, and $20$–$30$. Identify the median class.

**M2.** For $x_i=2,4,6$ and $f_i=1,3,2$, find the mean.

#### Complex
**C1.** For a grouped distribution, the modal-class frequency is 12, the preceding frequency is 7, the following frequency is 5, the class width is 10, and the lower boundary is 20. Find the mode.

**C2.** Classes $0$–$10$, $10$–$20$, $20$–$30$ have frequencies $3,5,2$. Find the grouped median, using continuous class boundaries.

#### Answers / hints
**S1.** Use $\bar{x}=\frac{\sum f_ix_i}{\sum f_i}$.

The mean is $(5+20+15)/4=\mathbf{10}$.

**S2.** Class mark $=(20+30)/2=\mathbf{25}$.

**M1.** The total frequency is 10, so the median position is the 5th observation.

The cumulative frequency first reaches 5 in $10$–$20$; this is the median class.

**M2.** $\sum f_ix_i=2+12+12=26$ and $N=6$.

The mean is $\mathbf{13/3}$.

**C1.** Use $\text{Mode}=l+\frac{f_1-f_0}{2f_1-f_0-f_2}h$.

$20+\frac{12-7}{24-7-5}(10)=\mathbf{24\frac16}$.

**C2.** $N=10$, so $N/2=5$; cumulative frequencies are $3,8,10$, making $10$–$20$ the median class.

With $l=10,cf=3,f=5,h=10$, median $=10+\frac{5-3}{5}(10)=\mathbf{14}$.
