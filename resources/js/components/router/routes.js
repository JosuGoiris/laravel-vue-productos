import Contacto from '../Contacto.vue';
import Mostrar from '../producto/Mostrar.vue';
import Editar from '../producto/Editar.vue';
import Crear from '../producto/Crear.vue';
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        name: 'crear',
        path: '/crearProducto',
        component: Crear,
    },
    {
        name: 'contacto',
        path: '/contacto',
        component: Contacto,
    },
    {
        name: 'mostrar',
        path: '/mostrarProductos',
        component: Mostrar,
    },
    {
        name: 'editar',
        path: '/editarProductos/:id',
        component: Editar,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
