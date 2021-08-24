<template>
  <li class="media my-3" v-on:click="passTheData">
    <img v-bind:src="video.thumbnail" class="mr-3" alt="nothing img avilable" height="90px" width="90px" />
    <div class="media-body">
      <h5 class="mt-0 mb-1">{{video.title}}</h5>
      {{video.discription.slice(0,80).concat("...")}}
    </div>
  </li>
</template>

<script>
export default {
  name: "VideoListItems",
  props: ["video"],
  methods:{
   passTheData: function(){
     this.$emit('dataTunnel',this.video);
   } 
  }
};
</script>

<style>
 li{
    border: 1px solid #e8e0e080;
    cursor: pointer;
 }
 li:hover{
     background: #eee;
 }
</style>