---
layout: book
title: "Chapter 7: Coordinate Geometry"
permalink: /handbook/chapters/07-coordinate-geometry/
book_section: "Chapters"
previous_title: "Chapter 6: Triangles"
previous_url: /handbook/chapters/06-triangles/
next_title: "Chapter 8: Introduction to Trigonometry"
next_url: /handbook/chapters/08-introduction-to-trigonometry/
---

## Chapter 7: Coordinate Geometry

### A. Chapter overview
Coordinate formulas turn geometric questions into calculations with ordered pairs.

**Objectives:** calculate distances; find an internally dividing point; use the midpoint as a special case.

**Exam planning estimate (not an official chapter-wise allocation):** Unit III (Coordinate Geometry) carries **6 marks** in the supplied, unverified blueprint. Allow roughly **4–6 marks** or **1–2 questions/subparts** for this chapter in an 80-mark paper.

### B. Important concepts and explanations
The distance formula follows from Pythagoras: horizontal change is $x_2-x_1$, vertical change is $y_2-y_1$. Section formula uses a weighted average, with the nearer endpoint receiving the larger weight.

#### Visual guide: internal division

```text
             P divides AB in m:n
      A────────────P────────────B
             AP:PB = m:n
```

The section formula weights the coordinates of $B$ by $m$ and those of $A$ by $n$.

### C. Formula and theorem sheet

#### Formulae

| Name | Formula | Meaning and conditions | When to use |
| --- | --- | --- | --- |
| Distance | $d=\sqrt{(x_2-x_1)^2+(y_2-y_1)^2}$ | Points $(x_1,y_1)$ and $(x_2,y_2)$ | Find the straight-line distance |
| Internal section | $(\frac{mx_2+nx_1}{m+n},\frac{my_2+ny_1}{m+n})$ | $P$ divides $A(x_1,y_1)B(x_2,y_2)$ internally in ratio $m:n$, $m,n>0$ | Find a point between two endpoints |
| Midpoint | $(\frac{x_1+x_2}{2},\frac{y_1+y_2}{2})$ | Special case of ratio $1:1$ | Find the halfway point |

### D. Solved board-style examples
**Example 1: Distance**

**Question:** Find the distance between $(1,2)$ and $(4,6)$.

**Concept used:** Distance formula.

**Solution:**
1. $d=\sqrt{(4-1)^2+(6-2)^2}$.
2. $d=\sqrt{9+16}=5$.

**Final answer:** **5 units.**

**Exam tip:** Square the signed differences; their signs do not affect the result.

**Example 2: Internal division**

**Question:** Find the point dividing $A(1,2)$ and $B(7,8)$ in ratio $1:2$.

**Concept used:** Section formula.

**Solution:**
1. $m=1,n=2$.
2. Coordinates are $(\frac{1(7)+2(1)}3,\frac{1(8)+2(2)}3)$.
3. The point is $(3,4)$.

**Final answer:** **$(3,4)$.**

**Exam tip:** State clearly which endpoint is associated with $m$.

**Example 3: Midpoint**

**Question:** Find the midpoint of $(-2,5)$ and $(6,1)$.

**Concept used:** Midpoint formula.

**Solution:**
1. Average the x-coordinates: $(-2+6)/2=2$.
2. Average the y-coordinates: $(5+1)/2=3$.

**Final answer:** **$(2,3)$.**

**Exam tip:** Average coordinates separately.

### E. Common examination mistakes
- Omitting a square before adding coordinate differences.
- Mixing x- and y-coordinates.
- Reversing the section-ratio weights.
- Dividing only one coordinate by $m+n$.
- Confusing distance with squared distance.

### F. Exam tips and problem-solving strategy
Write the formula before substituting. For a section point, test whether the result lies between the endpoints. Keep exact radicals unless a decimal is requested.

### G. Quick revision summary
Distance is the Pythagorean length. Internal section coordinates are weighted averages; midpoint is the equal-weight case.

### H. Chapter-end revision checklist
- [ ] I can calculate distance between any two points.
- [ ] I can use the internal section formula with correct weights.
- [ ] I can find and interpret a midpoint.

### I. Practice questions
These are original questions based on recurring CBSE board-exam patterns; they are not reproduced from past papers.

#### Simple
1. Find the midpoint of $(3,4)$ and $(9,-2)$.

#### Medium
2. Find the distance between $(0,-1)$ and $(6,7)$.

#### Complex
3. Find the point dividing the segment joining $(0,0)$ and $(8,4)$ internally in the ratio $3:1$.

#### Answers / hints
1. Average the x-coordinates and the y-coordinates separately.
   The midpoint is $\mathbf{(6,1)}$.
2. Use the distance formula: $\sqrt{(6-0)^2+(7+1)^2}$.
   The distance is $\sqrt{100}=\mathbf{10}$.
3. Apply the section formula with $m:n=3:1$.
   The point is $\left(\frac{3(8)+1(0)}4,\frac{3(4)+1(0)}4\right)=\mathbf{(6,3)}$.
