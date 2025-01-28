import { createRouter, createWebHistory } from "vue-router"; // step 1 ...
// step 2 : call components ..
import Home from './components/Home.vue';
import About from './components/About.vue';
import Contact from './components/Contact.vue';
import Users from "./components/Users.vue";
// step 3 : create routes ...
const routes = [
    {path:'/',name:'Home',component:Home},
    {path:'/about',name:'about',component:About},
    {path:'/contact',name:'contact',component:Contact},
    {path:'/users',name:'users',component:Users},
];
// step 4: initialize routes ..
const router = createRouter({
    history:createWebHistory(),
    routes
});
// export default ..
export default router;