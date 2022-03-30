


// alert("Welcome to 20! You will face a computer by drawing numbers 1-10 until you choose to stop. The player closer to 20 is the winner!")

function anam() {
    var nam = prompt("To begin, enter your name.")
    var nam = alert(`Hello ${nam}, let's get started!`)
    return nam
}

   
  function gen() {
    var ran = Math.floor(Math.random() *10) + 1
    return ran
}
anam()
// console.log(gen())

  function nhum() {

    var hnum = 0
    do {
      
        var g = gen()
        var hnum = hnum + g

        if (hnum >= 20) {
            break
        }
    
       var ny = prompt(`Your number was ${g} its total is now ${hnum}. Do you want to keep drawing? Insert yes or no`) 

    }  while ((hnum <= 20) &&  (ny != "no"))

    var stop = alert(`The user stopped at ${hnum}`)
    return hnum 
}
    // alert(`${nhum()}`)


    function ncom() {

    var cnum = 0
    do {
        alert("The computer is drawing...")
    
        var g = gen()
        var cnum = cnum + g
    
        alert(`The computers number was ${g} its total is now ${cnum}` );
    
    
    
      } while ((cnum) < 16)

    var cstop = alert("I'm done drawing.")
      return cnum
    }

    
    var hnum = nhum()
    var cnum = ncom()
function score() {

    
    

    var hum = 0
    var cpu = 0

    if ((cnum < hnum) && (cnum > 21)) {
        alert(`You won! You got closer to 20!`)
        hum++
        alert(`you have ${hum} wins and I have ${cpu} wins!`)
        var yn = prompt(`Would you like to play again? Type yes or no.`)
    
    
    
      } else if ( (hnum < cnum ) && (hnum < 21) ) {
        alert(`You lose. Mine was closer to 20! `)
        cpu++
        alert(`You have ${hum} wins and I have ${cpu}`)
    
      } else if (cnum == hnum) {
          alert(`It was a draw!`)
    
          alert(`you have ${hum} wins and I have ${cpu} wins!`)   
      } 
    
}

score()
    
    //     var yn = prompt(`Would you like to play again? Type yes or no.`)
    
    
    // } while (yn == 'yes')
    
    // alert(`Game over. Final score was ${hum} to ${cpu}!`)