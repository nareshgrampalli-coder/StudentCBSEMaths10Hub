---
layout: book
title: "Chapter 1: Real Numbers"
permalink: /handbook/chapters/01-real-numbers/
book_section: "Chapters"
previous_title: "Unit VII: Statistics and Probability"
previous_url: /handbook/sections/unit-vii-statistics-and-probability/
next_title: "Chapter 2: Polynomials"
next_url: /handbook/chapters/02-polynomials/
---

## Chapter 1: Real Numbers

### A. Chapter overview
Prime factorisation reveals the structure of whole numbers. Use it to compare divisibility, find HCF and LCM, and prove that certain square roots cannot be rational.

**Objectives:** apply the Fundamental Theorem of Arithmetic; find HCF/LCM; construct a contradiction proof of irrationality.

### B. Important concepts and explanations
- A prime has exactly two positive factors, 1 and itself. Every composite integer greater than 1 is a product of primes.
- **Fundamental Theorem of Arithmetic:** this prime factorisation is unique apart from the order of factors.
- For positive integers, HCF uses the smallest exponents common to both prime factorizations; LCM uses the largest exponents appearing.
- To prove an irrationality statement, assume the number is a reduced fraction, then show its numerator and denominator share a prime factor, contradicting reduction.

### C. Formula and theorem sheet
| Result | Expression | Use |
|---|---|---|
| Prime factorisation | $n=p_1^{a_1}\cdots p_k^{a_k}$ | Unique representation for integer $n>1$ |
| HCF and LCM | $\operatorname{HCF}(a,b)\operatorname{LCM}(a,b)=ab$ | Positive integers $a,b$ |

### D. Solved board-style examples
**Example 1: HCF and LCM**

**Question:** Find the HCF and LCM of 72 and 120.

**Concept used:** Prime exponents.

**Solution:**
1. $72=2^3\cdot3^2$ and $120=2^3\cdot3\cdot5$.
2. HCF $=2^3\cdot3=24$; LCM $=2^3\cdot3^2\cdot5=360$.
3. Check: $24\cdot360=72\cdot120$.

**Final answer:** **HCF = 24, LCM = 360.**

**Exam tip:** Include each prime in the LCM using its greatest exponent.

**Example 2: A meeting interval**

**Question:** Two bells ring every 18 and 24 minutes. If they ring together now, after how many minutes will they next ring together?

**Concept used:** LCM.

**Solution:**
1. $18=2\cdot3^2$; $24=2^3\cdot3$.
2. $\operatorname{LCM}=2^3\cdot3^2=72$.

**Final answer:** **72 minutes.**

**Exam tip:** Repeated events coincide after a common multiple; the first repeat is the LCM.

**Example 3: Prove $\sqrt5$ is irrational**

**Question:** Prove that $\sqrt5$ is irrational.

**Concept used:** Contradiction and prime divisibility.

**Solution:**
1. Suppose $\sqrt5=a/b$ in lowest terms, with integers $a,b$ and $b\ne0$.
2. Squaring gives $a^2=5b^2$, so 5 divides $a^2$ and hence 5 divides $a$.
3. Write $a=5k$. Then $25k^2=5b^2$, so $b^2=5k^2$ and 5 divides $b$.
4. This contradicts that $a/b$ is in lowest terms.

**Final answer:** **$\sqrt5$ is irrational.**

**Exam tip:** State why divisibility of a prime into a square implies divisibility into its root.

### E. Common examination mistakes
- Using smallest exponents for LCM; use the greatest.
- Forgetting 1 is not prime; it has only one positive factor.
- Calling an un-reduced fraction a contradiction; specify lowest terms.
- Writing only the conclusion in an irrationality proof; show the divisibility contradiction.
- Applying the HCF–LCM product formula without positive integers.

### F. Exam tips and problem-solving strategy
Write prime factorizations in aligned form. For a proof, explicitly assume a reduced fraction and justify every divisibility step. For word problems, decide whether the situation asks for the largest equal grouping (HCF) or the first shared repeat (LCM).

### G. Quick revision summary
Use unique prime factorisation; HCF takes common primes with minimum powers, LCM takes all primes with maximum powers. Irrationality proofs use a lowest-terms assumption and contradiction.

### H. Chapter-end revision checklist
- [ ] I can prime-factorise integers and identify primes.
- [ ] I can find HCF and LCM and check their product.
- [ ] I can distinguish grouping (HCF) from repeating (LCM).
- [ ] I can write an irrationality proof clearly.

### I. Practice questions
1. Find the HCF and LCM of 84 and 126.
2. Three lights flash every 12, 15, and 20 seconds. When do they next flash together?
3. Prove that $\sqrt2$ is irrational.
4. Explain why $3+2\sqrt5$ is irrational.

**Answers / hints:** 1. 42 and 252. 2. 60 seconds. 3. Assume $\sqrt2=a/b$ reduced; $a^2=2b^2$ forces both even. 4. If the expression were rational, subtract 3 and divide by 2 to make $\sqrt5$ rational.
