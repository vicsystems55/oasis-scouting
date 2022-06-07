import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Layout from '../views/Layout.vue'
import About from '../views/About.vue'
import Contact from '../views/Contact.vue'
import Error404 from '../views/404.vue'
import PlayerList from '../views/PlayerList.vue'
import Registration from '../views/Registration.vue'
import Admin from '../views/PlayerList.vue'
import Login from '../views/Login.vue'
import EmailVerification from '../views/EmailVerification.vue'
import Profile from '../views/Profile.vue'
import RegistrationSuccess from '../views/RegistrationSuccess.vue'

const routes = [

  {
    path: '/',
    name: 'Layoutx',
    component: Layout,
      children:[
        {
          path: '',
          name: 'Home',
          component: Home,
          beforeEnter: () => {


            // if (localStorage.getItem('reloaded')) {
            //   // The page was just reloaded. Clear the value from local storage
            //   // so that it will reload the next time this page is visited.
            //   localStorage.removeItem('reloaded');
            // } else {
            //     // Set a flag so that we know not to reload the page twice.
            //     localStorage.setItem('reloaded', '1');
            
            //     alert('once')

            // }

            

            // location.reload()
            // ...
                // if (localStorage.getItem('user_role') == '6') {
                //     console.log('yes')
                  
                // }else{
                //     console.log('no board')
                //     router.push({
                //         path: '/login',
                //         replace: true
                //       });
                  
        
                // }
            },

          },
      
        {
          path: 'about',
          name: 'About',
          component: About
        },
      
        {
          path: 'contact',
          name: 'Contact',
          component: Contact
        },

        {
          path: 'player-list',
          name: 'PlayerList',
          component: PlayerList
        },
      
        {
          path: 'registration',
          name: 'Registration',
          component: Registration
        },


        {
          path: 'admin',
          name: 'Admin',
          component: Admin
        },

        {
          path: 'login',
          name: 'Login',
          component: Login
        },

        {
          path: 'email-verification',
          name: 'EmailVerification',
          component: EmailVerification
        },


        {
          path: 'profile',
          name: 'Profile',
          component: Profile
        },

        {
          path: '/admin/player-details/:id',
          name: 'PlayerDetails',
          component: Profile
        },
      
        {
          path: 'registration-success',
          name: 'RegistrationSuccess',
          component: RegistrationSuccess
        },

        {
          path: '/:pathMatch(.*)*',
          name: 'error-404',
          component: Error404
        },

      ]
  },


  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
