<template>
  <section>
      <nav aria-label="breadcrumb">
            <ol class="breadcrumb mt-1 ms-2">
                <li class="breadcrumb-item active" aria-current="page">Collaboradores</li>
            </ol>
        </nav>
    <div class="custom-container container">
      <div v-for="colaborador of listColaboradores" :key=colaborador.id class="card custom-card me-3 mb-3">
        <div class="card-body">
        <div>
          <h5 class="card-title">{{colaborador.name}}</h5>
          <small>{{colaborador.cpf}}</small>
          <br />
          <span v-for="food of colaborador.foods" :key=food.id>{{food.name}}<br /></span>
          </div>
          <form class="form-custom">    
            <button @click="searchBreakfast(colaborador)" type="button" class="btn btn-primary me-2" data-bs-toggle="modal" data-bs-target="#updateModal">
              Editar
            </button>
            <button @click="deleteBreakfast(colaborador)" class="btn btn-danger">Delete</button>
          </form>
        </div>
      </div>
    </div>
    <!-- Modal -->
    <div class="modal fade" id="updateModal" tabindex="-1" aria-labelledby="updateModal" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">

          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Atualizar cadastro</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>

        <form @submit.prevent="updateBreakfast" action="/"> 
          <div class="modal-body">          
                <div class="mb-3">
                    <label for="name" class="form-label">Nome</label>
                    <input type="text" class="form-control" id="name" name="name" placeholder="Digite seu nome" required v-model="oneColaborador.name">
                </div>
                <div class="mb-3">
                    <label for="cpf" class="form-label">CPF</label>                    
                    <input type="text"  pattern=".{14}" v-mask="'###.###.###-##'" minlength="14" class="form-control" id="cpf" name="name" placeholder="Digite seu cpf" required v-model="oneColaborador.cpf">
                </div>
                <p>O que você vai trazer?</p>
                <div v-for="food of oneColaborador.foods" :key=food.id>         
                    <input type="text" class="form-control mb-2" placeholder="Item" name="name"  v-model="food.name" >
                </div>         
          </div>
          <div class="modal-footer">
             
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
            <button type="submit" class="btn btn-primary" >Salvar Mudanças</button>  
            <br/>
            <small class="ms-3 text-danger">{{error}}</small>              
          </div>
              
        </form>
        </div>
        </div>
      </div>   
  </section>
</template>



<script>

import api from '../services/api'

export default {
  name: "collaboradores",

  data(){
      return{
      listColaboradores: [],   
      oneColaborador:{
        id: '',
        name: '',
        cpf: '',
        foods: [
          {
          name: ''
         },
         {
          name: ''
         },{
          name: ''
         }
         ]                  
      },
      error: ''
    }
  },
  mounted(){
      api.findAllCollaborator().then(response => {
          console.log(response.data)
          this.listColaboradores = (response.data)
          })
      
  },
  methods:{
    searchBreakfast(collaborador){
      this.oneColaborador = collaborador
  },
  updateBreakfast(){
    api.updateBreakfast(this.oneColaborador)
    .catch(e =>{
            this.error = e.response.data.message;
        }).then(error =>{if(error.data == ''){
          window.location.href = "/"
        }})
        
    
  },
  deleteBreakfast(collaborador){
    if(confirm("Deseja deletar?")){
      api.deleteBreakfast(collaborador)
      .catch(e =>{
              this.error = e.response.data.message;
          })}
  }
}}



</script>


<style scoped>
.container {
  margin-top: 20px;
  text-align: center;
}
.custom-container {
  display: flex;
  flex-wrap: wrap;
  
}
.custom-card {
  background: rgba(241, 248, 181, 0.397);
  width: 18%;
  height: 275px;
}
.card-body {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>
