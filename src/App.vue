<template>
    <div class="container">
        <div>
            <SearchBar  v-on:eventfired="youTubeSearch"> </SearchBar>
        </div>
        <div>
            <VideoList v-bind:myVideos="videos"></VideoList>
        </div>
    </div>
</template>

<script>
import SearchBar from './components/SearchBar.vue'
import VideoList from  './components/VideoList.vue'
import videoData from './data.json'

// import axios from 'axios';
// const API_key = "AIzaSyBjKZrZ6PIFpirNA-HQNPVqrRO9gqSbaRY";

export default {
    name : 'App',
    components : {
        SearchBar,
        VideoList
     },
     data : function(){
       return {
           videos : []
       }
     },
     methods :{
         youTubeSearch : function(searchTerm){
            console.log(searchTerm);
            // axios.get('https://www.googleapis.com/youtube/v3/search',{
            //     params:{
            //         key: API_key,
            //         type: 'video',
            //         part : 'snippet',
            //         q: searchTerm
            //     }
            // }).then(response=>{
            //     this.videos =    response.data.items;
            // })
            console.log(videoData);
            this.videos = videoData.videos;
         } 
     }
}
</script>