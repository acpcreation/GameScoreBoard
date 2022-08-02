<template>
  <div id="app">
    <router-view/>

  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
  data(){
    return{

    }
  },
  created() {

  },

  mounted(){
    
  },

  methods:{
    


  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  background-image:
    linear-gradient(to bottom, rgb(255, 255, 255),rgb(196, 212, 255)); 

  /* border-top: 5px solid rgb(20, 20, 20); */
  /* padding-bottom:100px; */
  margin: 0; 
  height: 100vh; 
  overflow: hidden;
}

a{
  cursor: pointer;
}

h1,h2,h3{
  all: none;
  font-weight: 100;
  letter-spacing: 1px;
  color: black;
  margin: 30px;
}

.centerItems{
  width:100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
}

.scrollContainer{
  overflow:scroll;
  height:85%;
  width:100%;
}

.logo{
  width: 20vw;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 10px;
}






</style>
