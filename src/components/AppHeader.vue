<template>
  <nav class="navbar navbar-dark bg-dark set-sticky">
    <nav class="navbar navbar-expand-lg navbar-light">
      <a class="navbar-brand" href="#">Vue Learning</a>
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
          <a class="nav-item nav-link active" href="#"
            >Home <span class="sr-only">(current)</span></a
          >
        </div>
      </div>
    </nav>
    <a class="nav-item nav-link" href="#" @click="login">Login</a>
  </nav>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "AppHeader",
  methods: {
    ...mapActions(["login"]),
  },
};
</script>

<style scoped>
.set-sticky {
  position: sticky;
  width: 100%;
  top: 0px;
  z-index:1;
}
</style>