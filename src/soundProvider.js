const q = "https://sampleswap.org/samples-ghost/INSTRUMENTS%20(SINGLE%20SAMPLES)/Pads/195[kb]alarmpad.wav.mp3"
const w = "https://sampleswap.org/samples-ghost/INSTRUMENTS%20(SINGLE%20SAMPLES)/Pads/3100[kb]alien-monolith-pad.wav.mp3"
const e = "https://sampleswap.org/samples-ghost/INSTRUMENTS%20(SINGLE%20SAMPLES)/Pads/916[kb]all-glitter-and-shimmer-pad.wav.mp3"
const a = "https://sampleswap.org/samples-ghost/INSTRUMENTS%20(SINGLE%20SAMPLES)/Pads/3724[kb]ambient-dreamscape.wav.mp3"
const s = "https://sampleswap.org/samples-ghost/INSTRUMENTS%20(SINGLE%20SAMPLES)/Pads/7551[kb]ambient-peaceful-paradise-pad-journey.wav.mp3"
const d = "https://sampleswap.org/samples-ghost/INSTRUMENTS%20(SINGLE%20SAMPLES)/Pads/261[kb]ambient-strum-sustain.wav.mp3"
const z = "https://sampleswap.org/samples-ghost/INSTRUMENTS%20(SINGLE%20SAMPLES)/Pads/948[kb]analog_stack_hit.wav.mp3"
const x = "https://sampleswap.org/samples-ghost/INSTRUMENTS%20(SINGLE%20SAMPLES)/Pads/865[kb]angelpads.wav.mp3"
const c = "https://sampleswap.org/samples-ghost/INSTRUMENTS%20(SINGLE%20SAMPLES)/Pads/4468[kb]atmospheric-abduction.wav.mp3"

export const soundProvider = (key) => {
    switch (key){
        case "Q":
            return q;
        case "W":
            return w;
        case "E":
            return e;
        case "A":
            return a;
        case "S":
            return s;
        case "D":
            return d;
        case "Z":
            return z;
        case "X":
            return x;
        case "C":
            return c;
        default:
            return ""
    }
}