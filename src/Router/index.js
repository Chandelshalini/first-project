import {createWebHistory,createRouter} from 'vue-router'
import SignupForm from '../components/SignupForm.vue';
import LoginForm from '../components/LoginForm.vue';
import ZmsDashboard from '../components/ZmsDashboard.vue';
import HomePage from '../components/HomePage.vue';

const routes = [
   {
    name: 'SignupForm',
    path:'/SignupForm',
    component: SignupForm,
   },
   {
    name: 'LoginForm',
    path:'/LoginForm',
    component: LoginForm,
   },
   {
    name: 'ZmsDashboard',
    path:'/ZmsDashboard',
    component:ZmsDashboard,
   },
   {
    name:'HomePage',
    path:'/',
    component:HomePage,

   },
  
];
const router=createRouter({
    history:createWebHistory(),
    routes
});
export default router;