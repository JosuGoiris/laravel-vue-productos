<template>
    <div class="container mt-4">
        <form v-on:submit.prevent="agregarProducto">
            <div class="mb-3">
                <label for="name" class="form-label">Nombre del Producto</label>
                <input type="text" class="form-control" id="name" v-model="producto.nombre">
            </div>
            <div class="mb-3">
                <label for="description" class="form-label">Descripción</label>
                <input type="text" class="form-control" id="description" v-model="producto.descripcion">
            </div>
            <div class="mb-3">
                <label class="form-label" for="price">Precio</label>
                <input type="text" class="form-control" id="price" v-model="producto.precio">
            </div>
            <button type="submit" class="btn btn-primary">Guardar</button>
        </form>
        {{producto}}
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'FormComponent',
    data() {
        return {
            producto: {
                nombre: '',
                descripcion: '',
                precio: 0.0,
            }
        }
    },
    methods: {
        async agregarProducto() {
            await axios.post('/api/productos', this.producto)
            .then(response => {
                this.$router.push({name: 'mostrar'})
            })
            .catch(error => {
                console.log(error)
            })
        }
    }
}
</script>
