<template>
    <div id="app">
    <div>
    <button @click.prevent="logout">Salir</button><br><br><br><br>
    </div>
    <div class="añadir">
     <h2 @click.prevent="cambiarvisible">Para añadir Juguete clickeame!</h2><br>
     <div class="formulario" v-if="visible">
     <div class="rows">
      <label>Código</label>
      <label>Nombre</label>
       <label>Stock</label>
        <label>Precio</label>
        </div>
        <div class="column">
        <input v-model="juguete.Codigo"></input><br>
        <input v-model="juguete.Nombre"></input><br>
        <input v-model.number="juguete.Stock"></input><br>
        <input v-model.number="juguete.Precio"></input><br>
        </div>
        </div>
        <b-button v-if="visible" size="lg" @click.prevent="createJuguete" class="mr-2">
          Agregar Juguete
        </b-button>
        <br>
        <br>
        </div>
        <div class="listado">
    <h1 > Listado de juguetes</h1> <br><br>
       
    <!--      <ul>
                <li v-for="juguete in Juguetes" :key="juguete.id">
                <label>stock: </label><span>{{juguete.stock}}</span>
                
         </li>
          
         </ul> -->
         <b-table striped hover :items="Juguetes" :fields="fields">
          <template #cell(Accion)="row">
          <router-link :to="`/juguetes/${row.item.id}`"><i class="fas fa-edit"></i></router-link>
           
        </template>
         </b-table>
               
       <!--  <ul>
                <li v-for="juguete in Juguetes" :key="juguete.id">
                <label>stock: </label><span><router-link :to="`/juguetes/${juguete.id}`">{{juguete.stock}}</router-link></span>
                
                 <router-link :to="`/juguetes/${juguete.id}`"><i class="fas fa-edit"></i></router-link>
                
         </li>
          
         </ul> -->
        
    </div>
    </div>
    
</template>

<script>
import firebase from 'firebase'
import {mapActions,mapState, mapGetters} from 'vuex'
export default {
    name: 'galeria-juguetes',
    // props: {},
    data: function(){
        return {
            visible:false,

            fields:[{
                key:'Codigo',
                sortable:true
            },
            {
                key:'Nombre',
                sortable:true
            },
            {
                key:'Precio',
                sortable:true
            },
            {
                key:'Stock',
                sortable:true
            },
            {
                key:'Accion'
            },
            ],

            juguete:{
                Codigo:"",
                Nombre:"",
                Stock:'',
                Precio:'',
            
            },
        }
    },
    computed: {
        ...mapState(['Juguetes']),
        ...mapGetters(['getJuguete'])
    },
    methods: {
        // -- Metodos
        ...mapActions(['fetchJuguetes', 'addJuguete']),
        createJuguete(){
            if (this.juguete.Codigo==="" || this.juguete.Nombre===""|| this.juguete.Stock===""||this.juguete.Precio===""){
                alert('debe rellenar todos los campos')
            }
           else{
            this.addJuguete(this.juguete).then(()=>{
                alert('Juguete registrado exitosamente')
            this.$router.push('/juguetes')
            }).catch(error=>{
               console.log(error) 
            })
            }
        },
            cambiarvisible(){
                this.visible=!this.visible
            }, 
            logout(){
                firebase.auth().signOut()
                    .then(()=>{
                        this.$router.push('/login')
                    // Sign-out successful.
                    }).catch(function(error) {
                    // An error happened.
                    });
            }
 
    },
    
    // components: {},
    created(){
        this.fetchJuguetes();
        //this.setJuguete();
    }
    }
</script>

<style scoped>
    div{
        margin:auto;
        width:95%;
        font-family:'Chelsea Market', cursive;
    }
    .formulario{
        display:grid;
        grid-template-columns:100px 100px;
        justify-content:center;
        width:300px;
        background-color:lightpink;
        padding: 30px;
        margin-bottom:20px;
        border-radius:50px;
        }
    .rows{
        display:grid;
        grid-template-columns:40px;
        grid-gap:20px
    }
    .column{
     display:grid;
     grid-template-columns:100px;   
     grid-gap:10px
    }
    #app{
        display:flex;
        flex-direction:column;
        justify-content:space-between

    }
    table{
        background-color:lightblue;
        border-radius:20px;
    }
    h2{
        font-family:'Chelsea Market', cursive;
        border:1px dashed black;
        width:400px;
        margin:auto
    }
    i:hover{
        color:white
    }
</style>