---
layout: book
title: "Chapter 5: Arithmetic Progressions"
permalink: /handbook/chapters/05-arithmetic-progressions/
book_section: "Chapters"
previous_title: "Chapter 4: Quadratic Equations"
previous_url: /handbook/chapters/04-quadratic-equations/
next_title: "Chapter 6: Triangles"
next_url: /handbook/chapters/06-triangles/
---

## Chapter 5: Arithmetic Progressions

### A. Chapter overview
An arithmetic progression (AP) adds the same common difference at each step. Its term and sum formulas follow from this regular pattern.

**Objectives:** identify an AP; find terms, number of terms, and sums; model repeated increases or decreases.

**Assessment note:** No assessment allocations are published here because current CBSE figures could not be verified. CBSE unit information does not guarantee chapter marks or question counts; see the [examination blueprint]({{ '/handbook/sections/examination-blueprint/' | relative_url }}).

### B. Important concepts and explanations
An AP has terms $a,a+d,a+2d,\ldots$, where $a$ is first term and $d$ common difference. Subtract consecutive terms to test whether the difference is constant.

#### Visual guide: equal steps

```text
 a        a+d       a+2d      a+3d
 ●─────────●─────────●─────────●────→
      d         d         d
```

Every step adds the same common difference $d$; $d$ can also be negative.

### C. Formula and theorem sheet

#### Formulae

| Name | Formula | Meaning and conditions | When to use |
| --- | --- | --- | --- |
| $n$th term | $a_n=a+(n-1)d$ | $a$ first term; $d$ common difference; $n\ge1$ | Find a specified term or term number |
| Sum of first $n$ terms | $S_n=\frac n2[2a+(n-1)d]$ | $a$ first term; $d$ common difference; $n\ge1$ | Find a total without adding each term |
| Sum using last term | $S_n=\frac n2(a+l)$ | $l$ is the last included term | Use when the first and last terms are known |

### D. Solved board-style examples
**Example 1: Find a term**

**Question:** Find the 20th term of $5,8,11,\ldots$.

**Concept used:** $n$th-term formula.

**Solution:**
1. $a=5,d=3,n=20$.
2. $a_{20}=5+19(3)=62$.

**Final answer:** **62.**

**Exam tip:** The multiplier is $n-1$, not $n$.

**Example 2: Sum**

**Question:** Find the sum of the first 15 terms of $2,5,8,\ldots$.

**Concept used:** AP sum.

**Solution:**
1. $a=2,d=3,n=15$.
2. $S_{15}=\frac{15}{2}[4+14(3)]=\frac{15}{2}(46)=345$.

**Final answer:** **345.**

**Exam tip:** Check whether the expression inside brackets is even before simplifying.

**Example 3: Saving pattern**

**Question:** A student saves ₹10 in week 1 and increases the saving by ₹5 each week. How much is saved in week 12?

**Concept used:** $n$th term.

**Solution:**
1. $a=10,d=5,n=12$.
2. $a_{12}=10+11(5)=65$.

**Final answer:** **₹65 in week 12.**

**Exam tip:** A question asking “in week 12” asks for a term, not the total.

### E. Common examination mistakes
- Using the wrong first term after skipping terms.
- Reversing the subtraction order for $d$ midway.
- Confusing a term with the sum of terms.
- Substituting $n$ instead of $n-1$.
- Forgetting units or rupees in application questions.

### F. Exam tips and problem-solving strategy
Write $a,d,n$ first. For a missing term or term count, set the formula equal to the given value and solve. If the pattern decreases, $d$ is negative.

### G. Quick revision summary
Constant consecutive difference defines an AP. Use $a+(n-1)d$ for one term and the sum formula for a cumulative total.

### H. Chapter-end revision checklist
- [ ] I can identify $a$ and $d$.
- [ ] I can find a specified term or term number.
- [ ] I can calculate a partial sum.
- [ ] I can distinguish a single term from a cumulative quantity.

### I. Practice questions
These are original questions written for this handbook; they are not copied from past papers.

**Difficulty guide:** Simple questions check one direct skill; Medium questions require choosing or combining a method; Complex questions require multi-step reasoning or modelling.

#### Simple
**S1.** Find the 25th term of $7,3,-1,\ldots$.

**S2.** Find the common difference of $12,7,2,-3,\ldots$.

#### Medium
**M1.** Which term of $2,6,10,\ldots$ is 50?

**M2.** Find the sum of the first 8 terms of $3,7,11,\ldots$.

#### Complex
**C1.** Find the sum of the first 10 terms of $4,7,10,\ldots$.

**C2.** The 5th term of an AP is 18 and its 12th term is 46. Find the first term and the sum of the first 12 terms.

#### Answers / hints
**S1.** Here $a=7$ and $d=-4$; use $a_n=a+(n-1)d$.

$a_{25}=7+24(-4)=\mathbf{-89}$.

**S2.** Subtract consecutive terms: $7-12=-5$.

The common difference is **$-5$**.

**M1.** Solve $2+(n-1)4=50$.

This gives $n=13$, so 50 is the **13th term**.

**M2.** Here $a=3,d=4,n=8$.

$S_8=\frac82[6+7(4)]=\mathbf{136}$.

**C1.** Here $a=4$, $d=3$, and $n=10$.

$S_{10}=\frac{10}{2}[2(4)+9(3)]=\mathbf{175}$.

**C2.** Subtract term equations: $7d=46-18=28$, so $d=4$ and $a=18-4d=2$.

$S_{12}=\frac{12}{2}[2(2)+11(4)]=\mathbf{288}$.
