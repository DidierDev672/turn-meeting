import { createRouter, createWebHashHistory} from "vue-router"
import Home from "../page/Home.vue"
import Turn from "../page/Turn.vue"
import MyTurn from "../page/MyTurn.vue"
import SignIn from "../page/SingIn.vue"
import SignUp from "../page/SignUp.vue"

import BasicTurn from "../components/BasicTurn.vue"

const routes = [
    {path: '/', component: Home},
    {path: '/turn', component: Turn},
    {path: '/my-turn', component: MyTurn},
    {path: '/sign-in', component: SignIn},
    {path: '/sign-up', component: SignUp},
    {path: '/basic-solict/:letter', name: 'basic-turn', component: BasicTurn, porps: true}
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router