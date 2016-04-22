---
title: Wave
node: wave
object_id: wave-docs
---

The Wave node outputs a continuous Wave that oscillates (swings back and forth). There are a number of different Waveforms (types of waves) that can be selected. The Wave Node can be used in many different situations like moving a {% assign arg1='servo-motor-docs' %}{% include f_print_page_link %} back and forth, blinking an {% assign arg1='led-docs' %}{% include f_print_page_link %} or iterating trough a {% assign arg1='list-docs' %}{% include f_print_page_link %}.


## Connections

<div class="node-input-list" markdown="block">

### Inputs

- *length*
    - Range: `0` - `1000`
    - Length of the period of the Waveform in seconds.

- *type*
    - Values: `WAVE_SINE`, `WAVE_SQUARE`, `WAVE_TRIANGLE`, `WAVE_PULSE`, `WAVE_RAMP_UP`, `WAVE_RAMP_DOWN`
    - The type of Waveform.

- *min*
    - Range: `0` - `1`
    - Trough value (the lowest) of the Wave.

- *max*
    - Range: `0` - `1`
    - Peak value (the highest) of the Wave.

- *offset*
    - Range: `0` - `1`
    - Offset of the period of the Waveform.

</div>


<div class="node-output-list" markdown="block">

### Outputs

- *out*
    - Range: <span class='node-input'>min</span> - <span class='node-input'>max</span>
    - A continuous Wave oscillating between the <span class='node-input'>min</span> and <span class='node-input'>max</span> values.

</div>

## Comment
You can put a Wave into a Wave by connecting the output of one wave to the length input. This is called modulation and can create some very interesting results.

## Learn more
Waves are fun and interesting! And the world in full of them. Kahn Academy has some good material on [Waves](https://www.khanacademy.org/science/physics/mechanical-waves-and-sound/mechanical-waves/v/introduction-to-waves).
