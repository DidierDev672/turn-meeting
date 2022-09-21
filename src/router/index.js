import { createRouter, createWebHashHistory} from "vue-router";
import Home from "../page/Home.vue";
import Turns from "../page/Turns.vue";
import SignIn from "../page/SignIn.vue";
import SignUp from "../page/SignUp.vue";
import EditProfile from "../page/EditProfile.vue";
import MyTurn from "../page/MyTurn.vue";
import AwaitRoom from "../page/AwaitRoom.vue";


const routes = [
    {path: '/', component: Home},
    {path: '/home', component: Home},
    {path: '/turns', component: Turns},
    {path: '/sign-in', component: SignIn},
    {path: '/sign-up', component: SignUp},
    {path: '/edit-profile', component: EditProfile},
    {path: '/my-turns', component: MyTurn},
    {path: '/await-room', component: AwaitRoom}
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router