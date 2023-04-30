{% load static %}
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Timings App</title>
</head>
<body>
    <div id="timer">00:00:00</div>
    <button id="startButton">Start</button>
    <script>
        const timings = {{ timings|safe }};

        const timer = document.getElementById('timer');
        const startButton = document.getElementById('startButton');

        let elapsedTime = 0;
        let timerInterval;

        function formatTime(timeInMilliseconds) {
            const seconds = Math.floor((timeInMilliseconds / 1000) % 60);
            const minutes = Math.floor((timeInMilliseconds / (1000 * 60)) % 60);
            const hours = Math.floor((timeInMilliseconds / (1000 * 60 * 60)) % 24);

            return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        }

        function updateTimer() {
            elapsedTime += 1000;
            timer.textContent = formatTime(elapsedTime);

            for (const timing of timings) {
                if (formatTime(elapsedTime) === timing.time) {
                    const audio = new Audio('{% static "myapp/" %}' + timing.description.toLowerCase().replace(' ', '_') + '.mp3');
                    audio.play();
                }
            }
        }

        startButton.addEventListener('click', () => {
            startButton.disabled = true;
            timerInterval = setInterval(updateTimer, 1000);
        });
    </script>
</body>
</html>
