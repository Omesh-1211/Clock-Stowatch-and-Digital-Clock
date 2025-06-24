let watch = document.querySelector('.countdown');
let play = document.querySelector('.play');
let pause = document.querySelector('.pause');
let reset = document.querySelector('.reset');

let min = 0, sec = 0, msec = 0;
let timerId = null;


play.addEventListener('click', function () {
    if (timerId !== null) {
        clearInterval(timerId);
    }

    timerId = setInterval(function () {
        msec++;
        if (msec === 100) {
            msec = 0;
            sec++;
            if (sec === 60) {
                sec = 0;
                min++;
            }
        }

        let msecString = msec < 10 ? `0${msec}` : `${msec}`;
        let secString = sec < 10 ? `0${sec}` : `${sec}`;
        let minString = min < 10 ? `0${min}` : `${min}`;

        watch.innerHTML = `${minString} : ${secString} : ${msecString}`;
    }, 10);
});

pause.addEventListener("click", function () {
    clearInterval(timerId);
    
    
});

reset.addEventListener("click", function () {
    clearInterval(timerId);
    min = 0;
    sec = 0;
    msec = 0;
    watch.innerHTML = '00 : 00 : 00';
});
