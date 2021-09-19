function searchWord(sentence, word){
    var sentenceArray = sentence.split(' ');
    for(var i = 0 ; i < sentenceArray.length; i++){
        if(sentenceArray[i].toUpperCase() === word.toUpperCase()){
            return "Found the word at position "+i;
        }
    }

    return "Word not found";
}

console.log(searchWord("My name is Mario", "mario"));
console.log(searchWord("My name is Mario", "Maria"));