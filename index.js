const generatorRecursive = (tabella, iterationCount, nolog) => {
    const max = 55;
    const min = 1;
    const generated = Math.floor(Math.random() * (max - min + 1) + min);
    const filtered = tabella.filter((i) => i != generated)
    if (nolog) {
        console.log(generated)
        console.log(filtered)
    }
    iterationCount++
    return filtered.length === 5 ? { filtered, iterationCount } : generatorRecursive(filtered, iterationCount, nolog)
}

let final = [];

const generatorRecursiveVersionTwo = (tabella, iterationCount, nolog) => {
    const max = 55;
    const min = 1;
    const generated = Math.floor(Math.random() * (max - min + 1) + min);
    const filtered = tabella.filter((i) => i != generated)
    // if (nolog) {
    //     console.log('generated: ', generated)
    //     console.log('filtered: ', filtered)
    // }
    iterationCount++
    if (filtered.length === 1) {
        if (final.includes(...filtered)) {
            generatorRecursiveVersionTwo(generatorTabella(55), iterationCount, nolog)
        }
        if (!(final.includes(...filtered))) 
        { 
            final = [...filtered, ...final].sort();
            if (final.length === 5) return;
            generatorRecursiveVersionTwo(generatorTabella(55), iterationCount, nolog)
        }else {
            // generatorRecursiveVersionTwo(filtered, iterationCount, nolog)
        }
    } else {
        generatorRecursiveVersionTwo(filtered, iterationCount, nolog)
    }
    // return filtered.length === 1 ? { filtered, iterationCount } : generatorRecursiveVersionTwo(filtered, iterationCount, nolog)
}

// const minMaxFixed = (min) => (max) => generatorRecursive(tabella, iterationCount, nolog, min, max)

const generatorTabella = (max) => [...Array(max)].map((_, i) => i + 1);

const tabella = generatorTabella(55)

// let { filtered: colonna, iterationCount } = generatorRecursive(tabella, 0, true)

// console.log(`la tua colonna generata è ${colonna} generata in ${iterationCount}`);

// let { filtered: col, iterationCount } = generatorRecursiveVersionTwo(tabella, 0, false)
// console.log(`la tua colonna generata è ${col} generata in ${iterationCount}`);
generatorRecursiveVersionTwo(tabella, 0, true)
const sorted = final.sort((a,b) => a-b)
console.log(sorted)