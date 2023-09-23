let output = document.querySelector(".window-text")
let btn1 = document.querySelector(".one")
let btn2 = document.querySelector(".two")
let btn3 = document.querySelector(".thre")
let btn4 = document.querySelector(".four")
let btn5 = document.querySelector(".five")
let btn6 = document.querySelector(".six")
let btn7 = document.querySelector(".seven")
let btn8 = document.querySelector(".eight")
let btn9 = document.querySelector(".nine")
let btn0 = document.querySelector(".nol")
let btnqosh = document.querySelector(".qoshish")
let btnayir = document.querySelector(".ayirish")
let btnkop = document.querySelector(".kop")
let btnbol = document.querySelector(".bol")
let btnteng = document.querySelector(".teng")
let btnclear = document.querySelector(".clear")


btn1.addEventListener(`click`, SubNomber)
btn2.addEventListener(`click`, SubNomber)
btn3.addEventListener(`click`, SubNomber)
btn4.addEventListener(`click`, SubNomber)
btn5.addEventListener(`click`, SubNomber)
btn6.addEventListener(`click`, SubNomber)
btn7.addEventListener(`click`, SubNomber)
btn8.addEventListener(`click`, SubNomber)
btn9.addEventListener(`click`, SubNomber)
btn0.addEventListener(`click`, SubNomber)
btnqosh.addEventListener(`click`, SubNomber)
btnayir.addEventListener(`click`, SubNomber)
btnkop.addEventListener(`click`, SubNomber)
btnbol.addEventListener(`click`, SubNomber)
btnteng.addEventListener(`click`, SubNomber)
btnayir.addEventListener(`click`, SubNomber)


function SubNomber(e) {
    output.innerHTML += e.target.value
}

btnclear.addEventListener("click", () => {
    output.innerHTML = ""
})

btnteng.addEventListener(`click`, natija)

function natija() {
    let result = (eval(output.textContent));
    output.textContent = result;
}
