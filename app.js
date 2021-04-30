const hasDuplicate = (arr) => {
    const noDupes = new Set(arr);
    console.log(noDupes);
    return arr.length === noDupes.size;
}

const vowelCount = (str) => {
    const vowels = 'aeiou';
    let val = 0;
    const result = new Map();
    const lwrCase = str.toLowerCase();

    for(let char of lwrCase) {
        val = 0;
        if(vowels.indexOf(char) !== -1){
            for(let i = 0; i < str.length; i++){
                if(char === lwrCase[i]){
                    val++;
                }
            }
            result.set(char, val);
        }
    }
    return result;
}