<template>
  <div>
    <h1 class="my-4">Listagem</h1>

    <div>
      <b-button v-b-modal.modal-1>Adicionar Usuários</b-button>

      <b-modal id="modal-1" title="Cadastro de usuário" hide-footer>
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
            <button @click="addUsuario" class="btn btn-primary">Salvar</button>
          </div>
        </div>

      </b-modal>
    </div>

    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Nome</th>
          <th scope="col">Email</th>
          <th scope="col">Ações</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in listagem" :key="user.id">
          <th scope="row">{{ user.id }}</th>
          <td>{{ user.nome }}</td>
          <td>{{ user.email }}</td>
          <td>
            <router-link :to="{ name: 'editar', params: { usuario: user.id }}">
              <b-button variant="primary">Editar</b-button>
            </router-link>
          </td>
        </tr>
      </tbody>
  </table>
  </div>
</template>

<script>
export default {
  data(){
    return {
      listagem: [],
      nome: '',
      email:''

    }
  },
  methods:{
    getUsuarios(){
      this.$http.get('/user').then((response) => {
        this.listagem = response.data;
      })
    },
    addUsuario(){

    var data = {
      nome: this.nome,
      email: this.email
    }

    this.$http.post('/user', data).then((response)=>{
      console.log(response)
    })

    this.listagem.push(data);

    this.nome = ''
    this.email = ''

    }
  },
  created(){

    this.getUsuarios();

  }
};
</script>

<style>

</style>
