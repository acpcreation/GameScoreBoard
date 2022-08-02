<template>
  <div class="main">
    <!-- <b-icon class="returnToHomeButton" icon="arrow-left-circle-fill" font-scale="2" variant="light" @click="openPage('')"></b-icon> -->
    <img class="logo" src="../../public/img/sonatype.png"/>

    <div class="centerItems">
      <div class="scoreCollumn" v-for="i in games" :key="i">
        <h3>{{i}}</h3>
        <table>
          <!-- gamePlayerList(i) -->
          <tr v-for="j in gamePlayerList(i)" :key="j.time">
            <td class="player" >{{j.id}}</td>
            <td class="score">{{j.score}}</td>
          </tr>
        </table>
      </div>
    </div>

    <div class="highScores">
      <p><b>High Scores</b></p>
      <table>
        <tr v-for="j in highScores" :key="j.time">
          <td class="player" >{{j.id}}</td>
          <td class="score">{{j.score}}</td>
        </tr>
      </table>
    </div>

  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'ScoreBoard',
  props: {},
  components: {},

  computed:{

    highScores(){
      var returnPlayers = [];
      for(let i in this.players){
        let found = false
          for(let j in returnPlayers){
            if(this.players[i].id == returnPlayers[j].id){
              returnPlayers[j].score+=this.players[i].score;
              found = true;
            }
          }

          if(found == false){
            returnPlayers.push(this.players[i])
          }
      }
        
      returnPlayers.sort(function(a,b){
        return b.score - a.score;
      });

      returnPlayers = returnPlayers.slice(0, 5)
      return returnPlayers;
    }

  },

  data(){
    return{
      games: [],
      players:[]
    }
  },

  mounted() {

    this.getScores();


  },

  methods: {
    openPage: function(e) {
      this.$router.push("/"+e);
    },
    
    addNewScore: function(e){
      if(!this.games.includes(e.game)){ 
        this.games.push(e.game)
      }

      var newUser = true;
      for(var i in this.players){
        if(i.id == e.id && i.game == e.game){
          i = e;
          newUser = false;
        }
      }
      if(newUser == true){
        this.players.push(e);
      }
      this.sortScores();
    },

    sortScores: function(){
      this.players.sort(function(a,b){
          return b.score - a.score;
        }
      );
    },

    gamePlayerList: function(e){
      var returnPlayers = [];
      for(let i in this.players){
        if(this.players[i].game == e){
          returnPlayers.push(this.players[i])
        }
      }
      return returnPlayers;
    },


    getScores: function(){
      let that = this;
      let errors = 0;
      let axiosInterval = setInterval(function(){
        // console.log("Getting Data..")
        axios.get("http://localhost:3000/getScores/").then((res) => {
          // console.log(res.data.scores);
          for(var i in res.data.scores){
            that.addNewScore(res.data.scores[i])
          }
            
        }, (err) => {
          console.log(err);
          errors++;
          if(errors >= 10){
            clearInterval(axiosInterval)
          }
            
        });
      }, 2000);
    }




  }
   
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main{
  text-align: center;
  padding: 2vw;
  height:100vh;
  background-image: linear-gradient(to bottom, rgba(22, 22, 22, 0.85),rgba(0, 0, 0, 0.85)), 
                    url('../../public/img/background.svg');
}

.centerItems{
 margin-top:20px;
 align-items: stretch;
}

.scoreCollumn{
  background: white;
  color:black;
  border-radius: 10px;
  box-shadow: 0px 6px 6px black;
  padding:20px 0px;
  /* width:vw; */
  margin:10px;
}

h3,p{
  color: black;
}

table{
  margin: 0px auto;
}

.player{
  text-align: left;
  padding-right: 20px;
}

.score{
  text-align: right;
}

.highScores{
  background: white;
  color:black;
  border-radius: 10px;
  box-shadow: 0px 6px 6px black;
  padding:10px 15px;
  position: fixed;
  top:10px;
  right: 10px;
}

.highScores p{
  margin-bottom:2px;
  font-size: 16px;
}











</style>
