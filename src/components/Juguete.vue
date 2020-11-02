<template>
<div>

    <h1> Juguete</h1>
    <br>
    <div>
             <form>
             <label>Editar</label>
             <input type="checkbox" v-model="edit" > <br>
                <label for="">Código</label>
                <input type="text" v-model="form.Codigo" :disabled="!edit" ><br><br>
                <label for="">Nombre</label>
                <input type="text" v-model="form.Nombre" :disabled="!edit"><br><br>
                <label for="">Precio</label>
                <input type="text" v-model.number="form.Precio" :disabled="!edit"><br><br>
                <label for="">Stock</label>
                <input type="text" v-model.number="form.Stock" :disabled="!edit"><br><br>

                <button @click.prevent="editJuguete" :disabled="!edit">Editar</button>
                <button @click.prevent="destroyJuguete" :disabled="!edit">Eliminar</button>
             </form>

    </div>
    <br>
    <br>
            <router-link to="/juguetes" class="link"><-- VOLVER</router-link>
         </div>
</template>

<script>
import {mapGetters,mapActions} from 'vuex'
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
            ,
            edit:false
        }
    },
    computed: {
        ...mapGetters(['getJuguete']),
       
    },
    methods: {
            async setJuguete() {
            let juguete = this.getJuguete(this.id)
            //  console.log(user)
            
            
            if (juguete === undefined) {
                let resp = await this.fetchIdJuguete(this.id)
                juguete = resp.data()
            }
            
            this.form.Codigo = juguete.Codigo
            this.form.Nombre = juguete.Nombre
            this.form.Precio = juguete.Precio
            this.form.Stock = juguete.Stock
        },
         editJuguete(){
            let juguete = this.form
            juguete.id = this.id
            let res = confirm('¿Está seguro que desea editar los registros?')
            if(!res){
                this.$router.push('/juguetes')
            }
            else{
              
            let response = this.updateJuguete(juguete)
            response.then(()=>{
            console.log('Juguete actualizado')
                this.$router.push("/Juguetes")
            }).catch(error=>{
                console.log(error)
        })
        }
        },
            destroyJuguete(){
            let res = confirm ("¿Estás seguro que deseas eliminar el juguete?")
            if (!res) return 

            this.deleteJuguete(this.id).then(()=>{
                alert("Juguete Eliminado");
                this.$router.push('/juguetes')
            }).catch(error=>{
                console.log(error)
            })
        },
         ...mapActions(['fetchIdJuguete','updateJuguete','deleteJuguete'])
    },
    // components: {},
    created(){
        this.setJuguete()
    }
}
</script>

<style scoped>
    div{
        font-family:'Chelsea Market', cursive;
      
    }
    h1{
          font-size:70px
    }
    .link{
        font-size:40px;
        color:black
    }
</style>