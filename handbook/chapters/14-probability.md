## Chapter 14: Probability

### A. Chapter overview
Classical probability compares favourable equally likely outcomes with all possible outcomes.

**Objectives:** define experiments, outcomes, and events; calculate simple probabilities; use complements; check bounds.

### B. Important concepts and explanations
- A random experiment has an uncertain outcome from a known set of possibilities.
- An event is a set of outcomes. In the classical model, outcomes must be equally likely.
- Probability is between 0 and 1 inclusive. An impossible event has probability 0; a certain event has probability 1.

### C. Formula and theorem sheet
| Result | Formula | Condition |
|---|---|---|
| Classical probability | $P(E)=\frac{\text{favourable outcomes}}{\text{total outcomes}}$ | Finite, equally likely outcomes |
| Complement | $P(E')=1-P(E)$ | $E'$ means event does not occur |
| Bounds | $0\le P(E)\le1$ | Every event |

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
1. Roll a fair die. Find the probability of a number greater than 4.
2. Draw one card from a standard 52-card deck. Find the probability it is a heart.
3. A bag has 3 red and 5 blue balls. Find the probability of not drawing red.

**Answers / hints:** 1. $1/3$. 2. $1/4$. 3. $5/8$.
