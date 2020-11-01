<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <button @click.prevent="salir">Salir</button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import firebase from 'firebase'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },

data: function(){
    return {}
  },
  // computed: {},
  methods: {
      salir(){
        firebase.auth().signOut()
        .then(()=>{
          this.$router.push('/login')
        }).catch(function (error){  

        });
      }
  },
  // components: {},
}
</script>

  
