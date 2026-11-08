---
layout: book
title: "Chapter 8: Introduction to Trigonometry"
permalink: /handbook/chapters/08-introduction-to-trigonometry/
book_section: "Chapters"
previous_title: "Chapter 7: Coordinate Geometry"
previous_url: /handbook/chapters/07-coordinate-geometry/
next_title: "Chapter 9: Some Applications of Trigonometry"
next_url: /handbook/chapters/09-applications-of-trigonometry/
---

## Chapter 8: Introduction to Trigonometry

### A. Chapter overview
Trigonometric ratios compare sides of a right triangle relative to an acute angle.

**Objectives:** define six ratios; recall standard values; use reciprocal relationships and the fundamental identity.

**Assessment note:** No assessment allocations are published here because current CBSE figures could not be verified. CBSE unit information does not guarantee chapter marks or question counts; see the [examination blueprint]({{ '/handbook/sections/examination-blueprint/' | relative_url }}).

### B. Important concepts and explanations
Relative to angle $A$, opposite, adjacent, and hypotenuse identify sides. $\sin A=O/H$, $\cos A=A/H$, $\tan A=O/A$; cosec, sec, and cot are reciprocals. Ratios depend on the angle, not the triangle's size.

#### Visual guide: name sides from angle $A$

```text
                 C
                 |\
  opposite (O)   | \  hypotenuse (H)
                 |  \
                 |___\
                 B   A
                  adjacent (Adj)
```

The right angle is at $B$; for angle $A$, the opposite side is $BC$ and the adjacent side is $AB$.

### C. Formula and theorem sheet

#### Trigonometric ratios

| Ratio | Definition | Conditions |
| --- | --- | --- |
| $\sin A$ | $\frac{O}{H}$ | Acute angle in a right triangle |
| $\cos A$ | $\frac{Adj}{H}$ | Acute angle in a right triangle |
| $\tan A$ | $\frac{O}{Adj}$ | Undefined when $Adj=0$ |
| $\cosec A$ | $\frac{H}{O}=\frac1{\sin A}$ | Undefined when $\sin A=0$ |
| $\sec A$ | $\frac{H}{Adj}=\frac1{\cos A}$ | Undefined when $\cos A=0$ |
| $\cot A$ | $\frac{Adj}{O}=\frac1{\tan A}$ | Undefined when $\tan A=0$ |

| Angle | $0^\circ$ | $30^\circ$ | $45^\circ$ | $60^\circ$ | $90^\circ$ |
| --- | ---: | ---: | ---: | ---: | ---: |
| $\sin$ | 0 | $1/2$ | $1/\sqrt2$ | $\sqrt3/2$ | 1 |
| $\cos$ | 1 | $\sqrt3/2$ | $1/\sqrt2$ | $1/2$ | 0 |
| $\tan$ | 0 | $1/\sqrt3$ | 1 | $\sqrt3$ | undefined |

#### Identity

| Name | Identity | Use |
| --- | --- | --- |
| Fundamental identity | $\sin^2A+\cos^2A=1$ | Relate sine and cosine or verify a simple identity |

At $0^\circ$ and $90^\circ$, check the denominator before using any reciprocal ratio.

### D. Solved board-style examples
**Example 1: Find all ratios**

**Question:** A right triangle has opposite side 3, adjacent side 4, and hypotenuse 5 relative to $A$. Find its six ratios.

**Concept used:** Definitions.

**Solution:**
1. $\sin A=3/5$, $\cos A=4/5$, $\tan A=3/4$.
2. Reciprocals give $\cosec A=5/3$, $\sec A=5/4$, $\cot A=4/3$.

**Final answer:** **$3/5,4/5,3/4,5/3,5/4,4/3$ respectively.**

**Exam tip:** Identify the angle before labelling opposite and adjacent.

**Example 2: Identity**

**Question:** If $\sin A=3/5$ and $A$ is acute, find $\cos A$.

**Concept used:** Fundamental identity.

**Solution:**
1. $\cos^2A=1-\sin^2A=1-9/25=16/25$.
2. Since $A$ is acute, $\cos A>0$, so $\cos A=4/5$.

**Final answer:** **$4/5$.**

**Exam tip:** Use the acute-angle condition to choose the positive root.

**Example 3: Standard values**

**Question:** Evaluate $\sin30^\circ+\cos60^\circ+\tan45^\circ$.

**Concept used:** Standard values.

**Solution:**
1. Substitute: $1/2+1/2+1=2$.

**Final answer:** **2.**

**Exam tip:** Memorise the value table and check definedness before using a ratio.

### E. Common examination mistakes
- Swapping opposite and adjacent for a different marked angle.
- Treating cosec as $1-\sin$ instead of $1/\sin$.
- Forgetting $\tan90^\circ$ is undefined.
- Dropping the positive sign condition for an acute angle.
- Squaring only one term in an identity.

### F. Exam tips and problem-solving strategy
Sketch and label the right triangle. Reduce ratios, use reciprocals carefully, and state undefined cases rather than assigning a numerical value. Verify simple identities by substituting known ratios.

### G. Quick revision summary
SOH-CAH-TOA defines the three primary ratios. Their reciprocals are cosec, sec, cot. For acute angles, ratios are positive; $\sin^2A+\cos^2A=1$.

### H. Chapter-end revision checklist
- [ ] I can identify the three sides relative to an angle.
- [ ] I know the six ratios and standard values.
- [ ] I know which endpoint values are undefined.
- [ ] I can apply the fundamental identity.

### I. Practice questions
These are original questions written for this handbook; they are not copied from past papers.

**Difficulty guide:** Simple questions check one direct skill; Medium questions require choosing or combining a method; Complex questions require multi-step reasoning or modelling.

#### Simple
**S1.** State the value of $\cot90^\circ$.

**S2.** Evaluate $\sin30^\circ+\cos60^\circ$.

#### Medium
**M1.** Evaluate $2\sin30^\circ+\sec60^\circ$.

**M2.** If $\sin A=3/5$ for acute $A$, find $\cos A$ and $\tan A$.

#### Complex
**C1.** If $\tan A=5/12$ for acute $A$, find $\sin A+\cos A$.

**C2.** If $\sec A=13/12$ for acute $A$, find $\tan A$ and $\sin A$.

#### Answers / hints
**S1.** $\cot90^\circ=\mathbf{0}$.

**S2.** Substitute the standard values: $1/2+1/2$.

The value is **1**.

**M1.** Substitute the standard values: $2(1/2)+2$.

The value is **3**.

**M2.** $\cos A=\sqrt{1-\sin^2A}=\sqrt{16/25}=4/5$ because $A$ is acute.

$\tan A=(3/5)/(4/5)=\mathbf{3/4}$.

**C1.** Use a right triangle with opposite side 5, adjacent side 12, and hypotenuse 13.

Then $\sin A+\cos A=5/13+12/13=\mathbf{17/13}$.

**C2.** $\sec A=13/12$ gives adjacent 12 and hypotenuse 13, so opposite $=\sqrt{13^2-12^2}=5$.

Thus $\tan A=\mathbf{5/12}$ and $\sin A=\mathbf{5/13}$.
