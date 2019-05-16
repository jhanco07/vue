
new Vue({
    el: 'main',
    data: {
        conectado: ''
    },
    methods:{
        changeValue(event){
            this.conectado=event.target.value;
            console.log(event.target.value);
        }
    }
});