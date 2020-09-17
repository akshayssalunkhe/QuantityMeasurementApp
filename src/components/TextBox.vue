<template>
<div class="txdiv">
    <div class="ft">
       <a>FROM</a>
        <a id="to">TO</a> 
    </div>
    
    <div class="ft2">   
        <input type="text" id="first">    
        <input type="text" id="second">
    </div>
</div>

</template>

<script>
export default {
    name:'TextBox'
}
</script>

<style scoped>
#first{
    
    padding-top: 1%;
    padding-bottom: 1%;
    padding-left: 5%;
}
#second{
    
    margin-left: 20%;
    padding-top: 1%;
    padding-bottom: 1%;
    padding-left: 5%;
}
#to{
    margin-left: 40%;
}
.ft,.ft2{
    display: flex;
    justify-content:flex-start;
}
.txdiv{
    margin-top:15%;
    padding-left: 30%;
}


</style>
