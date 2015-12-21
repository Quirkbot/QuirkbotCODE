---
title: Dual Color Led
node: dual-color-led
id: dual-color-led-docs
---

Node to control Light Emitting Diodes (LEDs) With two leads and two colors. Like the 3 mm Red-Blue LEDs that comes with the Quirkbot kits. It controls LEDs connected to the Arms, Legs, and Head.

## Connections

<div class="node-input-list" markdown="block">

### Inputs

- *light*
	- Range: `0` - `1`
	- Set brightness of the LED:<br> `0`=Off<br> `1`=Max<br>  `0.5`=Half brightness.

- *color*
	- Range: `0` - `1`
	- Set color mix of the LED, So for R-B LEDs:<br> `0`=Red<br> `1`=Blue<br> `0.5`=Equal mix

- *place*
	- Values: `H`, `LA`, `LL`, `RA`, `RL`
	- Choose where the LED is placed.

</div>


## Example CODE

<div class="node-example-programs" markdown="block">

- [DualColorLED example](http://code.quirkbot.com/program/5655f68dd31f000100c5e758 "Go to Quirkbot CODE")
	- Funky Blinking Horn.

</div>


## Hardware
Dual color LEDs

## Comment
The 2 lead, dual color LEDs (or bi-color) is actually 2 LEDs inside one package connected in parallel but reverse from each other. So the long lead is the positive anode of red *and* the negative cathode from blue. The short lead is anode from blue *and* cathode from red.

## Learn more
LEDs are everywhere! In a relatively short time the have become one of the most important technologies in todays world. Learn more about the history of LEDs are and what makes them special from other light sources: [Light-emitting diode on Wikipedia](https://en.wikipedia.org/wiki/Light-emitting_diode).
