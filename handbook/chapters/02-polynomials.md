---
layout: book
title: "Chapter 2: Polynomials"
permalink: /handbook/chapters/02-polynomials/
book_section: "Chapters"
previous_title: "Chapter 1: Real Numbers"
previous_url: /handbook/chapters/01-real-numbers/
next_title: "Chapter 3: Pair of Linear Equations in Two Variables"
next_url: /handbook/chapters/03-pair-of-linear-equations/
---

## Chapter 2: Polynomials

### A. Chapter overview
Polynomial zeros are the inputs where its value is zero. For a quadratic, they also encode the coefficients.

**Objectives:** identify zeros from graphs or algebra; use and verify the zero-coefficient relationships; construct a quadratic from given zeros.

**Exam planning estimate (not an official chapter-wise allocation):** Unit II (Algebra) carries **20 marks** in the supplied, unverified blueprint. Allow roughly **3–5 marks** or **1–2 questions/subparts** for this chapter in an 80-mark paper.

### B. Important concepts and explanations
- A zero of $p(x)$ is a value $r$ for which $p(r)=0$. Graphically it is an x-coordinate where the curve meets or touches the x-axis.
- For $ax^2+bx+c$, with zeros $\alpha,\beta$, $\alpha+\beta=-b/a$ and $\alpha\beta=c/a$.
- The monic quadratic with roots $\alpha,\beta$ is $(x-\alpha)(x-\beta)$.

#### Visual guide: zeros are x-intercepts

```text
       y
       ↑       \       /
       |        \_____/
───────●───────────────●──────→ x
       α               β
```

The curve meets the x-axis at $\alpha$ and $\beta$; those x-coordinates are its zeros.

### C. Formula and theorem sheet

#### Formulae

| Name | Formula | Meaning and conditions | When to use |
| --- | --- | --- | --- |
| Sum of zeros | $\alpha+\beta=-b/a$ | For $ax^2+bx+c$, $a\ne0$ | Check or find the sum of the two zeros |
| Product of zeros | $\alpha\beta=c/a$ | For $ax^2+bx+c$, $a\ne0$ | Check or find the product of the two zeros |
| Monic polynomial from zeros | $x^2-(\alpha+\beta)x+\alpha\beta$ | Zeros are $\alpha,\beta$ | Construct a monic quadratic |

#### Geometrical property
A real zero is the $x$-coordinate at which the graph of $y=p(x)$ intersects or touches the $x$-axis.

### D. Solved board-style examples
**Example 1: Find zeros**

**Question:** Find the zeros of $x^2-5x+6$ and verify the relationships.

**Concept used:** Factorisation and coefficient relations.

**Solution:**
1. $x^2-5x+6=(x-2)(x-3)$.
2. Zeros are 2 and 3. Their sum is 5, while $-b/a=-(-5)/1=5$.
3. Their product is 6, while $c/a=6/1=6$.

**Final answer:** **Zeros: 2 and 3; both relationships hold.**

**Exam tip:** Match the polynomial to $ax^2+bx+c$ before substituting.

**Example 2: Form a polynomial**

**Question:** Form a monic quadratic polynomial whose zeros are $-2$ and 5.

**Concept used:** Product of root factors.

**Solution:**
1. $p(x)=(x+2)(x-5)$.
2. Expanding gives $x^2-3x-10$.

**Final answer:** **$x^2-3x-10$.**

**Exam tip:** Verify: sum $=3=-(-3)$ and product $=-10$.

**Example 3: Graph interpretation**

**Question:** A quadratic graph crosses the x-axis at $x=-1$ and $x=4$. State its zeros and the sum and product.

**Concept used:** Geometrical interpretation and root relationships.

**Solution:**
1. The x-intercepts give zeros $-1$ and 4.
2. Sum $=-1+4=3$; product $=(-1)(4)=-4$.

**Final answer:** **Zeros $-1,4$; sum 3; product $-4$.**

**Exam tip:** A repeated touch at the axis counts as a zero too.

### E. Common examination mistakes
- Confusing x-intercepts with y-intercepts.
- Using $b/a$ instead of $-b/a$ for the sum.
- Forgetting the leading coefficient when applying the relations.
- Reporting factors' signs as roots without solving each factor.
- Forming a polynomial without expanding or stating whether it is monic.

### F. Exam tips and problem-solving strategy
Use factorisation for simple integer roots; use relationships to check work. For a graph, read the horizontal coordinates at the axis crossings. A polynomial may have fewer real zeros than its degree.

### G. Quick revision summary
Zeros satisfy $p(r)=0$. For a quadratic, sum $=-b/a$, product $=c/a$. The monic polynomial from two zeros is $(x-\alpha)(x-\beta)$.

### H. Chapter-end revision checklist
- [ ] I can find zeros by factorisation.
- [ ] I can read zeros from a graph.
- [ ] I can verify sum and product relationships.
- [ ] I can construct a quadratic from its zeros.

### I. Practice questions
These are original questions based on recurring CBSE board-exam patterns; they are not reproduced from past papers.

#### Simple
1. Form a monic quadratic polynomial with zeros 3 and 7.

#### Medium
2. Find and verify the zeros of $2x^2-7x+3$.

#### Complex
3. A quadratic graph touches the x-axis at $x=2$ and has $y$-intercept 8. Find the polynomial if its leading coefficient is 2.

#### Answers / hints
1. Use $(x-3)(x-7)$.
   The polynomial is $x^2-10x+21$.
2. Factor: $(2x-1)(x-3)=0$.
   Zeros are $1/2$ and $3$; their sum is $7/2$ and product is $3/2$.
3. A touch at $x=2$ means a repeated zero, so write $p(x)=2(x-2)^2$.
   Its y-intercept is 8, as required; $p(x)=2x^2-8x+8$.
