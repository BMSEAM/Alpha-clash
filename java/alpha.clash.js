// function play(){
//     //step-1:hide teh home screen. to hide the screen add the class hidden to the home section
//     const homeSection = document.getElementById('home-screen');
//     // console.log(homeSection.classList)
//     homeSection.classList.add('hidden');
//     //show the playground
//     const playgroundSection = document.getElementById('play-ground');
//     playgroundSection.classList.remove('hidden');

// }


//we can do that using utility function (taking to to the playground)

function continueGame(){
    //step-1: generate a random alphabet
    const alphabet = getRandomAlphabet();
    console.log('Your random alphabet', alphabet);

    //set randomly genereated alphabet to the screen(show it)
    const currentAlphabetElement = document.getElementById('current-alphabet')
    currentAlphabetElement.innerText = alphabet;
    //set bg color
    setBackgroundColorById(alphabet);
}



function play(){
    hideElementById('home-screen');
    showElementById('play-ground');
    continueGame()
}
