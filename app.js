import {createServer} from 'http';
import https from 'https';

//crear un servidor
let myServer = createServer((req,res)=>{
    let data = "";
    https.get('https://jsonplaceholder.typicode.com/posts', (peticion)=>{
        peticion.on("data", (chunk)=>{
            data += chunk;
        })
        peticion.on("end", ()=>{
            res.end(data)
        })
    })
    /* let datos = "";


    req.on("data", (chuck)=>{
        datos += chuck
    })

    req.on("end", ()=>{
        res.end(datos)
    }) */
    /* res.end("holaaa"); */ //lo que devuelve al quien consulta y el req es lo que recibe
})

//siempre hay que colocar esta configuracion
const config = {
    hostName: "127.7.0.191",
    port: 5016
}

//levantar un servidor
myServer.listen(config, ()=>{
    console.log(`http://${config.hostName}:${config.port}/`)
})