<template>
  <div class="main centerItems">
    <div class="pane">
      <b-icon class="closeButton" icon="x-circle-fill" font-scale="2" variant="light" @click="closePane()"></b-icon>
      <p class="title">Welcome to the Sonatype Enablement Escape Room</p>
      <p class="subtext">Watch this video to receive your assignment</p>
      <!-- <video width="100%" id="videoPane" controls>
        <source src="../../public/video/intro.mp4" type="video/mp4">
          Your browser does not support HTML video.
      </video> -->
    </div>
  </div>
</template>

<script>

export default {
  name: 'Welcome',
  props: {

  },
  data(){
    return{
      
    }
  },

  mounted: function(){
    // document.getElementById("videoPane").play();
  },

  methods:{
    closePane: function() {
      this.$emit("closeWelcome");
    },



  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.main{
  position:fixed;
  top:0;
  left:0;
  bottom:0;
  right:0;
  background-color: rgba(22, 22, 22, 0.85);
  z-index: 100;
  overflow:scroll;
}

.pane{
  width:80vw;
  /* height: 40vh; */
  margin-top: 2.5vh;
  background-color: rgba(0, 0, 0, 0.85);  
  border: solid;
  border-color: rgb(235, 251, 255);
  border-width:10px;
  border-radius: 10px;
  text-align: center;  
  padding:0px;
}

.title{
  font-size: 28px;
  margin-top:-30px;
}

.subtext{
  margin-top:-10px;
  margin-bottom: 5px;
  font-size: 20px;
  color: gray;
}


.closeButton{
  /* position:fixed;
  left:21.2vw;
  top:13vh; */

  margin-top: 10px;
  margin-left:-75vw;
  cursor: pointer;
}



</style>
