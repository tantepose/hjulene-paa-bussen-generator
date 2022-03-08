  /////////////////////////////////////
 // hjulene på bussen-generator 1.0 //
/////////////////////////////////////

// substantiv, verb, onomatopoetikon 
const linjer = [
    ["Hjulene", "de går", "rundt og rundt"],
    ["Motoren", "sier", "brom, brom, brom"],
    ["Bebiene", "sier", "væh, væh, væh"],
    ["Mammaene", "sier", "hysj, hysj, hysj"],
    ["Viskerne", "de går", "svisj, svosj, svisj"],
    ["Sjåføren", "sier", "ta plass bak"],
    ["Vinduene", "de går", "opp og ned"],
    ["Hundene", "sier", "voff, voff, voff"],
    ["Rattet", "det går", "att og fram"],
    ["Radioen", "sier", "dunk, dunk, dunk"],
    ["Blinklysa", "de går", "av og på"],
    ["Mobilene", "sier", "ring, ring, ring"],
    ["Dørene", "de går", "opp og igjen"],
    ["Tantene", "sier", "bla, bla, bla"],
    ["Endene", "sier", "kvakk, kvakk, kvakk"],
    ["Søppelet", "det går", "hit og dit"],
    ["Kontrolløren", "sier", "vis fram billett"],
    ["Kattene", "sier", "mjau, mjau, mjau"],
    ["Stoppknappen", "sier", "pling, pling, pling"],
    ["Jentene", "sier", "knis, knis, knis"],
    ["Guttene", "sier", "ha, ha, ha"],
    ["Sauene", "sier", "bæ, bæ, bæ"],
    ["Pengene", "sier", "klirr, klirr, klirr"],
    ["Fuglene", "sier", "pip, pip, pip"],
    ["Avisene", "sier", "risj, rasj, risj"],
    ["Kuene", "sier", "mø, mø, mø"]
]

// stokk om linjene for ny sang hver gang
// const stokkaLinjer = linjer.sort((a, b) => 0.5 - Math.random());

// skriv hele sangen
for (const linje of linjer) {
    console.log(
        linje[0] + " på bussen " + linje[1] + " " + linje[2] + ", \n" +
        linje[2] + ", \n" +
        linje[2] + ". \n" +
        linje[0] + " på bussen " + linje[1] + " " + linje[2] + ", \n" +
        "gjennom hele byen." + "🎵 \n"
    )
}

console.log("✨ Hjulene på bussen med " + linjer.length + " vers. ✨ \n")