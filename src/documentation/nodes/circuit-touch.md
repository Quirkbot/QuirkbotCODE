---
title: Circuit Touch
node: makey-touch
id: circuit-touch-docs
---

Node that turns the Arms, Legs or Horn into a circular touch sensor. It detects when a weak current flows from the front to pad to Ground. (Ground can be the Left Eye or the back pad). Because it's so sensitive, the current can flow trough your body or anything else that has water in it or is made from a conductor, like metal. To activate the sensor, simply pinch the arm that you choose as place.

## Connections

<div class="node-input-list" markdown="block">

### Inputs

- *place*
	- Values: `H`, `LA`, `LL`, `RA`, `RL`
	- Choose where to read the input.

- *min*
	- Range: `0` - `1`
	- The value sent out when the sensor goes to **OFF**, that is when you **release** it.

- *max*
	- Range: `0` - `1`
	- The value sent out when the sensor goes to **ON**, that is when you **touch** it.

</div>


<div class="node-output-list" markdown="block">

### Outputs

- *out*
	- Values: <span class='node-input'>min</span>, <span class='node-input'>max</span>
	- Sends out the <span class='node-input'>max</span> value when touched, and the <span class='node-input'>min</span> value when released.

</div>


## Example CODE

<div class="node-example-programs" markdown="block">

- [Example Code](http://code.quirkbot.com/program/XXXXXXXXXXXXXXXX "Go to Quirkbot CODE")
	- Description of example code.

</div>

## Hardware
Crocodile Clips

Conductive Thread

Almost any fruit or plant

Pencil

You and your friends


## Comment
There are a lot of creative ways to use the Circuit Touch. You can for instance use crocodile clips or conductive tread to extend it out, and the current can easily travel through the bodies of several people. You actually can make a touch interface out of your friends! Graphite is also conductive enough for you to draw a touch interface with a pencil.

## Learn more
The nervous system in your body is using electricity to communicate, how does that work? Also, how can you send electricity trough your body with the Quirkbot without even feeling it? And when does electricity becomes dangerous to you?
