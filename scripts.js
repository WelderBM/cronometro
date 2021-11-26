let s = 0
let m = 0
let h = 0
let d = 0

let iniciou = 0
let continua = false

function resetar() {
    document.getElementById("divInicioContinue").innerHTML = `<img id="inicio" onclick="inicio()" src=" ./play-solid.svg"></img>`
    continua = false
    iniciou = 0
    s = 0
    m = 0
    h = 0
    d = 0
    document.getElementById("segundos").innerHTML = "00"
    document.getElementById("minutos").innerHTML = "00:"
    document.getElementById("horas").innerHTML = "00:"
    document.getElementById("dias").innerHTML = "0:"
}

function parar() {
    if (iniciou > 0) {
        if (iniciou === 2) {
            iniciou *= -1
            iniciou += 1
            console.log(iniciou);
        } else {
            iniciou *= -1
            console.log(iniciou);
        }
        inicio()
    }

}

function inicio() {
    if (iniciou < 0) {
        document.getElementById("divInicioContinue").innerHTML = `<img id="inicio" onclick="inicio()" src="./arrow-rotate-right-solid.svg"></img>`
        continua = false
        iniciou = 0
        console.log(iniciou);
        console.log(continua);
        return segundos()
    }
    if (iniciou === 0 || iniciou === 1) {
        iniciou += 1
        console.log(iniciou);
    }
    if (iniciou === 1) {
        continua = true
        console.log(iniciou);
        console.log(continua);
        return segundos()
    }
}

function segundos() {
    if (continua === true) {
        if (s < 59) {
            if (s < 9) {
                setTimeout(function () {
                    if (continua === true) {
                        s++
                        document.getElementById("segundos").innerHTML = `0${s}`
                        segundos()
                    }
                }, 997.325);
            } else {
                setTimeout(function () {
                    if (continua === true) {
                        s++
                        document.getElementById("segundos").innerHTML = `${s}`
                        segundos()
                    }
                }, 997.325);
            }
        } else {
            setTimeout(function () {
                if (continua === true) {
                    s++
                    document.getElementById("segundos").innerHTML = `00`
                    s = 0
                    minutos()
                }
            }, 997.325);
        }
    }
}

function minutos() {
    if (m < 59) {
        if (m < 9) {
            m++
            document.getElementById("minutos").innerHTML = `0${m}:`
            segundos()
        } else {
            m++
            document.getElementById("minutos").innerHTML = `${m}:`
            segundos()
        }
    } else {
        document.getElementById("minutos").innerHTML = `00:`
        m = 0
        horas()
    }
}

function horas() {
    if (h < 23) {
        if (h < 9) {
            h++
            document.getElementById("horas").innerHTML = `0${h}:`
            segundos()
        } else {
            h++
            document.getElementById("horas").innerHTML = `${h}:`
            segundos()
        }
    } else {
        h++
        document.getElementById("horas").innerHTML = `00:`
        h = 0
        dias()
    }
}
function dias() {
    d++
    document.getElementById("dias").innerHTML = `${d}:`
    segundos()
}
