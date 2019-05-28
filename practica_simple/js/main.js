
new Vue({
    el: 'main',
    data: {
        conectado: '',
        edad: 1,
        dias: ['Lunes', 'Martes', 'Miercoles', 'Jueves','Viernes' ],
        newItem: '',
        listItems:[]
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
        
    }
});