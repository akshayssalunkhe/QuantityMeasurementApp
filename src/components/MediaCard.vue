<template>
  <div class="card-container">
    <div class="selection-container">
      <p>CHOOSE TYPE</p>
      <div class="cards">
        <md-content class="length">
          <img src="../assets/Images/scale.png" />
          <p>Length</p>
        </md-content>
        <md-content class="temperature">
          <img src="../assets/Images/thermameter.png" />
          <p>Temperature</p>
        </md-content>
        <md-content class="volume">
          <img src="../assets/Images/beaker.png" />
          <p>Volume</p>
        </md-content>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name:'MediaCard',
}
</script>

<style scoped>
.card-container {
  padding: 16px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  background-color: #F5F6FA;
}

.selection-container {
  padding: 16px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  text-align: left;
}

.cards {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
}

.md-content {
  width: 226px;
  height: 190px;
  margin: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 7px;
  background-color: white;
  filter: grayscale();
}

.length:hover{
  background-color: #edfdf9;
  box-shadow: 0px 3px 6px #00000029;
  border: 1px solid #0ec098;
  color: #0ec098;
  filter: none ;
}

.temperature:hover {
  background-color: #ffeef0;
  box-shadow: 0px 3px 6px #00000029;
  border: 1px solid #fd5160;
  color: #fd5160;
  filter: none ;
}

.volume:hover {
  background-color: #e8ddff;
  box-shadow: 0px 3px 6px #00000029;
  border: 1px solid #7224ff;
  color: #7224ff;
  filter: none ;
}

p {
  margin: 0 24px;
  font: normal normal bold 20px/24px Montserrat;
  text-transform: capitalize;
}

.md-content > p {
  margin-top: 24px;
}
</style>