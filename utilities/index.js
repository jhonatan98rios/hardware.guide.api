function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array
}

function clearArray(array) {
    return [...new Set(array)]
}

function elementsClassifier(array, label) {
    return array.map(item => {
        return {
            text: item,
            label: label
        }
    })
}


module.exports = {
    shuffleArray,
    clearArray,
    elementsClassifier
}