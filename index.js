const hourEl = document.getElementById
    ("hours");
    console.log(hourEl);

const minuteEl = document.getElementById
    ("minutes");

const secondEl = document.getElementById
    ("seconds");

const ampmEl = document.getElementById
    ("ampm");

function upDateClock() {
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm = "AM";

if (h > 12) {
    h = h - 12;
    ampm = "PM";
}
    hourEl.innerText = h;
    minuteEl.innerText = m;
    secondEl.innerText = s;
    ampmEl, (innerText = ampm);
    
    setTimeout(()=>{
        upDateClock()
    },1000)

    clearTimeout(()=>{
        upDateClock()
    },1000)

}

 upDateClock()





