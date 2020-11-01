<template>
   <div>
   <form>
   <div class="container">
   <h2>Login</h2>
   <label>Usuario</label>
   <input type="text" placeholder="usuario" v-model="user"><br>
   <label>Contraseña</label>
   <input type="password" v-model="password"><br>
   <button @click.prevent='login'>Ingresar</button>
   </div>
   </form>
   <h1>
   Bienvenido a Otto Klauss
   </h1>
   </div>
</template>

<script>
import firebase from 'firebase'
export default {
    name: 'formulario',
    // props: {},
    data: function(){
        return {
            user:'',
            password:'',
        }
    },
    // computed: {},
    methods: {
        login(){
            console.log(firebase.auth)
            console.log(firebase.default.auth)
            firebase.auth().signInWithEmailAndPassword(this.user, this.password)
            .then(()=>{
                this.$router.push('/home')
            })
            .catch(function (error) {
                let errorCode = error.code;
                let errorMessage = error.message
                console.log(errorCode, errorMessage)
              })
        }
    },
    // components: {},
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Chelsea+Market&display=swap');
.container{
    margin-left:20%;
    margin-right:20%;
    margin-top:15%;
    display: grid;
    justify-content:center;
    grid-gap:10px;
    text-align:center;
  
}
form{
display:flex;
flex-direction:column;
font-family: 'Chelsea Market', cursive;
height:500px;
background-color:white;
background-image:url('../assets/dino.jpg');
background-size:100px;
background-repeat:no-repeat;
background-position:bottom;
width:500px;
margin-left:auto;
margin-right:auto;
margin-top:100px;
border:3px solid black;
border-radius:270px;
}
h1{
    margin-top:200px;
    font-family: 'Chelsea Market', cursive;
    font-size:100px;
}

</style>