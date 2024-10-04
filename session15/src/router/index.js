import { createWebHistory, createRouter } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ContactView from '../views/ContactView.vue'
import UserDetail from '@/views/UserDetail.vue'
import Product from '@/views/Product.vue'
import ProductReview from "@/views/ProductReview.vue"

const routes = [
    { path: '/', component: HomeView },
    { path: '/about', name: "about", component: AboutView },
    { path: '/contact', component: ContactView },
    { path: "/user/:id", component: UserDetail },
    {
        path: "/product",
        component: Product,
        children: [
            {
                path: "review",
                name: "product-review",
                component: ProductReview,
            }
        ]
    }
]
export const router = createRouter({
    history: createWebHistory(),
    routes,
})