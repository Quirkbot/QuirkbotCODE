---
title: Voltage Output
node: voltage-output
id: voltage-output-docs
---

Node that outputs a voltage between 0 volts and the battery voltage (3.2 - 4.2V). The Node is using Pulse-width modulation and can be used on any place on the Quirkbot.

## Connections

<div class="node-input-list" markdown="block">

### Inputs

- *in*
    - Range: `0` - `1`
    - Form 0 volts to battery voltage.

- *place*
    - Values: *any place*
    - Choose where to read the input.

</div>

## Example CODE

<div class="node-example-programs" markdown="block">

- [Example Code](http://code.quirkbot.com/program/XXXXXXXXXXXXXXXX "Go to Quirkbot CODE")
    - Description of example code.

</div>

## Comment
The Maximum voltage is limited to the how much charge is curretly in the battry. The maximum current that can safey be used from the `BP1` - `BP6` is around 40mA. The Arms, Legs and Horn is protected by curren limiting resistors, but the Backpack connector is not, so take great care when experimenting with them, Never physically connect two backpack places directly or even with an LED (without a resitor). This may damage the Quirkbot beyond repare.

## Learn more
Lern about Ohms law.
