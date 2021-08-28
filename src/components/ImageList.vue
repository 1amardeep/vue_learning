<template>
    <div id="containers">
        <img v-for="(image,index) in allImages" :key="index"  :src="image.link" alt=""/>
    </div>
</template>

<script>
import {mapActions,mapGetters} from 'vuex';
export default {
    name : 'ImageList',
    computed: mapGetters(['allImages']),
    methods : mapActions(['fetchImages']),
    created(){
        this.fetchImages();
    }
}
</script>

<style scoped>
   #containers{
       column-count: 3;
       column-gap: 0;
   }
   img{
       max-width: 100%;
       padding:5px;
   }
</style>