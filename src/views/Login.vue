<template lang="html">
                    <!-- Section Area - Content Central -->
                    <section class="content-info">

                        <div class="container paddings">
                            <!-- Content Text-->
                            <div class="panel-box block-form">
                                <div class="titles text-center">
                                    <h2>Login</h2>

                                 
                                </div>

                                <div class="info-panel col-md-9 mx-auto">
                                    

                                    <div class="form-horizontal form-theme padding-top-mini">
                                        <div class="form-group">
                                            <label class="control-label col-sm-2">Email</label>
                                            <div class="col-sm-10">
                                                <input type="text"  v-model="xemail" class="form-control" placeholder="Your email goes here" y="">
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label class="control-label col-sm-2">Password</label>
                                            <div class="col-sm-10">
                                                <input type="password"  v-model="xpassword" class="form-control" placeholder="Your password goes here" y="">
                                            </div>
                                        </div>
                                       

                                        <div class="form-group ">

                                                <button v-if="loader"  class="btn btn-primary col-md-6 mx-auto" disabled> Signing in... </button>
                                            
                                                <button  v-else @click="login()" class="btn btn-primary col-md-6 mx-auto"> Login </button>
                                            
                                        </div>

                                        <div class="form-group d-none">
                                            <div class="offset-sm-2 col-sm-10">
                                                    <paystack
                                                        buttonClass="'button-class btn btn-primary btn-block col-md-12'"
                                                        buttonText="Proceed to Pay  N 5,000.00"
                                                        :publicKey="publicKey"
                                                        :email="email"
                                                        :amount="amount"
                                                        :reference="reference"
                                                        :onSuccess="onSuccessfulPayment"
                                                        :onCanel="onCancelledPayment"
                                                    ></paystack>
                                            </div>
                                        </div>
                                      
                                       
                                        
                                        

                                    </div>
                                </div>

                            </div>
                            <!-- End Content Text-->
                        </div>

                        <!-- Newsletter -->
                   
                        <!-- End Newsletter -->
                    </section>
                    <!-- End Section Area -  Content Central -->

                    <div class="instagram-btn d-none">
                        <div class="btn-instagram">
                            <i class="fa fa-instagram"></i>
                            FOLLOW
                            <a href="https://www.instagram.com/fifaworldcup/" target="_blank">&#64;oasisfootballscouting</a>
                        </div>
                    </div>

                    <div class="content-instagram">
                        <div id="instafeed"></div>
                    </div>
</template>

 <script>

import paystack from "vue3-paystack";
import { nanoid } from "nanoid"; //if using nanoid

import { useToast } from 'vue-toastification'

const toast = useToast()



export default {
  components: {
    paystack,
  },
  data() {
    return{
        publicKey:'pk_test_a597f2692e20038b6ec420cf207bb552a5389454',
        amount:500000, //Expressed in lowest demonitation, so 1000kobo is equivalent to 10Naira
        email:'somteacodes@gmail.com',
        firstname:'Somtea', //optional field remember to pass as a prop of firstname if needed
        lastname:'Codes', //optional field remember to pass as a prop of lastname if needed


        fullPage: false,

  
        xemail: '',
        xpassword: '',

        loader: false


    }
  },

  // computed
  computed: {
    reference: function() {
        // if using nanoid to generate randomRef
        // comment this out if not using nano id
      return nanoid(15);

    //   you can use plain JS to generate random ref ID, just uncomment this section if you
    /*
        let randomRef = "";
        let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

        for( let i=0; i < 15; i++ )
          text += characters.charAt(Math.floor(Math.random() * characters.length));

        return randomRef;

        */
    },
  },
  // methods
  methods: {


      login(){


          this.loader = true

                this.axios({
                      method: 'post',
                      url: process.env.VUE_APP_URL+'/api/login',
                       data: {
                            email: this.xemail,
                            password: this.xpassword
                        },
                  })
                  .then((response)=>{
                                 console.log(response)

                                    localStorage.setItem('user_role', response.data.user_data.role)
                                    localStorage.setItem('user_token', response.data.access_token)
                                    localStorage.setItem('user_data', JSON.stringify(response.data.user_data))

                                    
                                   

                                     if (localStorage.getItem('user_role') == 'footballer') {

                                         this.loader = false

                                     toast.success('Login Successful');

                                         return this.$router.push('/profile')
                                         
                                     }if (localStorage.getItem('user_role') == 'admin') {

                                          this.loader = false

                                     toast.success('Login Successful');

                                         return this.$router.push('/admin')
                                         
                                     }

                    })
                  .catch((response)=>{
                     this.loader = false

                      toast.error('Name: '+response.data.name);


                      console.log(response) 
                  })  
      },

    onSuccessfulPayment: function(response) {
      console.log(response);
    },
    onCancelledPayment: function() {
      console.log("Payment cancelled by user");
    },
  },
};
</script>