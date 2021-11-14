<template>  
    <section>
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb mt-1 ms-2">
                <li class="breadcrumb-item"><a href="/">Collaboradores</a></li>
                <li class="breadcrumb-item active" aria-current="page">Cadastrar</li>
            </ol>
        </nav>
        <div class="container custom-container">
            <form class="col-7">
                <div class="mb-3">
                    <label for="name" class="form-label">Nome</label>
                    <input type="text" class="form-control" id="name" name="name" placeholder="Digite seu nome" required>
                </div>
                <div class="mb-3">
                    <label for="cpf" class="form-label">CPF</label>                    
                    <input type="tel" v-mask="'###.###.###-##'" class="form-control" id="cpf" name="name" placeholder="Digite seu cpf" required>
                </div>
                <p>O que você vai trazer?</p>                
                <input type="text" class="form-control mb-2" placeholder="Item 01" name="food" aria-label="First name">
                <input type="text" class="form-control mb-2" placeholder="Item 02" name="food" aria-label="First name">
                <input type="text" class="form-control mb-2" placeholder="Item 03" name="food" aria-label="First name">         
                <button type="submit" class="btn btn-primary">Salvar</button>         
            </form>
        </div>
    </section>
</template>

<script>

export default {
  name: "form",
}

</script>

<style scoped>
.custom-container{
    display: flex;
    justify-content: center;
}

</style>
