new Vue({
    el: 'main',
    mounted(){
       this.cargarPersonas();
    },
    data: {
        personas:[]
    },
    methods:{
        cargarPersonas(){
            axios.get('https://randomuser.me/api/?results=500')
            .then((res)=>{//console.log(res);
                this.personas= res.data.results;
            }, (err)=> console.log(err))
        }
    }
})