---
layout: book
title: "Chapter 4: Quadratic Equations"
permalink: /handbook/chapters/04-quadratic-equations/
book_section: "Chapters"
previous_title: "Chapter 3: Pair of Linear Equations in Two Variables"
previous_url: /handbook/chapters/03-pair-of-linear-equations/
next_title: "Chapter 5: Arithmetic Progressions"
next_url: /handbook/chapters/05-arithmetic-progressions/
---

## Chapter 4: Quadratic Equations

### A. Chapter overview
A quadratic equation has degree two. Factorisation or the quadratic formula finds its roots; the discriminant predicts their nature.

**Objectives:** solve by prescribed methods; interpret the discriminant; model simple area or number situations.

**Assessment note:** CBSE publishes unit-level assessment information, not guaranteed chapter marks or question counts. The supplied unit figures are unverified planning information; see the [examination blueprint]({{ '/handbook/sections/examination-blueprint/' | relative_url }}) and confirm current details with CBSE.

### B. Important concepts and explanations
Standard form is $ax^2+bx+c=0$, $a\ne0$. Roots are values satisfying the equation. For discriminant $D=b^2-4ac$: $D>0$ gives two distinct real roots; $D=0$ gives equal real roots; $D<0$ gives no real roots.

#### Visual guide: roots and the x-axis

![An upward-opening parabola crosses the x-axis at two distinct real roots.]({{ '/assets/images/quadratic-roots.svg' | relative_url }})

The x-intercepts represent the two distinct real roots. A graph may instead touch the axis once when the discriminant is zero, or miss it when there are no real roots.

### C. Formula and theorem sheet

#### Formulae

| Name | Formula | Meaning and conditions | When to use |
| --- | --- | --- | --- |
| Quadratic formula | $x=\frac{-b\pm\sqrt{b^2-4ac}}{2a}$ | $ax^2+bx+c=0$, $a\ne0$ | Find roots when factorisation is inconvenient |
| Discriminant | $D=b^2-4ac$ | $a,b,c$ are coefficients in standard form | Determine the nature of real roots |

#### Root classification

| Discriminant | Nature of roots |
| --- | --- |
| $D>0$ | Two distinct real roots |
| $D=0$ | Two equal real roots |
| $D<0$ | No real roots |

### D. Solved board-style examples
**Example 1: Factorisation**

**Question:** Solve $x^2-7x+12=0$.

**Concept used:** Factorisation.

**Solution:**
1. Find factors of 12 whose sum is 7: 3 and 4.
2. $(x-3)(x-4)=0$.
3. Thus $x=3$ or $x=4$.

**Final answer:** **$x=3,4$.**

**Exam tip:** Check each root in the original equation.

**Example 2: Quadratic formula**

**Question:** Solve $2x^2+x-3=0$.

**Concept used:** Quadratic formula.

**Solution:**
1. $a=2,b=1,c=-3$; $D=1+24=25$.
2. $x=\frac{-1\pm5}{4}$.
3. Hence $x=1$ or $x=-3/2$.

**Final answer:** **$1,-\frac32$.**

**Exam tip:** Keep the denominator $2a$ outside the complete numerator.

**Example 3: Nature of roots**

**Question:** Find $k$ if $x^2+4x+k=0$ has equal roots.

**Concept used:** Equal-root condition.

**Solution:**
1. Equal roots require $D=0$.
2. $4^2-4(1)(k)=0$, so $16-4k=0$.
3. Thus $k=4$.

**Final answer:** **$k=4$.**

**Exam tip:** Use the discriminant condition before attempting to solve.

### E. Common examination mistakes
- Failing to put the equation in standard form before identifying coefficients.
- Losing the negative sign in $-b$ or in $c$.
- Using $\sqrt{b^2}-4ac$ instead of $\sqrt{b^2-4ac}$.
- Misclassifying $D=0$ as two distinct roots.
- Keeping extraneous roots without checking a contextual restriction.

### F. Exam tips and problem-solving strategy
Factor when integer factors are apparent; otherwise use the formula. Write $a,b,c$ explicitly. For a word problem, reject values that contradict the described quantity, such as a negative length.

### G. Quick revision summary
Standard form requires $a\ne0$. Discriminant $D=b^2-4ac$ classifies real roots. The quadratic formula works for all real-coefficient quadratics with real roots as applicable.

### H. Chapter-end revision checklist
- [ ] I can solve by factorisation.
- [ ] I can substitute coefficients accurately into the formula.
- [ ] I can classify roots from the discriminant.
- [ ] I can check contextual answers.

### I. Practice questions
These are original questions written for this handbook; they are not copied from past papers.

**Difficulty guide:** Simple questions check one direct skill; Medium questions require choosing or combining a method; Complex questions require multi-step reasoning or modelling.

#### Simple
**S1.** Solve $x^2-9x+20=0$ by factorisation.

**S2.** Find the discriminant and nature of roots of $x^2-6x+9=0$.

#### Medium
**M1.** Solve $3x^2-2x-1=0$.

**M2.** Solve $2x^2-5x-3=0$ using the quadratic formula.

#### Complex
**C1.** Find all values of $p$ for which $x^2+px+9=0$ has equal roots.

**C2.** A rectangle has area $48\text{ cm}^2$ and its length is 2 cm more than its width. Find its dimensions.

#### Answers / hints
**S1.** Factor as $(x-4)(x-5)=0$.

Therefore, $x=4$ or $x=5$.

**S2.** $D=(-6)^2-4(1)(9)=0$.

The equation has two equal real roots.

**M1.** Factor as $(3x+1)(x-1)=0$.

Therefore, $x=1$ or $x=-1/3$.

**M2.** Here $a=2,b=-5,c=-3$ and $D=25+24=49$.

The roots are $(5\pm7)/4$, so $x=3$ or $x=-1/2$.

**C1.** Equal roots require discriminant $b^2-4ac=0$.

Thus $p^2-36=0$, so $p=6$ or $p=-6$.

**C2.** Let the width be $w$ cm; then $w(w+2)=48$.

$w^2+2w-48=0=(w+8)(w-6)$; reject the negative length, giving width 6 cm and length 8 cm.
