<template>
  <div>
    <h1>Editar Usuário{{ this.$route.params.usuario }}</h1>

        <div class="row">
          <div class="col-6">
            <b-form-input v-model="nome" placeholder="nome"></b-form-input>
          </div>

          <div class="col-6">
            <b-form-input v-model="email" placeholder="email"></b-form-input>
          </div>
        </div>

        <div class="row mt-4">
          <div class="col-12">
            <button @click="update" class="btn btn-primary">Salvar</button>
            <button @click="excluir" class="btn btn-danger">Excluir</button>
            <div v-if="excluido" class="alert alert-success">Excluido com sucesso</div>
          </div>
        </div>

  </div>
</template>

<script>
export default {
  data(){
    return{
      nome: '',
      email: '',
      excluido: false
    }
  },
  methods:{
    getUsuario(){
      this.$http.get(`user/${this.$route.params.usuario}`).then((response)=>{
        this.nome = response.data.nome,
        this.email = response.data.email
      })
    },
    update(){

      var data = {
        nome: this.nome,
        email: this.email
      }

      this.$http.put(`user/${this.$route.params.usuario}`, data).then((response)=>{
        console.log(response)
      })
    },
    excluir(){
      this.$http.delete(`user/${this.$route.params.usuario}`).then((response)=>{
        if(response.data == "success"){
          this.excluido = true;
          setTimeout(()=>{
            this.$router.push('/lista');
          }, 1000)
        }
      })
    }

  },
  created(){
    this.getUsuario();
  }
}
</script>

<style>

</style>
