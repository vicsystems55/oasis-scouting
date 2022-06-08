<template lang="html">
                    <!-- Section Area - Content Central -->
                    <section class="content-info">

                        <div class="container paddings">
                            <!-- Content Text-->
                            <div class="panel-box block-form">
                                <div class="titles text-center">
                                    <h4>Start Application.</h4>

                                    <h4>Step 1/3</h4>
                                </div>

                                <div class="info-panel col-md-9 mx-auto">
                                    <div class="row">
                                        <div class="col-md-12 text-center">
                                            <p class="lead ">Complete your application by filling the form below then proceed with your payment of N 5,000.00 registration fee.</p>
                                        </div>
                                    </div>

                                    <div class="form-horizontal form-theme padding-top-mini">
                                        <div class="form-group">
                                            <label class="control-label col-sm-2">Fullname</label>
                                            <div class="col-sm-10">
                                                <input type="text"  v-model="xname" class="form-control" placeholder="Type your name" y="">
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label class="control-label col-sm-2">Email</label>
                                            <div class="col-sm-10">
                                                <input type="text"  v-model="xemail" class="form-control" placeholder="Type your email" y="">
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label class="control-label col-sm-2">Phone</label>
                                            <div class="col-sm-10">
                                                <input type="text"  v-model="xphone" class="form-control" placeholder="Type your phone number" y="">
                                            </div>
                                        </div>

                                        <div class="form-group d-flex justify-content-end">

                                                <button v-if="loading"  class="btn btn-primary float-right" disabled> Processing... </button>
                                            
                                                <button  v-else @click="register()" class="btn btn-primary float-right"> Next Step </button>
                                            
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
                        <div class="section-newsletter d-none">
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

        xname: '',
        xemail: '',
        xphone: '',

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


      register(){


          this.loading  = true



        // let loader = this.$loading.show({
        //     // Optional parameters
        //     container: this.fullPage ? null : this.$refs.formContainer,
        //     canCancel: true,
        //     onCancel: this.onCancel,
        //     color: '#6CC3EC',
        // });


          this.axios({
                method: "post",
                url: process.env.VUE_APP_URL+'/api/register',
                data: {
                    name: this.xname,
                    // username: this.username,
                    email: this.xemail,
                    // referrer_code: this.referrer_code,
                    password: nanoid(8)
                },
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Content-type': 'application/json',
                    'Accept': 'application/json',
                },
                
                })
                .then( (response) =>{
                    //handle success

                    console.log(response)

                    localStorage.setItem('user_role', response.data.user_data.role)
                    localStorage.setItem('user_token', response.data.access_token)
                    localStorage.setItem('user_data', JSON.stringify(response.data.user_data))

                    
                    // loader.hide()

                    this.loading = false

                        toast.success('Security Code Sent');

                    return this.$router.push('/email-verification')

                
                })
                .catch( (response)=> {

                    // alert(response);
                    //handle error
                    console.log(response);

                    toast.error('An error has occured, please try again');

                    // loader.hide()

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