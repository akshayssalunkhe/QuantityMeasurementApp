<template>
  <div>
    <AppBar/>
    <MediaCard/>
    <TextBox/>
  </div>
</template>

<script>

import MediaCard from './components/MediaCard';
import AppBar from './components/AppBar';
import TextBox from './components/TextBox';

export default {
  data(){ 
    return{
    title:'Welcome To Quantity Measurement'

    }
  },components:{
    MediaCard,AppBar,TextBox,

    }
    }
  
</script>

<style scoped>

</style>
