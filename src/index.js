// crear una promesa que se rechase despues de 3 segundos si un numero aleatorio es <0.5 si no que se resuelva

const promesa = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        let numeroAleatorio = Math.random()
        if (numeroAleatorio < 0.5) {
            resolve(`tuvo exito: el numero Aleatorio es ${numeroAleatorio} y es menor que 0.5`)
        } else {
            reject(`tuvo error: el numero Aleatorio es ${numeroAleatorio} y es mayor que 0.5`)
        }
    }, 3000)    
})

promesa().then(resultado => {
    console.log(resultado)
}).catch(error => {
    console.log(error)
})
