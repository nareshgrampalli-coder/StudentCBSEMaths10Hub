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

**Assessment note:** CBSE publishes unit-level assessment information, not guaranteed chapter marks or question counts. The supplied unit figures are unverified planning information; see the [examination blueprint]({{ '/handbook/sections/examination-blueprint/' | relative_url }}) and confirm current details with CBSE.

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
These are original questions written for this handbook; they are not copied from past papers.

**Difficulty guide:** Simple questions check one direct skill; Medium questions require choosing or combining a method; Complex questions require multi-step reasoning or modelling.

#### Simple
**S1.** Two sides of one triangle are proportional to two sides of another, and their included angles are equal. Name the similarity criterion.

**S2.** Two triangles have two pairs of corresponding angles equal. State the similarity criterion.

#### Medium
**M1.** Similar triangles have corresponding side ratio $2:7$. Find their area ratio.

**M2.** In $\triangle ABC$, $DE\parallel BC$, $AD=3$, $DB=4$, and $AE=6$. Find $EC$.

#### Complex
**C1.** In $\triangle ABC$, $DE\parallel BC$, $AD=4$, $DB=6$, and $AE=5$. Find $EC$ and the ratio of the areas of $\triangle ADE$ and $\triangle ABC$.

**C2.** Two similar triangles have areas $36\text{ cm}^2$ and $64\text{ cm}^2$. A side of the smaller triangle is 9 cm. Find the corresponding side of the larger triangle.

#### Answers / hints
**S1.** The included-angle condition and proportional sides give the **SAS similarity criterion**.

**S2.** Two equal pairs of corresponding angles establish **AA similarity**.

**M1.** Square the corresponding-side ratio.

The area ratio is $2^2:7^2=\mathbf{4:49}$.

**M2.** By BPT, $AD/DB=AE/EC$, so $3/4=6/EC$.

Therefore $EC=\mathbf{8}$.

**C1.** By BPT, $AD/DB=AE/EC$, so $4/6=5/EC$ and $EC=7.5$.

Also $AD/AB=4/10=2/5$; the area ratio is $(2/5)^2=\mathbf{4:25}$.

**C2.** The side ratio is the square root of the area ratio: $\sqrt{36:64}=3:4$.

The corresponding larger side is $9(4/3)=\mathbf{12\text{ cm}}$.
