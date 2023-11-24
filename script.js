let inputbox = document.getElementById("num_input")
let prompttext = document.getElementById("prompt")
let guess = document.getElementById("gessed_number")
let result
function submit() {
    let x = 0   
    let submit_counter = 0 
    document.getElementById("submit").innerHTML = `Submit <br>`
    prompttext.innerHTML = ``
    guess.innerHTML = ``
    document.getElementById("result_number").innerHTML = ``
    let input = inputbox.value 
    if (input <= 0 || input > 10 && submit_counter === 0) {
        input = Number(input)
        prompttext.innerText = "Please enter a number between 1 - 10"
    } else if (submit_counter < 1) {
        input = Number(input)
        console.log(`Input taken : ${input} | no errors`)
        submit_counter += 1
        prompttext.innerText = ""
        function cycle() {
            if (x <= 30) {
                result = Math.round((Math.random())*10)
                result === 0 ? result = 1 : result = result
                prompttext.innerHTML = `The Lucky number is : ${result}`
                x++
                setTimeout(cycle , 50)
            } else {
                document.getElementById("result_number").innerHTML += `The Lucky number is : ${result} <br>`
                input === result ? prompttext.innerHTML = `😁You guessed the lucky number. Well done 💕 <br>`:prompttext.innerHTML = `Can't even gess a number 😒 ? what a loser 😂 F**k you <br>`
                document.getElementById("submit").innerHTML = `Try again <br>`
                inputbox.value = ""
                guess.innerHTML += `You're gess is : ${input}`
            }
        }
        cycle()
    } 
}


