<template>
  <section>
      <nav aria-label="breadcrumb">
            <ol class="breadcrumb mt-1 ms-2">
                <li class="breadcrumb-item active" aria-current="page">Collaboradores</li>
            </ol>
        </nav>
    <div class="custom-container container">
      <div class="card custom-card me-3 mb-3">
        <div class="card-body">
          <h5 class="card-title">Carlos</h5>
          <small>100.100.100-10</small>
          <br />
          <span>Pão</span>
          <form class="form-custom">
            <button type="button" class="btn btn-primary me-2" data-bs-toggle="modal" data-bs-target="#updateModal">
              Editar
            </button>
            <button class="btn btn-danger">Delete</button>
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

        <form>
          <div class="modal-body">            
                <div class="mb-3">
                    <label for="name" class="form-label">Nome</label>
                    <input type="text" class="form-control" id="name" name="name" placeholder="Digite seu nome" required>
                </div>
                <p>Items a serem atualizados</p>                
                <input type="text" class="form-control mb-2" placeholder="Item 01" name="food" aria-label="First name">
                <input type="text" class="form-control mb-2" placeholder="Item 02" name="food" aria-label="First name">
                <input type="text" class="form-control" placeholder="Item 03" name="food" aria-label="First name">              
          </div>
          
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
            <button type="submit" class="btn btn-primary">Salvar Mudanças</button>            
          </div>

        </form>
        </div>
        </div>
      </div>   
  </section>
</template>

<script>
export default {
  name: "collaboradores",
}

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
  width: 20%;
  height: 275px;
}
.form-custom {
  padding-top: 100px;
}
</style>
