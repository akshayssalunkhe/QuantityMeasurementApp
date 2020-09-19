<template>
  <div>
    <AppBar/>
    <MediaCard/>
    <TextBox/>
  </div>
</template>

<script>
import AppBar from "./AppBar.vue";
import MediaCard from "./MediaCard.vue";
import TextBox from "./TextBox.vue";

export default {
  name: "Home",
  components: { AppBar, MediaCard, TextBox },
};

</script>

<style>

</style>