const q = "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
const w = "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
const e = "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
const a = "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
const s = "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
const d = "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
const z = "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
const x = "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
const c = "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"

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