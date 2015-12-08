---
node: light-sensor
id: light-sensor-docs
---

![Light Sensor Node]


## General
Node that gets the analog data from a Light Sensor connected to Arms, Legs, and Head of the Quirkbot. I gives the lightsesor power from the front pad and reads the back pad to deterimine the amount of hitting light the sensor. It also works with other sensors based on resistance.


## Connections

Inputs     | Range/Value             | Function
:----------|:------------------------|:--------
place      | `H`,`LA`,`LL`,`RA`,`RL` | Choose where the Lightsensor is placed.
min        | `0` - `1`               | Minimum value of the output range
max        | `0` - `1`               | Maximum value of the output range

**Output**

## Example CODE

Program | Link to Quirkbot CODE
:-------|:---------------------
Description | [Name](http://code.quirkbot.com/program/5655f35bd66de10100d133a9 "Go to Quirkbot CODE")

## Hardware
Light sesors

## Comment
The sensor usually has a very wide sesetivity to different light conditions, from pitch black to direct sunlight. This means that in any given lightcondition you will not get the full output range of the node. You can solve this by amplifying the signal with the **Converter** node or using the **Squeeze Sensor** that is self calibrating.

## Learn more
Some link or activity

[Light Sensor Node]: {{r_base_url}}/content-assets/documentation/nodes/LightSensor.png
