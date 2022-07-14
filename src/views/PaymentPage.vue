<template lang="html">


    <div class="container">

        <div style="height: 430px;" class="col-md-6 mx-auto py-5">


            

            <h1 class="display-4 py-5">Complete Application</h1>
    
            <div class="form-group">
                <div class="col-md-6 mx-auto">
                        <paystack
                        id="payButton"
                            buttonClass="'button-class btn btn-primary btn-block col-md-12'"
                            buttonText="Pay  N 5, 500.00"
                            :publicKey="publicKey"
                            :email="userData.email"
                            :amount="amount"
                            :reference="reference"
                            :onSuccess="onSuccessfulPayment"
                            :onCanel="onCancelledPayment"
                        ></paystack>
                </div>
            </div>
    
    
        </div>
        
    </div>



    
</template>
<script>
import paystack from "vue3-paystack";
import { nanoid } from "nanoid"; //if using nanoid


export default {
  components: {
    paystack,
  },
    data() {
        return {
        publicKey:'pk_test_a597f2692e20038b6ec420cf207bb552a5389454',
        amount:550000, //Expressed in lowest demonitation, so 1000kobo is equivalent to 10Naira
        email:'somteacodes@gmail.com',
        firstname:'Somtea', //optional field remember to pass as a prop of firstname if needed
        lastname:'Codes', 

        userData: []
            
        }
    },
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
  methods: {

        onSuccessfulPayment: function(response) {
        console.log(response);

         return this.$router.push('/registration-success')

        },
        onCancelledPayment: function() {
        console.log("Payment cancelled by user");
        },
  },

  mounted() {
      this.userData = JSON.parse(localStorage.getItem('user_data'))
  },
}
</script>