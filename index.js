const hourEl = document.getElementById("hour")
const minuteEL = document.getElementById("minutes")
const secondsEl = document.getElementById("seconds")
const ampmEl = document.getElementById("ampm")

function updateClock() {

    let currentTime = new Date()
    let h = new Date().getHours()
    let m = new Date().getMinutes()
    let s = new Date().getSeconds()
    let ampm = 'AM'
   

    

    let sunset = new Date();
    sunset.setHours(18)
    sunset.setMinutes(0)
    sunset.setSeconds(0)
    

    // if(currentTime > sunset) {
    //     document.body.style.backgroundImage ="url('https://unsplash.com/photos/silhouette-of-people-on-beach-during-sunset-Y_tq3CvOL9c')";
    // } else {
    //     document.body.style.backgroundImage =  "url('https://unsplash.com/photos/shape-map-8nossXLXYro')";
    // }
    

    if(h >= 12){
        h -= 12
        ampm = "PM"
    }

    if(h === 0) {
        h = 12;
    }

    hourEl.innerText = h;
    minuteEL.innerText = m;
    secondsEl.innerText = s;
    ampmEl.innerText = ampm;

    setTimeout(() => {
        updateClock()
    }, 1000);
}
updateClock()