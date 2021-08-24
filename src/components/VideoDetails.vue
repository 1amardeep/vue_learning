<template>
<div>
 <h1>Details about the course : {{videoDetails.title}}</h1>   
 <hr>
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