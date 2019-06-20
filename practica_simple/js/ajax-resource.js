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
            this.$http.get('https://randomuser.me/api/?results=500')
                .then((res)=>this.personas=  res.body.results,
                err=>console.log(err))
        }
    }
})