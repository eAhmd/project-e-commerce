let countData = new Date("Dec 31,2021 23:59:59").getTime();
let counterDate = setInterval(() => {
    let dateNow = new Date().getTime();
    let diffDate = countData - dateNow;
    let days = Math.floor(diffDate / 1000 / 60 / 60 / 24);
    let hour = Math.floor(diffDate % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    let minu = Math.floor(diffDate % (1000 * 60 * 60) / (1000 * 60));
    let sec = Math.floor(diffDate % (1000 * 60) / (1000));
    document.querySelector(".days").textContent = days;
    document.querySelector(".hour").textContent = hour;
    document.querySelector(".min").textContent = minu;
    document.querySelector(".sec").textContent = sec;

}, 1000);
let toggle = document.querySelectorAll(".toggles li a");
let tag = document.querySelectorAll(".tag");

toggle.forEach((e) => {



    e.addEventListener("click", (el) => {
        toggle.forEach((ele) => {
            ele.classList.remove("active");
        });
        el.currentTarget.classList.add("active");
        tag.forEach((et) => {
            et.style.display = "none";
        });
        document.querySelector(`${el.currentTarget.dataset.class}`).style.display = "flex";
    });
});