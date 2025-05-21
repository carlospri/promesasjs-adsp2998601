//crear una promesa simple con lo que queramos con un tiempo de 8 segundos que diga promesa ejecutada con exito despues de 8 segundos
function newPromesa(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("📁 promesa ejecutada con exito despues de 8 segundos")
        },8000)
    })
}

//rfuncion con async

async function ejecutar(){
    // proceso que intenta ejecutar acciones y si no se puede ejecuta el catch
    try {  
        console.log("⌛ descarga en proceso");
        const respuesta= await descargarArchivo();
        console.log(respuesta)
    } catch (error) {
        console.error("❎ Error en la descarga", error);
    }
}
ejecutar();

