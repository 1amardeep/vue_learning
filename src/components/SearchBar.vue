<template>
    <div>
        <input type="text" v-on:input="OnInput" placeholder="Search the front end technology stack">
    </div>
</template>

<script>
export default {
    name : 'SearchBar',
    methods:{
      OnInput:function(event){
          this.$emit('eventfired',event.target.value);
      }  
    }
}
</script>

<style scoped>
   input{
       width:75%;
   }
   div{
       text-align: center;
       margin:20px;
   }
</style>