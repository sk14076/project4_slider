let slider = document.getElementById("rngslider")
let frame1 = document.getElementById("hadoken1")
let frame2 = document.getElementById("hadoken2")
let frame3 = document.getElementById("hadoken3")
let frame4 = document.getElementById("hadoken4")
let frame5 = document.getElementById("hadoken5")
let frame6 = document.getElementById("hadoken6")
let frame7 = document.getElementById("hadoken7")
let frame8 = document.getElementById("hadoken8")
let frame9 = document.getElementById("hadoken9")
let frame10 = document.getElementById("hadoken10")



slider.oninput = function() {
    if(this.value < 10){
        frame1.classList.remove("hidden");
        frame2.classList.add("hidden");
        frame3.classList.add("hidden");
        frame4.classList.add("hidden");
        frame5.classList.add("hidden");
        frame6.classList.add("hidden");
        frame7.classList.add("hidden");
        frame8.classList.add("hidden");
        frame9.classList.add("hidden");
        frame10.classList.add("hidden");
    } else if (this.value >= 10 && this.value <20){
        frame1.classList.add("hidden");
        frame2.classList.remove("hidden");
        frame3.classList.add("hidden");
        frame4.classList.add("hidden");
        frame5.classList.add("hidden");
        frame6.classList.add("hidden");
        frame7.classList.add("hidden");
        frame8.classList.add("hidden");
        frame9.classList.add("hidden");
        frame10.classList.add("hidden");
    } else if (this.value >= 20 && this.value <30){
        frame1.classList.add("hidden");
        frame2.classList.add("hidden");
        frame3.classList.remove("hidden");
        frame4.classList.add("hidden");
        frame5.classList.add("hidden");
        frame6.classList.add("hidden");
        frame7.classList.add("hidden");
        frame8.classList.add("hidden");
        frame9.classList.add("hidden");
        frame10.classList.add("hidden");
    } else if (this.value >= 30 && this.value <40){
        frame1.classList.add("hidden");
        frame2.classList.add("hidden");
        frame3.classList.add("hidden");
        frame4.classList.remove("hidden");
        frame5.classList.add("hidden");
        frame6.classList.add("hidden");
        frame7.classList.add("hidden");
        frame8.classList.add("hidden");
        frame9.classList.add("hidden");
        frame10.classList.add("hidden");
    } else if (this.value >= 40 && this.value <50){
        frame1.classList.add("hidden");
        frame2.classList.add("hidden");
        frame3.classList.add("hidden");
        frame4.classList.add("hidden");
        frame5.classList.remove("hidden");
        frame6.classList.add("hidden");
        frame7.classList.add("hidden");
        frame8.classList.add("hidden");
        frame9.classList.add("hidden");
        frame10.classList.add("hidden");
    } else if (this.value >= 50 && this.value <60){
        frame1.classList.add("hidden");
        frame2.classList.add("hidden");
        frame3.classList.add("hidden");
        frame4.classList.add("hidden");
        frame5.classList.add("hidden");
        frame6.classList.remove("hidden");
        frame7.classList.add("hidden");
        frame8.classList.add("hidden");
        frame9.classList.add("hidden");
        frame10.classList.add("hidden");
    } else if (this.value >= 60 && this.value <70){
        frame1.classList.add("hidden");
        frame2.classList.add("hidden");
        frame3.classList.add("hidden");
        frame4.classList.add("hidden");
        frame5.classList.add("hidden");
        frame6.classList.add("hidden");
        frame7.classList.remove("hidden");
        frame8.classList.add("hidden");
        frame9.classList.add("hidden");
        frame10.classList.add("hidden");
    } else if (this.value >= 70 && this.value <80){
        frame1.classList.add("hidden");
        frame2.classList.add("hidden");
        frame3.classList.add("hidden");
        frame4.classList.add("hidden");
        frame5.classList.add("hidden");
        frame6.classList.add("hidden");
        frame7.classList.add("hidden");
        frame8.classList.remove("hidden");
        frame9.classList.add("hidden");
        frame10.classList.add("hidden");
    } else if (this.value >= 80 && this.value <90){
        frame1.classList.add("hidden");
        frame2.classList.add("hidden");
        frame3.classList.add("hidden");
        frame4.classList.add("hidden");
        frame5.classList.add("hidden");
        frame6.classList.add("hidden");
        frame7.classList.add("hidden");
        frame8.classList.add("hidden");
        frame9.classList.remove("hidden");
        frame10.classList.add("hidden");
    } else if (this.value >= 90 && this.value <100){
        frame1.classList.add("hidden");
        frame2.classList.add("hidden");
        frame3.classList.add("hidden");
        frame4.classList.add("hidden");
        frame5.classList.add("hidden");
        frame6.classList.add("hidden");
        frame7.classList.add("hidden");
        frame8.classList.add("hidden");
        frame9.classList.add("hidden");
        frame10.classList.remove("hidden");
    }
}