---
layout: book
title: "Chapter 14: Probability"
permalink: /handbook/chapters/14-probability/
book_section: "Chapters"
previous_title: "Chapter 13: Statistics"
previous_url: /handbook/chapters/13-statistics/
next_title: "Final formula revision sheet"
next_url: /handbook/sections/final-formula-revision-sheet/
---

## Chapter 14: Probability

### A. Chapter overview
Classical probability compares favourable equally likely outcomes with all possible outcomes.

**Objectives:** define experiments, outcomes, and events; calculate simple probabilities; use complements; check bounds.

**Assessment note:** No assessment allocations are published here because current CBSE figures could not be verified. CBSE unit information does not guarantee chapter marks or question counts; see the [examination blueprint]({{ '/handbook/sections/examination-blueprint/' | relative_url }}).

### B. Important concepts and explanations
- A random experiment has an uncertain outcome from a known set of possibilities.
- An event is a set of outcomes. In the classical model, outcomes must be equally likely.
- Probability is between 0 and 1 inclusive. An impossible event has probability 0; a certain event has probability 1.

#### Visual guide: outcomes of a coin toss

```text
                 Start
                /     \
           Heads       Tails
            1/2          1/2
```

For a fair coin, the two outcomes are equally likely; an event may contain one or both outcomes.

### C. Formula and theorem sheet

#### Formulae and properties

| Name | Formula / property | Meaning and conditions | When to use |
| --- | --- | --- | --- |
| Classical probability | $P(E)=\frac{n(E)}{n(S)}$ | Finite sample space $S$ with equally likely outcomes; $n(E)$ counts favourable outcomes | Find an event's probability by counting |
| Complement | $P(E')=1-P(E)$ | $E'$ means event $E$ does not occur | Find the probability of “not $E$” or simplify “at least one” |
| Probability bounds | $0\le P(E)\le1$ | Applies to every event | Check whether a calculated probability is possible |

### D. Solved board-style examples
**Example 1: Die**

**Question:** A fair die is rolled. Find the probability of getting a multiple of 3.

**Concept used:** Equally likely outcomes.

**Solution:**
1. Outcomes are 1 to 6; favourable outcomes are 3 and 6.
2. Probability $=2/6=1/3$.

**Final answer:** **$1/3$.**

**Exam tip:** List the sample space to avoid missing outcomes.

**Example 2: Complement**

**Question:** A fair coin is tossed three times. Find the probability of at least one head.

**Concept used:** Complement.

**Solution:**
1. There are $2^3=8$ equally likely sequences.
2. The complement is no heads, namely TTT, with probability $1/8$.
3. Required probability $=1-1/8=7/8$.

**Final answer:** **$7/8$.**

**Exam tip:** “At least one” is often simpler via its complement.

**Example 3: Numbered objects**

**Question:** One card is selected at random from cards numbered 1 to 10. Find the probability of selecting a prime number.

**Concept used:** Count favourable outcomes.

**Solution:**
1. Primes are 2, 3, 5, 7: four favourable outcomes.
2. Total outcomes are 10.
3. Probability $=4/10=2/5$.

**Final answer:** **$2/5$.**

**Exam tip:** 1 is not prime.

### E. Common examination mistakes
- Assuming outcomes are equally likely when they are not.
- Counting 1 as a prime.
- Using favourable outcomes as denominator.
- Forgetting to reduce a fraction.
- Reporting a probability outside $[0,1]$.

### F. Exam tips and problem-solving strategy
Write the sample space or count total outcomes systematically. Identify the event precisely, count favourable outcomes, simplify, then check the probability bounds. Use complements for “at least one” events.

### G. Quick revision summary
For finite equally likely outcomes, probability is favourable over total. Complement probability is $1-P(E)$. Every probability is between 0 and 1 inclusive.

### H. Chapter-end revision checklist
- [ ] I can describe an experiment, outcome, and event.
- [ ] I can count equally likely outcomes.
- [ ] I can calculate complements.
- [ ] I can verify the probability lies in $[0,1]$.

### I. Practice questions
These are original questions written for this handbook; they are not copied from past papers.

**Difficulty guide:** Simple questions check one direct skill; Medium questions require choosing or combining a method; Complex questions require multi-step reasoning or modelling.

#### Simple
**S1.** Draw one card from a standard 52-card deck. Find the probability that it is a heart.

**S2.** A fair die is rolled. Find the probability of getting a 6.

#### Medium
**M1.** Roll a fair die once. Find the probability of getting a number greater than 4.

**M2.** A bag contains 4 green and 6 yellow balls. Find the probability of drawing a yellow ball.

#### Complex
**C1.** A bag contains 3 red and 5 blue balls. One ball is drawn at random. Find the probability that it is not red, and verify it using the complementary event.

**C2.** One integer is selected at random from 1 to 20 inclusive. Find the probability that it is divisible by 2 or 3.

#### Answers / hints
**S1.** There are 13 hearts among 52 cards.

The probability is $13/52=\mathbf{1/4}$.

**S2.** One of the six equally likely outcomes is 6.

The probability is $\mathbf{1/6}$.

**M1.** Outcomes greater than 4 are 5 and 6.

The probability is $2/6=\mathbf{1/3}$.

**M2.** There are 6 yellow balls among 10 balls.

The probability is $6/10=\mathbf{3/5}$.

**C1.** The complement of “not red” is “red”; $P(\text{red})=3/8$.

Therefore $P(\text{not red})=1-3/8=\mathbf{5/8}$.

**C2.** Multiples of 2: 10; multiples of 3: 6; common multiples of both: 3.

Favourable outcomes $=10+6-3=13$, so the probability is $\mathbf{13/20}$.
