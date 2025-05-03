console.log("test")
function atualizarRelogio(){
    const agora = new Date();
    const horas = String(agora.getHours()).padStart(2,0)
const minutos = String(agora.getMinutes()).padStart(2,0)
const segundos =  String(agora.getSeconds()).padStart(2,0)
const relogio = horas + ":" + minutos + ":" + segundos


document.getElementById("relogio").textContent = relogio
}

setInterval(atualizarRelogio, 1000)
