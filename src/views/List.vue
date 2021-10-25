<template>
  <div>
    <h1 class="my-4">Listagem</h1>

    <div>
      <b-button v-b-modal.modal-1>Adicionar Usuários</b-button>

      <b-modal id="modal-1" title="BootstrapVue">
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
          <td>{{ user.name }}</td>
          <td>{{ user.email }}</td>
          <td>
            <b-button variant="info">Editar</b-button>
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
      name: '',
      email:''

    }
  },
  methods:{
    adicionarListagem(){

    },
    addUsuario(){

    this.listagem.push({
      name: this.name,
      email: this.email
    });

    this.name = ''
    this.email = ''

    }
  },
  created(){
    var list = [
      {
        name: 'matheus',
        email: 'matheus@email.com',
        id: 1
      }
    ]

    this.listagem = list;

  }
};
</script>

<style>

</style>
