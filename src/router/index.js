import { createRouter, createWebHashHistory} from "vue-router"
import Home from "../page/Home.vue"
import Turn from "../page/Turn.vue"
import MyTurn from "../page/MyTurn.vue"
import SignIn from "../page/SingIn.vue"
import SignUp from "../page/SignUp.vue"

const routes = [
    {path: '/', component: Home},
    {path: '/turn', component: Turn},
    {path: '/my-turn', component: MyTurn},
    {path: '/sign-in', component: SignIn},
    {path: '/sign-up', component: SignUp}
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router