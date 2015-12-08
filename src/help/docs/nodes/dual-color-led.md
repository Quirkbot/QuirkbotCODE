---
node: dual-color-led
id: dual-color-led-docs
---

![Dual Color LED Node]

## General

Node to control Light Emitting Diodes (LEDs) With 2 leds and 2 colors. Like the 3mm Red-Blue LEDs that comes with the Quirkbot kits. It controls LEDs connected to the Arms, Legs, and Head.

## Connections

Inputs     | Range/Value(s)          | Function
:----------|:------------------------|:--------
light      | `0` - `1`               | Set brightness of the LED: `0`=Off, `1`=Max,  `0.5`=Half brightness
color      | `0` - `1`               | Set color mix of the LED. So for R-B LEDs: `0`=Red, `1`=Blue, `0.5`=Equal mix
place      | `H`,`LA`,`LL`,`RA`,`RL` | Choose where the LED is placed.

**No outputs**

## Example CODE

Program | Link to Quirkbot CODE
:-------|:---------------------
Funky Blinking Horn | [DualColorLED example](http://code.quirkbot.com/program/5655f68dd31f000100c5e758 "Go to Quirkbot CODE")

## Hardware
Dual color LEDs

## Comment
The 2 lead dual color LEDs (or bi-color) is actually 2 LEDs inside one package connected in parallel but reverse from each other. So the long lead is the positive anode of red *and* the negative cathode from blue. The short lead is anode from blue *and* cathode from red.

## Learn more
LEDs are everywhere! In a relativly short time the have become one of the most important techloigies in todays world. Learn more about the history of LEDs are and what makes them special from other lightsources: [Light-emitting diode on Wikipedia](https://en.wikipedia.org/wiki/Light-emitting_diode).

[Dual Color LED Node]: {{r_base_url}}/content-assets/documentation/nodes/DualColorLED.png
