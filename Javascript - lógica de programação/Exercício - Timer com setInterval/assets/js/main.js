function timer() {
    function getTimeFromSeconds(seconds) {
        const data = new Date(seconds * 1000);
        return data.toLocaleTimeString('pt-BR', {
            hour12: false,
            timeZone: 'UTC'
        });
    }

    function startTimer() {
        time = setInterval(() => (seconds++, timer.innerHTML = getTimeFromSeconds(seconds)), 1000);
    }

    const timer = document.querySelector('.timer');
    let seconds = 0;
    let time;

    document.addEventListener('click', function (e) {
        const el = e.target;
        if (el.classList.contains('start')) {
            timer.classList.remove('stopTime');
            clearInterval(time);
            startTimer();
        }

        if (el.classList.contains('stop')) {
            clearInterval(time);
            timer.classList.add('stopTime');
        }

        if (el.classList.contains('rest')) {
            clearInterval(time);
            timer.innerHTML = '00:00:00';
            seconds = 0;
            timer.classList.remove('stopTime');
        }
    });
}

timer();