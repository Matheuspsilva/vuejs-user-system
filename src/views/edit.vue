<template>
  <div>
    <h1>Editar Usuário{{ this.$route.params.id }}</h1>

        <div class="row">
          <div class="col-6">
            <b-form-input v-model="name" placeholder="nome"></b-form-input>
          </div>

          <div class="col-6">
            <b-form-input v-model="email" placeholder="email"></b-form-input>
          </div>
        </div>

        <div class="row mt-4">
          <div class="col-12">
            <button @click="addUsuario" class="btn btn-success">Salvar</button>
            <button @click="addUsuario" class="btn btn-danger">Excluir</button>

          </div>
        </div>



  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
