<template>
  <div class="main">

  </div>
</template>

<script>
export default {
  name: 'WebSocket',
  props: {
    
  },
  components: {

  },
  data(){
    return{
      connection:null
    }
  },

  created() {
    console.log("Enabling WebSocket Connection...")
    this.connection = new WebSocket("wss://echo.websocket.org")

    this.connection.onopen = function(event){
      console.log(event)
      console.log("Successfully connected to websocket...")
    }

    this.connection.onmessage = function(event){
      console.log(event)
    }

    // this.sendMessage("MESSAGE SENDING")
  },

  methods: {
    sendMessage: function(e) {
      console.log(this.connection)
      this.connection.send(e)
    },




  }
   
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>










</style>
