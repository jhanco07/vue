
new Vue({
    el: 'main',
    data: {
        actividades:[
            {nombre:'Actividad 1', completado: false},
            {nombre:'Actividad 2', completado: false},
            {nombre:'Actividad 3', completado: false},
            {nombre:'Actividad 4', completado: false},
            {nombre:'Actividad 5', completado: false},
            {nombre:'Actividad 6', completado: false},
            {nombre:'Actividad 7', completado: false}
        ],
        tareaNueva: ''
    },
    methods:{
        completarActividad(actividad){
            actividad.completado= !actividad.completado;            
            console.log(actividad.nombre+ " Completada?: "+ ( actividad.completado ? 'Si': 'No'));
        },
        agregarTarea(){
            this.actividades.push({nombre:this.tareaNueva, completado: false})
        }
    },
    computed: {       
        tareasCompletadas(){
            return this.actividades.filter((actividad)=> actividad.completado)
        }
    }

});