<template lang="html">
                    <!-- Section Area - Content Central -->
                    <section class="content-info">

                        <div class="container paddings">
                            <!-- Content Text-->
                            <div class="panel-box block-form">
                                <div class="titles text-center">
                                    <h4>Update Profile</h4>
                                </div>

                                <div class="info-panel">
                                    <div class="row">
                                        <div class="col-md-12 text-center">
                                            <p class="lead ">Welcome, {{userData.name}} please proceed.</p>
                                        </div>
                                    </div>

                                    <div class="form-horizontal form-theme padding-top-mini">


                                         <div class="form-group d-flex justify-content-center">

                                            <img 
                                            onclick="document.getElementById('customFile').click()" 
                                            id="previewImg" 
                                            style="height: 200px; width: 200px; object-fit: cover; border-radius: 50%;" 
                                            class="border border-primary" 
                                            :src="playersData.avatar??('https://eu.ui-avatars.com/api/?name='+ userData.name)" >


                                               

                                        </div> 
                                                <div class="text-center d-none">
                                                    <input @change="previewFile4" type="file" ref="file" id="customFile"  >
                                                    
                                                </div>

                                                <div class="form-group d-flex justify-content-center">

                                                      <button v-if="loading3"    class="btn btn-primary" disabled>
                                                        Updating passport...
                                                    </button>

                                                    <button v-else onclick="document.getElementById('customFile').click()"  class="btn btn-primary">
                                                        Upload Avatar
                                                    </button>

                                                </div>

                                        <div class="form-group d-flex justify-content-center">

                                            <video 
                                            onclick="document.getElementById('customFile2').click()" 
                                            id="previewImg2" 
                                            style=" width: 100%; object-fit: cover;" 
                                            class="border border-primary" 
                                            :src="playersData.profile?.video_id??''"
                                            controls
                                            >
                                            </video>


                                               

                                        </div> 
                                                <div class="text-center d-none">
                                                    <input @change="previewFile5" type="file" ref="video" id="customFile2"  >
                                                    
                                                </div>

                                                <div class="form-group d-flex justify-content-center">


                                                      <button v-if="loading2"  class="btn btn-primary" disabled>
                                                        Uploading video please wait...
                                                    </button>

                                                    <button v-else onclick="document.getElementById('customFile2').click()"  class="btn btn-primary">
                                                        Upload Video
                                                    </button>

                                                </div>



                                        
                                        <div class="form-group">
                                            <label class="control-label col-sm-2">Nationality</label>
                                            <div class="col-sm-10">
                                                <select id="ersex" v-model="nationality" class="form-control" y="">
                                                    <option 
                                                    value="" 
                                                    :class="playersData.profile?.nationality?'':'d-none'"
                                                    >{{playersData.profile?.nationality}}</option>
                                                    <option value="">Select Country</option>
                                                    <option :value="Nigeria" >Nigeria</option>
                                                   
                                                </select>
                                            </div>
                                        </div>

                                        <div class="form-group">
                                            <label class="control-label col-sm-2">State</label>
                                            <div class="col-sm-10">
                                                <select id="ersex" v-model="state" class="form-control" y="">
                                                <option 
                                                    value="" 
                                                    :class="playersData.profile?.state?'':'d-none'"
                                                    >{{playersData.profile?.state}}</option>
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
                                                {{playersData.profile?.address}}
                                                <textarea  v-model="address" class="form-control" placeholder="Type your address"></textarea>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label class="control-label col-sm-2">Date of Birth</label>
                                            <div class="col-sm-10">
                                                <input type="date" id="erdate" v-model="dob" class="form-control" y="">
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label class="control-label col-sm-2">Under a contract?</label>
                                            <div class="col-sm-10">
                                                <select id="erage" v-model="under_contract" class="form-control" y="">
                                                <option 
                                                    value="" 
                                                    :class="playersData.profile?.under_contract?'':'d-none'"
                                                    >{{playersData.profile?.under_contract}}</option>

                                                    <option value="Yes">Yes</option>
                                                    <option value="No">No</option>
                                            
                                                </select>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label class="control-label col-sm-2">Duration (Months):</label>
                                            <div class="col-sm-10">
                                                <input type="number" id="erphone" v-model="contract_duration" class="form-control" placeholder="Duration of Contract" y="">
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label class="control-label col-sm-2">Any Health Condition?</label>
                                            <div class="col-sm-10">
                                                <select id="erage" v-model="health_condition" class="form-control" y="">
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
                                                <input type="text"  v-model="guardian_name" class="form-control" placeholder="Type guardian/parent's fullname" y="">
                                            </div>
                                        </div>

                                        <div class="form-group">
                                            <label class="control-label col-sm-2">Phone</label>
                                            <div class="col-sm-10">
                                                <input type="text"  v-model="guardian_phone" class="form-control" placeholder="Type guardian/parent's phone" y="">
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label class="control-label col-sm-2">Address</label>
                                            <div class="col-sm-10">
                                                <textarea id="eraddr" v-model="guardian_address" class="form-control" placeholder="Type your guardian/parent's address"></textarea>
                                            </div>
                                        </div>



                                        <div class="form-group">
                                            <button @click="updateProfile()" class="btn btn-primary">Update Profile</button>
                                        </div>


                                                    


                                        <div class="form-group">
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
                                      
                                       
                                        
                                        
                                        <div class="form-group d-none">
                                            <div class="offset-sm-2 col-sm-10">
                                                <input type="submit" value="Proceed to Payment" class="bnt btn-iw">
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

                    <div class="instagram-btn">
                        <div class="btn-instagram">
                            <i class="fa fa-instagram"></i>
                            FOLLOW
                            <a href="https://www.instagram.com/fifaworldcup/" target="_blank">&#64;oasisfootballscout</a>
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
        lastname:'Codes', 
        
        userData: [],
        
        loading: false,

        loading2: false,


        loading3: false,

        nationality: '',
        state: '',
        address: '',
        dob: '',
        under_contract: '',
        contract_duration: '',
        health_condition: '',
        health_condition_desc: '',
        guardian_name: '',
        guardian_phone: '',
        guardian_address: '',
        video_id: '',
        transaction_id: '',


        video: '',

        avatar: '',

        playersData: []
    


        
  
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


        previewFile4(event){


            console.log(event)

               if(event.target.files.length > 0){
                var src = URL.createObjectURL(event.target.files[0]);
                var preview = document.getElementById("previewImg");
                preview.src = src;
                // preview.style.display = "block";


                this.avatar = this.$refs.file.files[0];

                // console.log(this.avatar)

                    this.loading3 = true


                        let formData = new FormData();

                        formData.append('avatar', this.avatar);
                        formData.append('mode', 'avatar');

                        console.log(formData)


                             this.axios({
                                method: "post",
                                url: process.env.VUE_APP_URL+'/api/update_application',

                                data: formData,
                                
                                
                                        headers: {
                                            'Access-Control-Allow-Origin': '*',
                                            'Content-Type': 'multipart/form-data',
                                            'Accept': 'application/json',
                                            'Authorization': 'Bearer ' +localStorage.getItem('user_token')
                                        },
                                 
                                
                                })
                                .then( (response) =>{
                                    //handle success
                                

                                        
                                    console.log(response)
                                    
                                    this.loading3 = false

                                     toast.success('Passport photograh uploaded Successfully');

                                        
                                    

                                })
                                .catch( (response)=> {

                             
                                    //handle error
                                    console.log(response);

                                   toast.error('Error uploading avatar');


                                   this.loading3 = false

                                 
                                });


            
            }

        },

        previewFile5(event){


            console.log(event)

               if(event.target.files.length > 0){
                var src2 = URL.createObjectURL(event.target.files[0]);
                var preview2 = document.getElementById("previewImg2");
                preview2.src = src2;
                // preview.style.display = "block";


                this.video = this.$refs.video.files[0];

                console.log(this.video)

                    this.loading2 = true


                        let formData = new FormData();

                        formData.append('video', this.video);
                        formData.append('mode', 'video');


                             this.axios({
                                method: "post",
                                url: process.env.VUE_APP_URL+'/api/update_application',

                                data: formData,
                                
                                    headers: {
                                    'Access-Control-Allow-Origin': '*',
                                    'Content-Type': 'multipart/form-data',
                                    'Accept': 'application/json',
                                    'Authorization': 'Bearer ' +localStorage.getItem('user_token')
                                },
                                
                                })
                                .then( (response) =>{
                                    //handle success
                                

                                        
                                    console.log(response)
                                    
                                    this.loading2 = false

                                     toast.success('Video Uploaded Successfully');

                                        
                                    

                                })
                                .catch( (response)=> {

                             
                                    //handle error
                                    console.log(response);

                                   toast.error('Error uploading video');


                                   this.loading2 = false

                                 
                                });


            }

        },


      updateProfile(){


                    this.loading = true


                             this.axios({
                                method: "post",
                                url: process.env.VUE_APP_URL+'/api/update_application',
                                data: {

                                   
                                    nationality: this.nationality,
                                    state: this.state,
                                    address: this.address,
                                    dob: this.dob,
                                    under_contract: this.under_contract,
                                    contract_duration: this.contract_duration,
                                    health_condition: this.health_condition,
                                    health_condition_desc: this.health_condition_desc,
                                    guardian_name: this.guardian_name,
                                    guardian_phone: this.guardian_phone,
                                    guardian_address: this.guardian_address,
                                    video_id: this.video_id,
                                    transaction_id: this.transaction_id,
                                

                                },
                                    headers: {
                                    'Access-Control-Allow-Origin': '*',
                                    'Content-type': 'application/json',
                                    'Accept': 'application/json',
                                    'Authorization': 'Bearer ' +localStorage.getItem('user_token')
                                },
                                
                                })
                                .then( (response) =>{


                                    console.log(response)


                                     toast.success('Application Submitted successfully');
                                    //handle success
                                   

                                })
                                .catch( (response)=> {

                                    alert(response);
                                    //handle error
                                    console.log(response);

                                   toast.error('An error has occured');


                                   this.loading = false

                                 
                                });



      },


      getPlayerData(){


          if (this.$route.params.id) {


                                              this.axios({
                                method: "post",
                                url: process.env.VUE_APP_URL+'/api/playersData',

                                data: {
                                    'player_code': this.$route.params.id
                                },
                                
                                    headers: {
                                    'Access-Control-Allow-Origin': '*',
                                    'Accept': 'application/json',
                                    'Authorization': 'Bearer ' +localStorage.getItem('user_token')
                                },
                                
                                })
                                .then( (response) =>{
                    
                                    // console.log(response)

                                    this.playersData = response.data

                                    this.address = this.playersData.profile?.address
                                    this.dob = this.playersData.profile?.dob

                                

                                    console.log(this.playersData)

                                })
                                .catch( (response)=> {

                                    console.log(response);

                         
                                });


              
          }else{


              
                                this.axios({
                                method: "post",
                                url: process.env.VUE_APP_URL+'/api/playersData',

                                data: {
                                    'player_code': '123'
                                },
                                
                                    headers: {
                                    'Access-Control-Allow-Origin': '*',
                                    'Accept': 'application/json',
                                    'Authorization': 'Bearer ' +localStorage.getItem('user_token')
                                },
                                
                                })
                                .then( (response) =>{
                    
                                    // console.log(response)

                                    this.playersData = response.data

                                    this.address = this.playersData.profile?.address
                                    this.dob = this.playersData.profile?.dob

                                

                                    console.log(this.playersData)

                                })
                                .catch( (response)=> {

                                    console.log(response);

                         
                                });

          }






            },


        onSuccessfulPayment: function(response) {
        console.log(response);

        },
        onCancelledPayment: function() {
        console.log("Payment cancelled by user");
        },
  },

  mounted() {

      this.getPlayerData()
    
        this.userData = JSON.parse(localStorage.getItem('user_data'))
  
},
}
</script>