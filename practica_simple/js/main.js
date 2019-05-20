
new Vue({
    el: 'main',
    data: {
        conectado: '',
        edad: 1,
        dias: ['Lunes', 'Martes', 'Miercoles', 'Jueves','Viernes' ],
        newItem: []
    },
    methods:{
        changeValue(event){
            this.conectado=event.target.value;
            console.log(event.target.value);
        }
    }
});