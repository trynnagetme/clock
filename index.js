

function updateClock(){

    const now = new Date();
    let hours = now.getHours();
    const meridian = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12;
    hours = hours.toString().padStart(2, 0);
    let minutes = now.getMinutes();
    minutes = minutes.toString().padStart(2,0);
    let seconds = now.getSeconds();
    seconds = seconds.toString().padStart(2,0);
    const timeString = `${hours}:${minutes}:${seconds} ${meridian}`;
    document.getElementById("clock").textContent = timeString;
}

updateClock();
setInterval(updateClock, 1000);