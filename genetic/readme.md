https://www.youtube.com/watch?v=-jv3CgDN9sc&list=PLRqwX-V7Uu6bJM3VgzjNV5YxVxUwzALHV&index=4

change each character sponteneous

https://natureofcode.com/book/chapter-9-the-evolution-of-code/

step 1: Initialize. Create a population of N elements, each with randomly generated DNA.

LOOP:

Step 2: Selection. Evaluate the fitness of each element of the population and build a mating pool.

Step 3: Reproduction. Repeat N times:

           a) Pick two parents with probability according to relative fitness.
           b) Crossover—create a “child” by combining the DNA of these two parents.
           c) Mutation—mutate the child’s DNA based on a given probability.
           d) Add the new child to a new population.

Step 4. Replace the old population with the new population and return to Step 2.