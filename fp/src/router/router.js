import List from '@/components/List'
import NewPayment from '@/components/NewPayment'

import { createRouter, createWebHistory } from 'vue-router'
const routes = [
    {
        path: "/",
        component: List,
        props: true
    },
    {
        path: "/add/payment",
        component: NewPayment,
        name: 'newPayment',
    },
    {
        path: "/add/payment/:category?",
        component: NewPayment
    }
]
const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})
export default router;