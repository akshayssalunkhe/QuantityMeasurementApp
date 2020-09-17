<template>
  <div>
    <AppBar/>
    <Button/>
    <MediaCard/>
    <TextBox/>
  </div>
</template>

<script>
import Button from './components/Button';
import MediaCard from './components/MediaCard';
import AppBar from './components/AppBar';
import TextBox from './components/TextBox';

export default {
  data(){ 
    return{
    title:'Welcome To Quantity Measurement'

    }
  },components:{
    MediaCard,AppBar,Button,TextBox,

    }
    }
  
</script>

<style scoped>

</style>
