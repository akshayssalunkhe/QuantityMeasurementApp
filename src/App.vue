<template>
  <div>
    <AppBar/>
    <MediaCard/>
  </div>
</template>

<script>

import MediaCard from './components/MediaCard';
import AppBar from './components/AppBar';

export default {
  data(){ 
    return{
    title:'Welcome To Quantity Measurement'

    }
  },components:{
    MediaCard,AppBar

    }
    }
  
</script>

<style scoped>
.tdiv{
  padding-top: 1%;
  padding-bottom: 1%;
  text-align: center;  
  background-color:#446Dff ;

}
#ti{
font-size:x-large;
color:white;
}
.main2{
  background-color: #F5F6FA;
  height: 500px;
}
.buttondiv{
  text-align: center;
  padding-top: 5%;
  padding-right: 37%;
  background-color:#F5F6FA ;
  }
#chbutton{
  background-color:#F5F6FA ;
  border: white;
  

}
.img{
  width:180px; 
  height:160px;

}
/* .box{
  display:flex;
  justify-content: center;
} */
.container { 
      display:inline-flex;
      /* width:100%; */
			max-height: 250px;
			background-color:#F5F6FA;
      margin-top: 1%; 
			/* padding-top:5%;  */
			padding-left:20%; 
			/* padding-right:27%;  */
      /* padding-bottom: 2%; */
		} 
		#st-box { 
			float:left; 
			width:180px; 
			height:160px; 
			background-color:white;
      border-radius: 5%;
      margin-left: 1%;
      margin-right: 1%;
 
		} 
    #st-box:hover{
      background-color:#EDFDF9;
      border:solid #446Dff;
    }
    #nd-box { 
			float:left; 
			width:180px; 
			height:160px; 
			background-color:white;
      border-radius: 5%;
      margin-left:1%;
      margin-right:1%;;
 
		}
    #nd-box:hover{
      background-color:#EDFDF9;
      border:solid #446Dff;
    }
    #rd-box { 
			float:right; 
			width:180px; 
			height:160px; 
			background-color:white;
      border-radius: 5%;
      margin-left: 1%;
      margin-right: 1%;
		}
    #rd-box:hover{
      background-color:#EDFDF9;
      border:solid #446Dff;
    }
.ft{
  margin-top: 1%;
  display: flex;
  justify-content:space-around;

}
 #fr{
  margin-left: 24%;
}
#to{
  margin-right: 25%;
  }
</style>
