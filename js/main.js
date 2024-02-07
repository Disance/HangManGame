let yourWord = "white"
let hiddeWord = yourWord.split("")
let isWin = hiddeWord.length
let win = 0
let newWord = []
let error = 1


    for (let j = 0; j < hiddeWord.length;j++){
        hiddeWord[j] = "_"
        newWord.push(hiddeWord[j])
    }

const letterElements = document.querySelectorAll('.letter')
letterElements.forEach(function(element){
    element.addEventListener('click' , function(){
        found = false
        yourWord.split("")
        for(let i = 0; i < yourWord.length; i++){
            if(element.id == yourWord[i]){
                found = true
                newWord[i] = yourWord[i]
                document.querySelector('.word').innerHTML = newWord.join(" ")
                element.classList.add("inactive")
                win +=1 
            }else{
                element.classList.add("inactive")
            }
        }if(!found){
            error +=1
            document.getElementById('img').src = `img/Hangman${error}.png`
        }
        if(error == 9){
            setTimeout(function(){
                alert("You Lose")
            location.reload()
            }, 100)
        }
        if (win == isWin){
            setTimeout(function(){
                alert("You win")
                location.reload()
            } , 1)
        }
    })
})
document.querySelector('.word').innerHTML = newWord.join(" ")