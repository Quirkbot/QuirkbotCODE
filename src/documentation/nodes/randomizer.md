---
title: Randomizer
node: randomizer
id: randomizer-docs
---

Node to send out a Random number at a given interval.

## Connections

<div class="node-input-list" markdown="block">

### Inputs

- *interval*
    - Range: `0` - `1000`
    - The time in seconds between sening out a random number

- *min*
    - Range: `0` - `1000`
    - Minimum possible value of the random number

- *max*
    - Range: `0` - `1000`
    - Maximum possible value of the random number

</div>

<div class="node-output-list" markdown="block">

### Outputs

- *out*
    - Range: <span class='node-input'>min</span> - <span class='node-input'>max</span>
    - The random number between the <span class='node-input'>min</span> and <span class='node-input'>max</span> values.

</div>

## Example CODE

<div class="node-example-programs" markdown="block">

- [Example Code](http://code.quirkbot.com/program/XXXXXXXXXXXXXXXX "Go to Quirkbot CODE")
    - Description of example code.

</div>

## Comment
This is a pseudo random number generator, meaning that it is not truly random, but creates it's numbers with an algorithm that appears to send random numbers. It's using this algorithm: *coming soon*

## Learn more
Where does true randomness exist? How random can you be? If you ask your friends to say a random numbers, will their answers be random? Check out: [Numberphiles video on Random Numbers](https://www.youtube.com/watch?v=SxP30euw3-0).
