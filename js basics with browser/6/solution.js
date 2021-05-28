function attachEventsListeners() {

    let daysInput = document.getElementById('days');
    let hoursInput = document.getElementById('hours');
    let minutesInput = document.getElementById('minutes');
    let secondsInput = document.getElementById('seconds');

    const fraction = 3

    document.getElementById('daysBtn').addEventListener('click', () => {
        let days = parseFloat(daysInput.value);
        daysInput.value = (days).toFixed(fraction).toString()
        hoursInput.value = (days * 24).toFixed(fraction).toString()
        minutesInput.value = (days * 24 * 60).toFixed(fraction).toString()
        secondsInput.value = (days * 24 * 60 * 60).toFixed(fraction).toString()
    })
    document.getElementById('hoursBtn').addEventListener('click', () => {
        let hours = parseFloat(hoursInput.value);
        daysInput.value = (hours / 24).toFixed(fraction).toString()
        hoursInput.value = (hours).toFixed(fraction).toString()
        minutesInput.value = (hours * 60).toFixed(fraction).toString()
        secondsInput.value = (hours * 60 * 60).toFixed(fraction).toString()
    })
    document.getElementById('minutesBtn').addEventListener('click', () => {
        let minutes = parseFloat(minutesInput.value);
        daysInput.value = (minutes / 24 / 60).toFixed(fraction).toString()
        hoursInput.value = (minutes / 60).toFixed(fraction).toString()
        minutesInput.value = (minutes).toFixed(fraction).toString()
        secondsInput.value = (minutes * 60).toFixed(fraction).toString()
    })
    document.getElementById('secondsBtn').addEventListener('click', () => {
        let seconds = parseFloat(secondsInput.value);
        daysInput.value = (seconds / 60 / 60 / 24).toFixed(fraction).toString()
        hoursInput.value = (seconds / 60 / 60).toFixed(fraction).toString()
        minutesInput.value = (seconds / 60).toFixed(fraction).toString()
        secondsInput.value = (seconds).toFixed(fraction).toString()
    })
}
