var clk = document.getElementById("time");

showTime = ()=>{
    var d = new Date();
    var h = d.getHours();
    var m = d.getMinutes();
    var s = d.getSeconds();
    var session = "AM";

    if(h == 0){
        h = 12;
    }

    if(h>12){
        h -= 12;
        session = "PM";
    }

    h = (h < 10) ? "0" + h : h;
    m = (m<10) ? "0" + m : m;
    s = (s<10) ? "0" + s : s;

    var timeZone = `${h} : ${m} : ${s} ${session}`;

    clk.innerHTML = timeZone;

    setTimeout(showTime,1000)
    
}
showTime();