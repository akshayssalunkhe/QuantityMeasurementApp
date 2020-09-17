<template>
  <div class="main">

     <md-card class="len">
      <md-card-media class="lenimg">
        <img src="../assets/Images/scale1.png">
      </md-card-media>
      <p class="lentxt">Length</p>
    </md-card>

    <md-card class="vol">
      <md-card-media class="volimg">
        <img src="../assets/Images/beaker.png">
      </md-card-media>
      <p class="txtvol">Volume</p>
    </md-card>


    <md-card class="temp">
      <md-card-media class="tempimg">
        <img src="../assets/Images/thermameter.png">
      </md-card-media>
      <p class="txttemp">Temperature</p>
    </md-card>
  </div>
</template>

<script>
export default {
  name:'MediaCard'
  
}
</script>

<style scoped>
 
 .len {
    position: absolute;
    margin-top: 1%;
    margin-left: 29%;
    height: 22%;
    width: 12%;
    background: #FFFFFF;
    border: solid black 1px;
    box-shadow: 0px 0px 0px #00000029;
    border-radius: 5%;
    opacity: 1;
  
  }
  .len:hover{
    border: 1px solid #0EC098;
    background: #EDFDF9 0% 0% no-repeat padding-box;
    box-shadow: 0px 3px 6px #00000029;
    opacity: 1;
    text-decoration: #0EC098;
  }
  .lenimg,.tempimg{
     margin-top: 20%;
     margin-left: 43%;
    
  }
  .lentxt{
    margin-top: 10%;
    margin-left: 35%;
    /* width: auto;
    height: auto; */
    font: normal normal bold 15px/19px Montserrat;
    color: #C9C9C9;
    text-transform: capitalize;
    opacity: 1;

  }
 
  .vol{
    position: absolute;
    margin-top: 1%;
    margin-left: 62.59150805270864vw;
    height: 22%;
    width: 12%;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    border-radius: 5%;
    opacity: 1;
    border: 1px solid #FFFFFF;
    box-shadow: 0px 0px 0px #00000029;
  }
  .volimg{margin-top: 20%;
    margin-left: 35%;

  }
.txtvol{
   margin-top: 10%;
    margin-left: 35%;
    /* width: 4.099560761346998vw;
    height: 3.2vh; */
    font: normal normal bold 15px/19px Montserrat;
    color: #C9C9C9;
    text-transform: capitalize;
    opacity: 1;
}
.vol:hover{
    border: 1px solid #7224FF;
    background: #e3d4fd 0% 0% no-repeat padding-box;
    box-shadow: 0px 3px 6px #00000029;
    opacity: 1;
    text-decoration: #0EC098;
  }
  .temp{
    position: absolute;
    margin-top: 1%;
    margin-left: 45.387994143484626vw;
    height: 22%;
    width: 12%;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    border-radius: 5%;
    opacity: 1;
    border: 1px solid #FFFFFF;
    box-shadow: 0px 0px 0px #00000029;
}
.temp:hover{
    border: 1px solid #FD5160;
    background: #FFEEF0 0% 0% no-repeat padding-box;
    box-shadow: 0px 3px 6px #00000029;
    opacity: 1;
}
  .txttemp{    
    margin-top: 2%;
    margin-left: 30%;
    /* width: 7.247437774524158vw;
    height: 3.2vh; */
    font: normal normal bold 15px/19px Montserrat;
    color: #C9C9C9;
    text-transform: capitalize;
    opacity: 1;
  }
</style>