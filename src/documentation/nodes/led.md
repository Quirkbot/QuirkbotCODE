---
title: LED
node: led
id: led-docs
---

Node to control Light Emitting Diodes (LEDs). It both controls LEDs permanently connected to the Quirkbot like the Eyes, or external LEDs you attach to the Arms, Legs, and Head. (Also works with the backpack pins if you are building your own backpack.)

## Connections

<div class="node-input-list" markdown="block">

### Inputs

- *light*
    - Range: `0` - `1`
    - Set brightness of the LED:<br> `0`=Off<br> `1`=Max<br> `0.5`=Half brightness

- *place*
    - Values: *any place*
    - Choose where the LED is placed. (See: {% assign arg1='list-of-places'%}{% include f_print_page_link %} for more info.)

</div>


## Example CODE

<div class="node-example-programs" markdown="block">

- [Example Code](http://code.quirkbot.com/program/5655f35bd66de10100d133a9 "Go to Quirkbot CODE")
    - Blink Left Eye of the Quirkbot

</div>

## Hardware
Single color LEDs

## Comment
You can use almost any 3mm or 5mm LED with the Quirkbot, just cut the leads to the right length. (See hardware documentation: LEDs (soon!))

## Learn more
The change in brightness of the LED is achieved by a method called PWM (Pulse Width Modulation). There are many YouTube videos and tutorials explaining this concept, like the beginning of [this video](https://www.youtube.com/watch?v=YmPziPfaByw).
