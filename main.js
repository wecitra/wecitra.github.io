const pupils = document.querySelectorAll(".eye .pupil");
window.addEventListener("mousemove", (e) => {
    pupils.forEach((pupil) => {
        var rect = pupil.getBoundingClientRect();
        var x = (e.pageX - rect.left) / 30 + "px";
        var y = (e.pageY - rect.top) / 30 + "px";
        pupil.style.transform = "translate3d(" + x + "," + y + ", 0px)";
    });
});
