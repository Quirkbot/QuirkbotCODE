---
title: LED
node: led
id: led-docs
---

![LED Node]

## General

Node to control Light Emitting Diodes (LEDs). It both controls LEDs permanently connected to the Quirkbot like the Eyes, or external LEDs you attach to the Arms, Legs, and Head. (Also works with the backpack pins if you are building your own backpack.)

## Connections

Inputs     | Range/Value     | Function
:----------|:----------------|:--------
light      | `0` - `1`       | Set brightness of the LED: `0`=Off, `1`=Max, `0.5`=Half brightness
place      | *any place*     | Choose where the LED is placed. (See: {% assign arg1='list-of-places' %}{% include f_print_page_link %} for more info.)

**No outputs**

## Example CODE

Program | Link to Quirkbot CODE
:-------|:---------------------
Blink Left Eye of the Quirkbot	| [LED example](http://code.quirkbot.com/program/5655f35bd66de10100d133a9 "Go to Quirkbot CODE")

## Hardware
Single color LEDs

## Comment
You can use almost any 3mm or 5mm LED with the Quirkbot, just cut the leads to the right length. (See hardware documentation: LEDs (soon!))

## Learn more
The change in brightness of the LED is achieved by a method called PWM (Pulse Width Modulation). There are many Youtube videos and tutorials explaing this concept, like the beginnig of [this video](https://www.youtube.com/watch?v=YmPziPfaByw).


[LED Node]:  {{r_base_url}}/content-assets/documentation/nodes/LED.png
