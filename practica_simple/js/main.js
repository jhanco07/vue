
new Vue({
    el: 'main',
    data: {
        conectado: '',
        edad: 1,
        dias: ['Lunes', 'Martes', 'Miercoles', 'Jueves','Viernes' ],
        newItem: '',
        listItems:[], 
        mensaje: 'Hola Jhan Luis',
        actividades: [
            {nombre:'Actividad 1', activo: true},
            {nombre:'Actividad 2', activo: true},
            {nombre:'Actividad 3', activo: false},
            {nombre:'Actividad 4', activo: true},
            {nombre:'Actividad 5', activo: true},
            {nombre:'Actividad 6', activo: true},
            {nombre:'Actividad 7', activo: true}
        ]
    },
    methods:{
        changeValue(event){
            this.conectado=event.target.value;
            console.log(event.target.value);
        },
        addItemMethod(){
            this.listItems.unshift(this.newItem);   
            this.newItem='';
        },
        alerta(){
            alert('¡Ingresar datos!');
        }
    },
    computed: {
        mensajeAlReves(){
            return  this.mensaje.split('').reverse().join('');
        },
        listaFiltrada(){
           return this.actividades.filter((tarea)=>{
               return tarea.activo
            });
        }
    }

});