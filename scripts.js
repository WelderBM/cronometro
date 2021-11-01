let reiniciar = 0
let s = 0
let m = 0
let h = 0
let d = 0

function segundos() {
    if (s < 59) {
        if (s < 9) {
            s++
            setTimeout(function () {
                document.getElementById("segundos").innerHTML = `0${s}`
                segundos()
            }, 1000);
        } else {
            s++
            setTimeout(function () {
                document.getElementById("segundos").innerHTML = `${s}`
                segundos()
            }, 1000);
        }
    } else {
        s++
        setTimeout(function () {
            document.getElementById("segundos").innerHTML = `00`
            s = 0
            minutos()
        }, 1000);
    }
}

function minutos() {
    if (m < 59) {
        if (m < 9) {
            m++
            document.getElementById("minutos").innerHTML = `0${m}`
            segundos()
        } else {
            m++
            document.getElementById("minutos").innerHTML = `${m}`
            segundos()
        }
    } else {
        m++
        document.getElementById("minutos").innerHTML = `00`
        m = 0
        horas()
    }
}

function horas() {
    if (h < 23) {
        if (h < 9) {
            h++
            document.getElementById("horas").innerHTML = `0${h}`
            minutos()
        } else {
            m++
            document.getElementById("horas").innerHTML = `${h}`
            minutos()
        }
    } else {
        h++
        document.getElementById("horas").innerHTML = `00`
        h = 0
        dias()
    }
}
function dias() {
    d++
    document.getElementById("dias").innerHTML = `${d}`
    segundos()
}
