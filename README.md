# Twisty Puzzles and Group Theory
as presented by [Spencer Rinehart](http://www.overthemonkey.com)



## What Is a Group
A group is a set of elements and a binary operation on those elements



## A Twisty Puzzle Group

### Definition
**Set**: The moves required to reach all possible positions of the puzzle, i.e.,
  **A**,**B**,...

**Operation**: Composition of the moves, e.g., **AB**


### Closure
The group is closed because composing two moves together is still in the group


### Identity
* The identity is any move which returns back to the same state
* This generally is the null move (don't turn anything!)


### Inverse
* The inverse of **A** is **A'**.
* **AA'** = **I**



## Cycle Notation

### Goal
* We want to be able to notate what a move does to the cube


### Example
<div id="cycle-example" class="CedCube" cc-params="formula=FR F'R'">&nbsp;</div>

**Move**: **FR F'R'**

**Cycles**: (**ufl**,**ufr**) (**drf**,**drb**) (**uf**,**fr**,**rd**)



## Commutators

### Definition
**[P,Q]** = **PQ P'Q'**


### Goal
* Simple move that doesn't stray too far from the identity
* Generally, **P** and **Q** don't intersect much


### Previous Example
<div id="commutator-example" class="CedCube" cc-params="formula=FR F'R'">&nbsp;</div>

* The move **FR F'R'** can be viewed as a commutator
* **P** = **F**
* **Q** = **R**
* **[P,Q]** = **FR F'R'**



## Conjugates

### Definition
**(P,Q)** = **PQP'**


### Example
<div id="conjugate-example" class="CedCube" cc-params="formula=D' FRF'R' FRF'R' FRF'R' D">&nbsp;</div>

* **P** = **D'**
* **Q** = **[F,R]3**
* **(P,Q)** = **D' [F,R]3 D** = **D' FRF'R' FRF'R' FRF'R' D**
