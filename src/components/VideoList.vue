<template>
    <ul class="list-unstyled">
        <VideoListItems v-for="(video,index) in myVideos" v-bind:video="video" :key="index"></VideoListItems>
    </ul>
</template>

<script>

import VideoListItems from './VideoListItems.vue';

export default {
    name : 'VideoList',
    props : ['myVideos'],
    components : {
        VideoListItems
    }
}
</script>

<style>
  ul{
    width: 75%;
    margin: auto;
  }
</style>