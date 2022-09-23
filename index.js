

setInterval(function () {
let hr=document.getElementById("hour")
let min=document.getElementById("minute")
let sec=document.getElementById("second")
    dat = new Date();
    hor = dat.getHours();
    mi = dat.getMinutes();
    se = dat.getSeconds();

    hrotation = 30 * hor + mi / 2;
    mrotation = 6 * mi;
    srotation = 6 * se;
    hr.style.transform = `rotate(${hrotation}deg)`;
    min.style.transform = `rotate(${mrotation}deg)`;
    sec.style.transform = `rotate(${srotation}deg)`;

},1000);