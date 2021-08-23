<template>
  <li class="media my-3">
    <img v-bind:src="video.thumbnail" class="mr-3" alt="nothing img avilable" />
    <div class="media-body">
      <h5 class="mt-0 mb-1">{{video.title}}</h5>
      {{video.discription}}
    </div>
  </li>
</template>

<script>
export default {
  name: "VideoListItems",
  props: ["video"],
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