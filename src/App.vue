
<template>
  <div id="app">
  <navbar></navbar>
    <div id="nav">
    
      <!---- <router-link to="/">Home</router-link> |
       <router-link to="/about">About</router-link>!-->
    </div>
    <router-view/>
  </div>

</template>

<script>
import navbar from './components/navbar.vue'
export default {
  name: 'component-name',
  // props: {},
  data: function(){
    return {}
  },
  // computed: {},
  methods: {
    // -- Metodos
  },
   components: {
     'navbar':navbar
   },
}
</script>

<style lang="scss">
body{

    background-image: url('./assets/descarga.png');
    background-size:100%;
    background-repeat:no-repeat;
    background-position: 20% 75%;
    width:100%;

}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

