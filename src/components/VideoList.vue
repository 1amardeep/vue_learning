<template>
    <ul class="list-unstyled">
        <VideoListItems @dataTunnel="passtheData2" v-for="(video,index) in myVideos" v-bind:video="video" :key="index"></VideoListItems>
    </ul>
</template>

<script>

import VideoListItems from './VideoListItems.vue';

export default {
    name : 'VideoList',
    props : ['myVideos'],
    components : {
        VideoListItems
    },
    methods:{
      passtheData2:function(data){
        this.$emit('dataTunnel2',data);
      }
    }
}
</script>

<style>
  ul{
    width: 75%;
    margin: auto;
  }
</style>