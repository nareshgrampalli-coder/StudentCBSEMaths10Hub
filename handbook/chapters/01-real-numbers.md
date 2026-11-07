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

**Assessment note:** CBSE publishes unit-level assessment information, not guaranteed chapter marks or question counts. The supplied unit figures are unverified planning information; see the [examination blueprint]({{ '/handbook/sections/examination-blueprint/' | relative_url }}) and confirm current details with CBSE.

### B. Important concepts and explanations
- A prime has exactly two positive factors, 1 and itself. Every composite integer greater than 1 is a product of primes.
- **Fundamental Theorem of Arithmetic:** this prime factorisation is unique apart from the order of factors.
- For positive integers, HCF uses the smallest exponents common to both prime factorizations; LCM uses the largest exponents appearing.
- To prove an irrationality statement, assume the number is a reduced fraction, then show its numerator and denominator share a prime factor, contradicting reduction.

#### Visual guide: prime factor tree

```text
             60
           /    \
          6      10
         / \     / \
        2   3   2   5
```

The leaves are prime, so $60=2^2\cdot3\cdot5$.

### C. Formula and theorem sheet

#### Formulae and number facts

| Name | Formula / fact | Meaning and conditions | When to use |
| --- | --- | --- | --- |
| Prime factorisation | $n=p_1^{a_1}\cdots p_k^{a_k}$ | Distinct primes $p_i$, positive integer exponents $a_i$, and $n>1$ | Express an integer as prime powers |
| HCF–LCM relation | $\operatorname{HCF}(a,b)\operatorname{LCM}(a,b)=ab$ | Positive integers $a,b$ | Check or find one of HCF and LCM when the other is known |

#### Theorem
**Fundamental Theorem of Arithmetic:** Every integer greater than 1 is either prime or can be expressed as a product of primes, and this factorisation is unique apart from the order of the factors.

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
These are original questions written for this handbook; they are not copied from past papers.

**Difficulty guide:** Simple questions check one direct skill; Medium questions require choosing or combining a method; Complex questions require multi-step reasoning or modelling.

#### Simple
**S1.** Find the HCF and LCM of 84 and 126.

**S2.** Write 360 as a product of prime powers.

#### Medium
**M1.** Three lights flash every 12, 15, and 20 seconds. If they flash together now, when will they next flash together?

**M2.** Find the least positive integer divisible by both 18 and 30.

#### Complex
**C1.** Prove that $3+2\sqrt5$ is irrational.

**C2.** Prove that $\sqrt2$ is irrational.

#### Answers / hints
**S1.** $84=2^2\cdot3\cdot7$ and $126=2\cdot3^2\cdot7$.

HCF $=42$; LCM $=252$.

**S2.** Divide by primes: $360=2^3\cdot3^2\cdot5$.

**M1.** Find $\operatorname{LCM}(12,15,20)$.

The lights next flash together after **60 seconds**.

**M2.** $\operatorname{LCM}(18,30)=2\cdot3^2\cdot5$.

The least positive common multiple is **90**.

**C1.** Assume $3+2\sqrt5$ is rational.

Then $\sqrt5=((3+2\sqrt5)-3)/2$ would be rational, a contradiction.

**C2.** Assume $\sqrt2=a/b$ in lowest terms, so $a^2=2b^2$.

Then $a$ is even; substituting $a=2k$ shows $b$ is even too, contradicting lowest terms.
