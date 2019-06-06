
new Vue({
    el: 'main',
    data: {
        mensaje: 'Hola Jhan Luis',
        minimo: 5,
        seleccionGenero: '',
        juegosFiltrados:[],
        juegosFiltrados2:[],
        juegosPredecidos:[],
        busquedaJuego: '',
        textoPredict: '',
        generos:[ {nombre: 'FPS'} , {nombre: 'Estrategia'}, {nombre: 'Deportes'},{nombre: 'Aventura'} ] ,
        juegos:[
            {titulo:'Battlefield 1', genero: 'FPS', puntuacion: 9},
            {titulo:'Civilization VI', genero: 'Estrategia', puntuacion: 10},
            {titulo:'FIFA 9', genero: 'Deportes', puntuacion: 7},
            {titulo:'Nascar', genero: 'Deportes', puntuacion: 8},
            {titulo:'ProEvolution Soccer', genero: 'Deportes', puntuacion: 4},
            {titulo:'Nascar Rumble', genero: 'Deportes', puntuacion: 9},
            {titulo:'Falling Skies', genero: 'Aventura', puntuacion: 6}
    
        ]
    },
    methods:{
        buscarJuegosXgenero(){
           this.juegosFiltrados=[];
           this.juegosFiltrados= this.juegos.filter((juego)=>juego.genero==this.seleccionGenero)
        },
        buscarJuego(){
            this.juegosFiltrados2= this.juegos.filter((juego)=>juego.titulo.toLowerCase().includes(this.busquedaJuego.toLowerCase()))
        },
        predecirTexto(){
           return this.juegosPredecidos= this.juegos.filter((juego)=>juego.titulo.toLowerCase().includes(this.textoPredict.toLowerCase()));
        }
    },
    computed: {
        mensajeAlReves(){
            return  this.mensaje.split('').reverse().join('');
        },
        mejoresJuegos(){
            return this.juegos.filter((juego)=> juego.puntuacion >=  this.minimo)
        }
        
       
    }

});