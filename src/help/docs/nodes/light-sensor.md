---
title: Light Sensor
node: light-sensor
id: light-sensor-docs
---

![Light Sensor Node]


## General
Node that gets the analog data from a Light Sensor connected to the Arms, Legs, or Head of the Quirkbot. It gives the lightsesor power from the front pad and reads the back pad to deterimine the amount of hitting light the sensor. It also works with other sensors based on resistance.


## Connections

Inputs     | Range/Value                 | Function
:----------|:----------------------------|:--------
place      | `H`, `LA`, `LL`, `RA`, `RL` | Choose where the Lightsensor is placed.
min        | `0` - `1`                   | Minimum value of the output range
max        | `0` - `1`                   | Maximum value of the output range

**Output:** Amount of light that is a number between the `min` and `max` value.

## Example CODE

Program | Link to Quirkbot CODE
:-------|:---------------------
Description | [Name](http://code.quirkbot.com/program/5655f35bd66de10100d133a9 "Go to Quirkbot CODE")

## Hardware
Light Sensor
Resistive Sensors

## Comment
The sensor usually has a very wide sesetivity to different light conditions, from pitch black to direct sunlight. This means that in any given lightcondition you will not get the full output range of the node. You can solve this by amplifying the signal with the **Converter** node or using the **Squeeze Sensor** that is self calibrating.

## Learn more
There are different types of Light Sensors. The type we ship with the Quirkbot Kits is something called a Phototransistor. A transistor works simlar to a powerswitch in your home and can control the flow of electricity. In a Phototransistor light from its surroundings works as the switch. The more light, the more electricity is flowing trough the Phototransistor.

[Light Sensor Node]: {{r_base_url}}/content-assets/documentation/nodes/LightSensor.png
