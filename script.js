const year_btn = document.querySelector(".year-btn");
const month_btn = document.querySelector(".month-btn");
const basic = document.getElementById("basic");
const professional = document.getElementById("professional");
const master = document.getElementById("master");


year_btn.addEventListener("click",function(){
    year_btn.classList.remove("active");
    month_btn.classList.add("active");
    basic.innerHTML = "<span>$</span>19.99";
    professional.innerHTML = "<span>$</span>24.99";
    master.innerHTML = "<span>$</span>39.99"
})

month_btn.addEventListener("click",function(){
    month_btn.classList.remove("active");
    year_btn.classList.add("active");
    basic.innerHTML = "<span>$</span>199.99";
    professional.innerHTML = "<span>$</span>249.99";
    master.innerHTML = "<span>$</span>399.99"
})