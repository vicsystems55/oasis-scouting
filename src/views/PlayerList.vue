<template lang="html">
            <div class="section-title d-none" style="background:url(img/slide/1.jpg)">
                <div class="container">
                    <div class="row">
                        <div class="col-md-8">
                            <h1>Players List</h1>
                        </div>

                        <div class="col-md-4">
                            <div class="breadcrumbs">
                                <ul>
                                    <li><a href="index.html">Home</a></li>
                                    <li>Inner Page</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- End Section Title -->

            <!-- Section Area - Content Central -->
            <section class="content-info">

                <!-- Nav Filters -->
                <div class="portfolioFilter">
                    <div class="container">
                        <h5><i class="fa fa-filter" aria-hidden="true"></i>Filter By:</h5>
                        <a href="#" data-filter="*" class="current">Show All</a>
                        <a href="#" data-filter=".forward">Forward</a>
                        <a href="#" data-filter=".defender">Defender</a>
                        <a href="#" data-filter=".midfielder">Midfielder</a>
                        <a href="#" data-filter=".goalkeeper">Goalkeeper</a>
                    </div>
                </div>
                <!-- End Nav Filters -->

                <div  class="">
                    <div v-if="loading"  style="min-height: 300px;" class="container text-center">

                        <div class="pt-5"></div>
                        <h6 class="text-center mt-5">loading...</h6>

                    </div>


                   <div v-else class="container">
                        <div  class="row">
  
                        <div  v-for="player,key in playersData" :key="key" class="col-lg-3 col-md-4 ">

                     
                            <div class="item-player ">
                                <div class="head-player">
                                    <img style="height: 150px; object-fit: cover;" :src="player.avatar" alt="location-team">
                                    <div class="overlay"><a href="single-player.html">+</a></div>
                                </div>
                                <div class="info-player">
                                    <span class="number-player">
                                        2
                                    </span>
                                    <h4>
                                        {{player.name}}
                                        <span>Midfielder</span>
                                    </h4>
                                    <ul>
                                        <li>
                                            <strong>NATIONALITY</strong> <span > {{player.profile?player.profile.nationality:''}} </span>
                                        </li>
                                        <li><strong>MATCHES:</strong> <span>90</span></li>
                                        <li><strong>AGE:</strong> <span>28</span></li>
                                    </ul>
                                </div>
                                <router-link :to="{name:'PlayerDetails',params:{id:player.usercode} }" class="btn">View Player <i class="fa fa-angle-right" aria-hidden="true"></i></router-link>
                            </div>
                        </div>
                  

                    </div>
                   </div>
                </div>

                <!-- Newsletter -->
                
                <!-- End Newsletter -->
            </section>
</template>

<script>



export default {
    data() {
        return {

            playersData: [],
            loading: false
            
        }
    },

    methods: {
        getPlayers(){

            this.loading = true

                this.axios({
                method: "post",
                url: process.env.VUE_APP_URL+'/api/playersData',

                data: {
                    'mode': 'all'
                },
                
                    headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Accept': 'application/json',
                    'Authorization': 'Bearer ' +localStorage.getItem('user_token')
                },
                
                })
                .then( (response) =>{

                    this.loading = false
    
                    // console.log(response)

                    this.playersData = response.data

                    console.log(this.playersData)

                })
                .catch( (response)=> {

                    console.log(response);

                });                                
                                
                               

        }
    },

    mounted() {
        this.getPlayers()
    },
}
</script>