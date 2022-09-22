const textArea = document.querySelector("#textarea")
const btn = document.querySelector("#btn")
const main = document.querySelector(".main")


btn.addEventListener("click", () => {

    const vowels = ["a","e","i","o","u"]
    let count = 0

    const value = textArea.value.split("")
    for(let i in value){
        for(let vowel of vowels){
           if(value[i] == vowel){
            count++
           }
        }
    }
    
    if(count > 0){
        //create alert div
        const alert = document.createElement("div")
        alert.className = "alert alert-success mt-4"
        alert.innerText = `There are ${count} vowels in `

        //create bold div
        const bold = document.createElement("b")
        bold.innerText = textArea.value
        bold.style.color = "black"

        alert.appendChild(bold)        
        main.append(alert)
    }else{
        const alert = document.createElement("div")
        alert.className = "alert alert-danger mt-4"
        const bold = document.createElement("b")
        bold.innerText = textArea.value
        bold.style.color = "red"
        alert.innerText = `There is not vowel in `
        alert.append(bold)

        main.append(alert)
    }


    
})