---
title: Buzzer
node: buzzer
id: buzzer-docs
---

![Buzzer Node]

Node for the DIY Buzzer backpack and for buzzers, piezos and small speakers connected in various ways. It outputs simple notes in set notevalues. You can controll it by sending it indivdual notes or by a continuous flow of numbers.

## Connections

<div class="node-input-table" markdown="block">

**Input:**

- <span class='node-input'>note</span>
	- Range: `NOTE_A1` - `NOTE_DS8` or `0` - `1`
	- Minimum value of the output range

- <span class='node-input'>place</span>
	- Values: *All places*
	- Choose where to put the speaker. DIY Buzzer backpack is on `BP1`

</div>


<div class="node-output-table" markdown="block">

**No Output**

## Example CODE

<div class="node-example-programs" markdown="block">

- [IMPERIAL MARCH](http://code.quirkbot.com/program/566a02de6b91be010090400c "Go to Quirkbot CODE")
	- Squeeze the Darth Quirkbots right hand to play the Imperial Mach.

</div>

## Hardware

DIY Buzzer backpack

Buzzers / piezo speakers

Small speakers

## Comment

There is a chance that the Buzzer Node and the Servo Motor will not work at the same time, depending on what places are used.

## Learn more

Piezo elements are interesting electronic components! Learn more about the Piezo electroc effect.

[Buzzer Node]: {{r_base_url}}/content-assets/documentation/nodes/Buzzer.png
