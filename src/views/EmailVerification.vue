<template lang="html">
                    <!-- Section Area - Content Central -->
                    <section class="content-info">

                        <div class="container paddings">
                            <!-- Content Text-->
                            <div class="panel-box block-form">
                                <div class="titles text-center">
                                    <h4>Verify Email</h4>

                                        <h4>Step 2/3</h4>
                                </div>

                                <div class="info-panel col-md-9 mx-auto">
                                    <div class="row">
                                        <div class="col-md-12 text-center">
                                            <p class="lead ">An email confirmation code has been sent to you. Supply the code to continue</p>
                                        </div>
                                    </div>

                                    <form class=" form-theme padding-top-mini">
                                        <div class="form-group">
                                            <label class="text-center col-sm-12 mx-auto">OTP</label>
                                            <div class="col-sm-6 mx-auto">
                                                <input type="text"  v-model="otp" class="form-control text-center" placeholder="Enter OTP" y="">
                                            </div>
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
                                      
                                       
                                        
                                        
                                        <div class="form-group d-flex justify-content-center">
                                           
                                            <button v-if="loading"  class="btn btn-primary float-right" disabled> Verifying...</button>

                                                <button v-else @click="verifyEmail()" class="btn btn-primary float-right"> Submit and proceed</button>
                                            
                                        </div>




                                    </form>
                                </div>

                            </div>
                            <!-- End Content Text-->
                        </div>

                        <!-- Newsletter -->
                        <div class="section-newsletter">
                            <div class="container">
                                <div class="row">
                                    <div class="col-md-12">
                                        <div class="text-center">
                                            <h2>Enter your e-mail and <span class="text-resalt">subscribe</span> to our newsletter.</h2>
                                            <p>Duis non lorem porta,  eros sit amet, tempor sem. Donec nunc arcu, semper a tempus et, consequat.</p>
                                        </div>
                                        <form id="newsletterForm" action="php/mailchip/newsletter-subscribe.php">
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <div class="input-group">
                                                        <span class="input-group-addon">
                                                            <i class="fa fa-envelope"></i>
                                                        </span>
                                                        <input class="form-control" placeholder="Your Name" name="name"  type="text" y="y">
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <div class="input-group">
                                                        <span class="input-group-addon">
                                                            <i class="fa fa-envelope"></i>
                                                        </span>
                                                        <input class="form-control" placeholder="Your  Email" name="email"  type="email" y="y">
                                                        <span class="input-group-btn">
                                                            <button class="btn btn-primary" type="submit" name="subscribe" >SIGN UP</button>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                        <div id="result-newsletter"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- End Newsletter -->
                    </section>
                    <!-- End Section Area -  Content Central -->

                    <div class="instagram-btn">
                        <div class="btn-instagram">
                            <i class="fa fa-instagram"></i>
                            FOLLOW
                            <a href="https://www.instagram.com/fifaworldcup/" target="_blank">&#64;fifaworldcup</a>
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

        otp: '',

        loading: false


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

      verifyEmail(){


          this.loading = true


                             this.axios({
                                method: "post",
                                url: process.env.VUE_APP_URL+'/api/verify_otp',
                                data: {
                                    otp: this.otp,
                                },
                                    headers: {
                                    'Access-Control-Allow-Origin': '*',
                                    'Content-type': 'application/json',
                                    'Accept': 'application/json',
                                    'Authorization': 'Bearer ' +localStorage.getItem('user_token')
                                },
                                
                                })
                                .then( (response) =>{
                                    //handle success
                                    if (response.data.user_data) {

                                        
                                    console.log(response)

                                    localStorage.setItem('user_role', response.data.user_data.role)
                                    // localStorage.setItem('user_token', response.data.access_token)
                                    localStorage.setItem('user_data', JSON.stringify(response.data.user_data))

                                    
                                    this.loading = false

                                     toast.success('Email Verified');

                                    return this.$router.push('/profile')
                                        
                                    }else{

                                        console.log(response);

                                        toast.error('Invalid OTP');

                                       this.loading = false

                                    }

                                })
                                .catch( (response)=> {

                                    alert(response);
                                    //handle error
                                    console.log(response);

                                   toast.error('Invalid OTP');


                                   this.loading = false

                                 
                                });



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