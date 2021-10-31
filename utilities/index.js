function _clearArray({array=[]}) {
    return [...new Set(array)]
}

function _shuffleArray({array=[]}) {
    let newArray = [...array]

    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray
}

function preProcess({array=[]}) {
    const samples = _clearArray({array: array})
    const shuffled_samples = _shuffleArray({array: samples})
    return shuffled_samples
}

module.exports = {
    preProcess
}