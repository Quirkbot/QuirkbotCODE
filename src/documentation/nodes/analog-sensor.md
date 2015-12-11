---
title: Analog Sensor
node: analog-sensor
id: analog-sensor-docs
---

Node that read Analog input from any place on the quirkbot with Analog read capability.

## Connections

Inputs     | Range/Value       | Function
:----------|:------------------|:--------
place      | `HB`, `LAB`, `LLB`, `RAB`, `RLB`, `BP1`, `BP2`, `LLF`, `LAF`| Choose where to read the Analog input.
min        | `0` - `1`                   | Minimum value of the output range
max        | `0` - `1`                   | Maximum value of the output range


**Output:** The Analog value as a number between the `min` and `max` value.

## Example CODE

Program | Link to Quirkbot CODE
:-------|:---------------------
Description | [Name](http://code.quirkbot.com/program/5655f35bd66de10100d133a9 "Go to Quirkbot CODE")

## Hardware
Resistive Sensors

## Comment
This Node is meant for using your own resitive sensors and input devices, but you can also use your own bodies resistance as a sensor, or to create a more or less random input voltage. *guide coming soon*. Good to know for advaned users is that the inputs `HB`, `LAB`, `LLB`, `RAB` and `RLB` are premanntly pulled to Ground with a 10k resistor.

## Learn more
One very common resistive input devices is the Potentiometer.