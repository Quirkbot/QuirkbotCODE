---
title: Servo Motor
node: servo-motor
id: servo-motor-docs
---

Node to control Servo Motors through the Servo Motor Backpack, or any Backpack with a Servo Motor Connector. Servo Motors have an arm that can move to specific position. Maximum movement is a little less than half a rotation, about 120 - 180 degrees, depending on the motor.


## Connections

Inputs     | Range/Value  | Function
:----------|:-------------|:--------
position   |  `0` - `1`   | Set positon of the Servo Motor: `0`=Min, `1`=Max, `0.5`=Middle
place      | `SERVO_BP1`, `SERVO_BP2`, `BP1`, `BP2`, `BP3`, `BP4`, `BP5`, `BP6` | Choose where the Servo is connected.

**No Outputs**

## Example CODE

Program | Link to Quirkbot CODE
:-------|:---------------------
Description | [Name](http://code.quirkbot.com/program/5655f35bd66de10100d133a9 "Go to Quirkbot CODE")

## Hardware
Servo Motor
Servo Motor Backpack

## Comment
Servo motors are quite fragile, so avoid moving the arm by yourself. Let the Quirkbot move it. Never use force or try to move it past its end positions. You can easily break it.

## Learn more
Servo Motors know their position because they have a built in Sensor that detects what position the Motor is in.
