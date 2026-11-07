---
layout: book
title: "Chapter 6: Triangles"
permalink: /handbook/chapters/06-triangles/
book_section: "Chapters"
previous_title: "Chapter 5: Arithmetic Progressions"
previous_url: /handbook/chapters/05-arithmetic-progressions/
next_title: "Chapter 7: Coordinate Geometry"
next_url: /handbook/chapters/07-coordinate-geometry/
---

## Chapter 6: Triangles

### A. Chapter overview
Similar triangles have the same shape: corresponding angles are equal and corresponding sides are proportional. Proportionality links geometry to measurement.

**Objectives:** apply similarity criteria; prove and use BPT and its converse; compare areas of similar triangles.

### B. Important concepts and explanations
- AA similarity: two corresponding angles equal. SSS: corresponding sides proportional. SAS: included angle equal and surrounding sides proportional.
- **BPT:** A line parallel to one side of a triangle divides the other two sides in the same ratio.
- Proof outline: for $\triangle ABC$, if $D$ lies on $AB$, $E$ on $AC$, and $DE\parallel BC$, compare areas of triangles sharing the same altitude; use equal areas for bases on the same line and equal areas for triangles on the same base and between parallels to obtain $AD/DB=AE/EC$.
- Converse: if $AD/DB=AE/EC$, then $DE\parallel BC$.
- Similar triangles have area ratio equal to the square of the corresponding-side ratio.

#### Visual guide: Basic Proportionality Theorem

```text
             A
            / \
           D---E       DE ∥ BC
          /     \
         B-------C
```

With $D$ on $AB$ and $E$ on $AC$, the parallel segment creates corresponding side ratios.

### C. Formula and theorem sheet

#### Formulae

| Name | Relationship | Meaning and conditions | When to use |
| --- | --- | --- | --- |
| BPT ratio | $\frac{AD}{DB}=\frac{AE}{EC}$ | In $\triangle ABC$, $D$ lies on $AB$, $E$ on $AC$, and $DE\parallel BC$ | Find a missing side segment |
| Similar-triangle area ratio | $\frac{[\triangle_1]}{[\triangle_2]}=(\frac{\text{corresponding side}_1}{\text{corresponding side}_2})^2$ | Triangles are similar and sides are in matching order | Compare areas from a side ratio |

#### Theorems and similarity criteria

| Result | Statement | Proof / use |
| --- | --- | --- |
| Basic Proportionality Theorem | A line parallel to one side of a triangle divides the other two sides in the same ratio | Proof required; use when a parallel segment is given |
| Converse of BPT | If a line divides two sides of a triangle in the same ratio, it is parallel to the third side | Apply to establish parallelism |
| AA similarity | Two corresponding angles are equal | State and apply as a similarity criterion |
| SSS similarity | Corresponding sides are proportional | State and apply as a similarity criterion |
| SAS similarity | Two pairs of corresponding sides are proportional and their included angles are equal | State and apply as a similarity criterion |

### D. Solved board-style examples
**Example 1: BPT calculation**

**Question:** In $\triangle ABC$, $DE\parallel BC$, $AD=3$, $DB=2$, and $AE=6$. Find $EC$.

**Concept used:** BPT.

**Solution:**
1. $AD/DB=AE/EC$.
2. $3/2=6/EC$, so $3EC=12$.
3. $EC=4$.

**Final answer:** **$EC=4$.**

**Exam tip:** Match the segments in the same order along each side.

**Example 2: Similarity by AA**

**Question:** Two triangles each have angles $40^\circ$ and $70^\circ$. Are they similar?

**Concept used:** AA criterion.

**Solution:**
1. The third angle in each is $180^\circ-40^\circ-70^\circ=70^\circ$.
2. Two corresponding angles are equal, so the triangles are similar by AA.

**Final answer:** **Yes, they are similar by AA.**

**Exam tip:** Two angles suffice because the third follows from the angle sum.

**Example 3: Area ratio**

**Question:** Similar triangles have corresponding side ratio $3:5$. Find their area ratio.

**Concept used:** Squares of corresponding side ratio.

**Solution:**
1. Area ratio $=3^2:5^2$.
2. Therefore it is $9:25$.

**Final answer:** **$9:25$.**

**Exam tip:** Do not use the side ratio directly as the area ratio.

### E. Common examination mistakes
- Matching non-corresponding vertices or sides.
- Using BPT without the parallel condition.
- Reversing a ratio on only one side.
- Claiming similarity from equal sides without checking correspondence.
- Forgetting to square side ratios for areas.

### F. Exam tips and problem-solving strategy
Mark equal angles and parallel lines on a diagram. In proofs, name the criterion and state the correspondence order. In BPT calculations, establish the proportionality before substituting lengths.

### G. Quick revision summary
AA, SSS, and SAS establish similarity. BPT applies when a line is parallel; its converse tests parallelism. Similar-triangle area ratios are squares of side ratios.

### H. Chapter-end revision checklist
- [ ] I can state and apply BPT and its converse.
- [ ] I can choose AA, SSS, or SAS correctly.
- [ ] I can identify corresponding sides.
- [ ] I can compare areas using the squared scale factor.

### I. Practice questions
1. If $AD=4, DB=6, AE=5$ and $DE\parallel BC$, find $EC$.
2. Similar triangles have side ratio $2:7$. Find area ratio.
3. Two sides of one triangle are proportional to two sides of another and their included angles are equal. Name the criterion.

**Answers / hints:** 1. $7.5$. 2. $4:49$. 3. SAS.
