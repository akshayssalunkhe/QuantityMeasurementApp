<template>
<div class="conversion-container">
    <div class="input-container">
      <md-content>
        <md-field>
          <label>FROM</label>
              <md-input></md-input>
        </md-field>
        <select class="selectfrom">
            <option></option>
        </select>
      </md-content>
      <md-content>
        <md-field>
          <label>TO</label>
          <md-input></md-input>
        </md-field>
        <select class="selectto">
            <ul>
            </ul>
        </select>
      </md-content>
    </div>
  </div>
</template>

<script>
export default {
    name:'TextBox',
}
</script>

<style scoped>
.conversion-container {
  padding: 16px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  background-color: #F5F6FA;
}
.input-container {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  
}
.md-content {
  width: 345px;
  height: 30px;
  margin: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 3px;
  padding: 12px 24px;
}
.md-field {
  margin: 0;
  padding-top: 0px;
  min-height: initial;
}
.md-input {
  font-size: 28px !important;
  font-weight: bold;
  border: solid 1px  #e7dcfe;;
}
.selectfrom,.selectto{
  margin-left: 00px;
  width: 345px;
  height: 200px;
  border: 1px solid #e7dcfe;;
  outline: none;
  padding-top: 15px;
  padding-right: 300px;
  padding-left: 82px;
  font-family: Montserrat, Medium;
  }
</style>
