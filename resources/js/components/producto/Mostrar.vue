<template>
    <div class="container">
        <div class="row">
            <div class="col-lg-12 mb-4">

                <div class="mt-3 text-center">
                    <h3 class="text-primary">Productos Disponibles</h3>
                </div>

                <router-link :to="{ name: 'crear' }" class="btn btn-success mt-3">
                    <i class="fas fa-plus-circle"></i> Agregar Productos
                </router-link>
            </div>
        </div>

        <div class="album py-5 bg-light">
            <div class="container">
                <div class="row">
                    <div class="col-md-4" v-for="product in producto" :key="product.id">
                        <div class="card" style="width: 18rem;">
                            <div class="card-body">
                                <h5 class="card-title">{{product.nombre}}</h5>
                                <img class="card-img-top" :src="product.imagen" alt="">
                                <p class="card-text">{{product.descripcion}}</p>
                                <p class="card-text">$ {{product.precio}}</p>
                                <router-link class="btn btn-secondary m-2" :to="{name: 'editar', params: {id: product.id}}">
                                Editar
                                </router-link>
                                <button type="button" @click="eliminarProducto(product.id)" class="btn btn-danger">Eliminar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'mostrar-productos',
    data() {
        return {
            producto: []
        }
    },
    mounted() {
        this.mostrar()
    },
    methods: {
        async mostrar() {
            await axios.get('/api/productos')
                .then(response => {
                    this.producto = response.data
                })
                .catch(error => {
                    this.producto = []
                })
        },
        eliminarProducto(id) {
            if (confirm('¿Desea eliminar el producto?')) {
                axios.delete(`/api/productos/${id}`)
                    .then(response => {
                        this.mostrar()
                    })
            }
        }
    }
}
</script>
