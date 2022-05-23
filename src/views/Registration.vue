<template lang="html">
                    <!-- Section Area - Content Central -->
                    <section class="content-info">

                        <div class="container paddings">
                            <!-- Content Text-->
                            <div class="panel-box block-form">
                                <div class="titles text-center">
                                    <h4>Start Application.</h4>
                                </div>

                                <div class="info-panel">
                                    <div class="row">
                                        <div class="col-md-12 text-center">
                                            <p class="lead ">Complete form below and proceed to payment of N 1,000.00 to compelet application</p>
                                        </div>
                                    </div>

                                    <form class="form-horizontal form-theme padding-top-mini">
                                        <div class="form-group">
                                            <label class="control-label col-sm-2">Fullname</label>
                                            <div class="col-sm-10">
                                                <input type="text"  name="fullname" class="form-control" placeholder="Type your name" y="">
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label class="control-label col-sm-2">Email</label>
                                            <div class="col-sm-10">
                                                <input type="text"  name="email" class="form-control" placeholder="Type your email" y="">
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label class="control-label col-sm-2">Phone</label>
                                            <div class="col-sm-10">
                                                <input type="text"  name="phone" class="form-control" placeholder="Type your phone number" y="">
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label class="control-label col-sm-2">Nationality</label>
                                            <div class="col-sm-10">
                                                <select id="ersex" name="ersex" class="form-control" y="">
                                                    <option value="">Select Country</option>
                                                    <option value="Nigeria">Nigeria</option>
                                                   
                                                </select>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label class="control-label col-sm-2">State</label>
                                            <div class="col-sm-10">
                                                <select id="ersex" name="ersex" class="form-control" y="">
                                                    <option value="">Select State of Origin</option>
                                                    <option value="Abia">Abia</option>
                                                    <option value="Adamawa">Adamawa</option>
                                                    <option value="Akwa Ibom">Akwa Ibom</option>
                                                    <option value="Anambra">Anambra</option>
                                                    <option value="Bauchi">Bauchi</option>
                                                    <option value="Bayelsa">Bayelsa</option>
                                                    <option value="Benue">Benue</option>
                                                    <option value="Borno">Borno</option>
                                                    <option value="Cross River">Cross River</option>
                                                    <option value="Delta">Delta</option>
                                                    <option value="Ebonyi">Ebonyi</option>
                                                    <option value="Edo">Edo</option>
                                                    <option value="Ekiti">Ekiti</option>
                                                    <option value="Enugu">Enugu</option>
                                                    <option value="FCT">Federal Capital Territory</option>
                                                    <option value="Gombe">Gombe</option>
                                                    <option value="Imo">Imo</option>
                                                    <option value="Jigawa">Jigawa</option>
                                                    <option value="Kaduna">Kaduna</option>
                                                    <option value="Kano">Kano</option>
                                                    <option value="Katsina">Katsina</option>
                                                    <option value="Kebbi">Kebbi</option>
                                                    <option value="Kogi">Kogi</option>
                                                    <option value="Kwara">Kwara</option>
                                                    <option value="Lagos">Lagos</option>
                                                    <option value="Nasarawa">Nasarawa</option>
                                                    <option value="Niger">Niger</option>
                                                    <option value="Ogun">Ogun</option>
                                                    <option value="Ondo">Ondo</option>
                                                    <option value="Osun">Osun</option>
                                                    <option value="Oyo">Oyo</option>
                                                    <option value="Plateau">Plateau</option>
                                                    <option value="Rivers">Rivers</option>
                                                    <option value="Sokoto">Sokoto</option>
                                                    <option value="Taraba">Taraba</option>
                                                    <option value="Yobe">Yobe</option>
                                                    <option value="Zamfara">Zamfara</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label class="control-label col-sm-2">Address</label>
                                            <div class="col-sm-10">
                                                <textarea id="eraddr" name="eraddr" class="form-control" placeholder="Type your address"></textarea>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label class="control-label col-sm-2">Date of Birth</label>
                                            <div class="col-sm-10">
                                                <input type="date" id="erdate" name="erdate" class="form-control" y="">
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label class="control-label col-sm-2">Under a contract?</label>
                                            <div class="col-sm-10">
                                                <select id="erage" name="erage" class="form-control" y="">
                                                    <option value="Yes">Yes</option>
                                                    <option value="No">No</option>
                                            
                                                </select>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label class="control-label col-sm-2">Duration (Months):</label>
                                            <div class="col-sm-10">
                                                <input type="number" id="erphone" name="contract_duration" class="form-control" placeholder="Duration of Contract" y="">
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label class="control-label col-sm-2">Any Health Condition?</label>
                                            <div class="col-sm-10">
                                                <select id="erage" name="erage" class="form-control" y="">
                                                    <option value="Yes">Yes</option>
                                                    <option value="No">No</option>
                                            
                                                </select>
                                            </div>
                                        </div>

                                   
                                                 <div class="titles text-center">
                                                    <h4>Guardian Details</h4>
                                                </div>


                                        <div class="form-group">
                                            <label class="control-label col-sm-2">Fullname</label>
                                            <div class="col-sm-10">
                                                <input type="text"  name="fullname" class="form-control" placeholder="Type guardian/parent's fullname" y="">
                                            </div>
                                        </div>

                                        <div class="form-group">
                                            <label class="control-label col-sm-2">Phone</label>
                                            <div class="col-sm-10">
                                                <input type="text"  name="fullname" class="form-control" placeholder="Type guardian/parent's phone" y="">
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label class="control-label col-sm-2">Address</label>
                                            <div class="col-sm-10">
                                                <textarea id="eraddr" name="eraddr" class="form-control" placeholder="Type your guardian/parent's address"></textarea>
                                            </div>
                                        </div>


                                                    


                                        <div class="form-group">
                                            <div class="offset-sm-2 col-sm-10">
                                                    <paystack
                                                        buttonClass="'button-class btn btn-primary btn-block col-md-12'"
                                                        buttonText="Proceed to Payment"
                                                        :publicKey="publicKey"
                                                        :email="email"
                                                        :amount="amount"
                                                        :reference="reference"
                                                        :onSuccess="onSuccessfulPayment"
                                                        :onCanel="onCancelledPayment"
                                                    ></paystack>
                                            </div>
                                        </div>
                                      
                                       
                                        
                                        
                                        <div class="form-group d-none">
                                            <div class="offset-sm-2 col-sm-10">
                                                <input type="submit" value="Proceed to Payment" class="bnt btn-iw">
                                            </div>
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

export default {
  components: {
    paystack,
  },
  data() {
    return{
        publicKey:'pk_test_a597f2692e20038b6ec420cf207bb552a5389454',
        amount:1000, //Expressed in lowest demonitation, so 1000kobo is equivalent to 10Naira
        email:'somteacodes@gmail.com',
        firstname:'Somtea', //optional field remember to pass as a prop of firstname if needed
        lastname:'Codes' //optional field remember to pass as a prop of lastname if needed
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

    onSuccessfulPayment: function(response) {
      console.log(response);
    },
    onCancelledPayment: function() {
      console.log("Payment cancelled by user");
    },
  },
};
</script>