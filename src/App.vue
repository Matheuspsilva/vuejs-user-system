<template>
  <div id="app">

    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">Navbar</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active mx-1">
            <router-link to="/">Home</router-link>
          </li>
          <li class="nav-item mx-1">
            <router-link to="/about">About</router-link>
          <li class="nav-item mx-1">
            <router-link to="/lista">Listagem</router-link>
          </li>
        </ul>
      </div>
    </nav>

    <div class="container">
      <router-view/>
    </div>

  </div>
</template>

<script>

export default {
  name: 'App',
  created(){
    this.$http.get('/ping').then((response) => {
      console.log(response)
    })
  }
}
</script>

<style>

</style>
