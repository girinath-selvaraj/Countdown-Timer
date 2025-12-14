let timer;

function startCountdown() {
    clearInterval(timer);

    const input = document.getElementById("dateTime").value;
    const targetDate = new Date(input).getTime();

    if (!input) {
        alert("Please select date and time");
        return;
    }

    timer = setInterval(function () {
        const now = new Date().getTime();
        const difference = targetDate - now;

        if (difference <= 0) {
            clearInterval(timer);
            document.getElementById("message").innerHTML = "🎉 Time's Up!";
            document.getElementById("alarmSound").play();
            document.getElementById("days").innerHTML = "00";
            document.getElementById("hours").innerHTML = "00";
            document.getElementById("minutes").innerHTML = "00";
            document.getElementById("seconds").innerHTML = "00";
            return;
        }

        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / (1000 * 60)) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        document.getElementById("days").innerHTML = days;
        document.getElementById("hours").innerHTML = hours;
        document.getElementById("minutes").innerHTML = minutes;
        document.getElementById("seconds").innerHTML = seconds;
    }, 1000);
}
