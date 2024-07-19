window.addEventListener('keydown', function(e) {
    // console.log(e.keyCode)
    const audio = this.document.querySelector(`audio[data-key="${e.keyCode}"]`)
    const key = this.document.querySelector(`.key[data-key="${e.keyCode}"]`)
    if (!audio) return; // stop the function if audio element not found
    audio.currentTime = 0;
    audio.play();
    // console.log(key);
    key.classList.add('playing'); // add the playing class
})

function removeTransition(e) {
    console.log(e)
}

const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach(key => key.addEventListener('transitionend', removeTransition));