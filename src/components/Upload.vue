<template>
    <div class="drop">
        <input type="file" 
        name="file" id="file"
         @change="uploadImages($event.target.files)"
         multiple
         accept="image/*"
         />
        <span>Drop the element here</span>
    </div>
</template>

<script>
import {mapActions} from 'vuex';

export default {
    name: 'Upload',
    methods: mapActions(['uploadImages'])
}
</script>

<style scoped>

.drop{
    height: 30vh;
    border: 1px dashed black;
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
}

.drop:hover{
    background: #eee;
    cursor: pointer;
}

#file{
    width:100%;
    height: 30vh;
    position: absolute;
    opacity: 0;
}

</style>