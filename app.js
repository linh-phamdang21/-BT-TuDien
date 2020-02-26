function findWord() {
    let engWord = ["orange", "apple", "watermelon", "banana"];
    let vieWord = ["qua cam", "qua tao", "qua dua hau", "qua chuoi"];
    let word = document.getElementById("inputword").value;
    let result = "";
    for (let i = 0; i < engWord.length; i++) {
        if (engWord[i] === word) {
            for (let j = 0; i < vieWord.length; j++) {
                if (i === j) {
                    result = vieWord[j];
                    return document.getElementById("meaning").innerHTML = result;
                }
            }
        }
    }
    return alert("Word's notfound");
}
