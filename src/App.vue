<template>
  <div>
    <AppHeader></AppHeader>
    <div class="container">
      <div class="row">
        <div class="col-7">
         <VideoDetails v-bind:videoDetails="details"></VideoDetails>
        </div>
        <div class="col-5">
          <div>
            <SearchBar v-on:eventfired="youTubeSearch"> </SearchBar>
          </div>
          <div>
            <VideoList @dataTunnel2="videoData" v-bind:myVideos="videos"></VideoList>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SearchBar from "./components/SearchBar.vue";
import VideoList from "./components/VideoList.vue";
import AppHeader from "./components/AppHeader.vue";
import VideoDetails from "./components/VideoDetails.vue"
import videoData from "./data.json";

// import axios from 'axios';
// const API_key = "";

export default {
  name: "App",
  components: {
    SearchBar,
    VideoList,
    AppHeader,
    VideoDetails
  },
  data: function () {
    return {
      videos: videoData.videos,
      details : null
    };
  },
  methods: {
    youTubeSearch: function (searchTerm) {
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
      this.videos = videoData.videos.filter((obj) => {
        return obj.title.toLowerCase().indexOf(searchTerm) > -1;
      });
    },
    videoData:function(data){
      this.details = data;
    }
  },
};
</script>