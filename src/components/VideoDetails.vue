<template>
<div>
 <h1>Details about the course : {{videoDetails.title}}</h1>   
 <hr>
 <iframe width="600" height="400" title="course"
  v-bind:src="`https://www.youtube.com/embed/${videoDetails.src}`">
</iframe>
<p>{{videoDetails.discription}}</p>
  </div>
  
</template>

<script>
export default {
    name: 'VideoDetails',
    props : ['videoDetails'],
}
</script>

<style scoped>

</style>