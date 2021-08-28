<template>
  <nav class="navbar navbar-dark bg-dark set-sticky">
    <nav class="navbar navbar-expand-lg navbar-light">
      <router-link to="/home" class="navbar-brand" href="#">Vue Learning</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <router-link to="/home" class="nav-item nav-link active" v-if="isLoggedIn" href="#"
            >Home<span class="sr-only">(current)</span></router-link>
        </div>
      </div>
    </nav>
    <nav>
      <a class="nav-items" href="#" @click="login" v-if="!isLoggedIn"
        >Login</a
      >
     <router-link class="nav-items" to="/upload" v-if="isLoggedIn" href="#">Upload</router-link>  
     <router-link class="nav-items" to="/imageGallery" v-if="isLoggedIn" href="#">Image Gallery</router-link>  
    <router-link class="nav-items" to="/aboutUs" v-if="isLoggedIn" href="#">About Us</router-link>
      <a class="nav-items" href="#" @click="logout" v-if="isLoggedIn"
        >Logout</a
      >
    </nav>
  </nav>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "AppHeader",
  computed: mapGetters(["isLoggedIn"]),
  methods: mapActions(["login","logout"]),
};
</script>

<style scoped>
.set-sticky {
  position: sticky;
  width: 100%;
  top: 0px;
  z-index: 1;
}
.nav-items{
  padding: 16px;
  text-decoration: none;
  color:#fff;
}
</style>