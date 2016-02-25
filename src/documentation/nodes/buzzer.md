---
title: Buzzer
node: buzzer
object_id: buzzer-docs
---

Node for the DIY Buzzer Backpack and for other buzzers, piezo elements and small speakers connected in various ways. It outputs simple notes at set note values. You can control it by sending it individual notes or by a continuous flow of numbers.

## Connections

<div class="node-input-list" markdown="block">

### Inputs

- *note*
	- Range: `NOTE_A1` - `NOTE_DS8` or `0` - `1`
	- Minimum value of the output range

- *place*
	- Values: *All places*
	- Choose where to put the speaker. DIY Buzzer backpack is on `BP1`

</div>


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

Piezo elements are interesting electronic components! Learn more about the Piezo electric effect.
