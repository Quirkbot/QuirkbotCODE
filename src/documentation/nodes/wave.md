---
title: Wave
node: wave
id: wave-docs
---

![Wave Node]

The Wave node outputs a continious Wave that oscillates (swings back and forth). There are a number of differet Waveforms (types of waves) that can be selected. The Wave Node can be used in many different situations like moveing a {% assign arg1='servo-motor-docs' %}{% include f_print_page_link %} back and forth, blinking an {% assign arg1='led-docs' %}{% include f_print_page_link %} or litterating trough a {% assign arg1='list-docs' %}{% include f_print_page_link %}.

## Connections

Inputs     | Range/Value       | Function
:----------|:------------------|:--------
length     | `0` - `1000`      |  Lenght of the period of the Waveform in seconds
type | `WAVE_SINE`, `WAVE_SQUARE`, `WAVE_TRIANGLE`, `WAVE_PULSE`, `WAVE_RAMP_UP`, `WAVE_RAMP_DOWN`| The type of Waveform
min        | `0` - `1`         | Trough value of the Wave
max        | `0` - `1`         | Peak value of the Wave
offset     | `0` - `1`         | Offest of the period of the Waveform

**Output:** A continuous Wave oscillating between the `min` and `max` value.

## Example CODE

Program | Link to Quirkbot CODE
:-------|:---------------------
Description | [Name](http://code.quirkbot.com/program/5655f35bd66de10100d133a9 "Go to Quirkbot CODE")

## Comment
You can put a Wave into a Wave by connecting the ouput of one wave to the lenght input. This is called modulation and can create some very interesting results. 

## Learn more
Waves are fun and interesting! And the world in full of them. Kahn Acadamy has some good material on [Waves](https://www.khanacademy.org/science/physics/mechanical-waves-and-sound/mechanical-waves/v/introduction-to-waves).



[Wave Node]: {{r_base_url}}/content-assets/documentation/nodes/Wave.png
