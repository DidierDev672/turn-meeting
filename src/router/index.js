import { createRouter, createWebHashHistory} from "vue-router";
import Home from "../page/Home.vue";
import Turns from "../page/Turns.vue";
import SignIn from "../page/SignIn.vue";
import SignUp from "../page/SignUp.vue";


const routes = [
    {path: '/', component: Home},
    {path: '/home', component: Home},
    {path: '/turns', component: Turns},
    {path: '/sign-in', component: SignIn},
    {path: '/sign-up', component: SignUp}
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router