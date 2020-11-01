<template>
<div>
    <h1> Juguete</h1>
    <br>
    <div>
             <form>
                <label for="">Código</label>
                <input type="text" v-model="form.Codigo"><br><br>
                <label for="">Nombre</label>
                <input type="text" v-model="form.Nombre"><br><br>
                <label for="">Precio</label>
                <input type="text" v-model.number="form.Precio"><br><br>
                <label for="">Stock</label>
                <input type="text" v-model.number="form.Stock"><br><br>
             </form>

    </div>
         </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
    name: 'juguete-component',
    props: ['id'],
    data: function(){
        return {
            form:{
                Codigo:"",
                Nombre:"",
                Stock:"",
                Precio:"",
            }
        }
    },
    computed: {
        ...mapGetters(['getJuguete'])
    },
    methods: {
        // -- Metodos
    },
    // components: {},
}
</script>

<style scoped>
    div{
        font-family:'Chelsea Market', cursive;
      
    }
    h1{
          font-size:70px
    }
</style>