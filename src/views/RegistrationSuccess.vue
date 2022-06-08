<template>

        <div class="c">
                 
              
            <lottie-player 
            
            src="https://assets4.lottiefiles.com/packages/lf20_htdr8jgg.json"  
            background="transparent"  
            speed="1"  
            style="min-width: 300px; height: 400px;"  
            loop  
            autoplay></lottie-player>

            <div class="e py-3 px-md-3">
                        
                <h2 class="text-center">Application Successful!!</h2>
          

        
            </div>

            <div class="c text-center py-1">
                 <router-link to="/user/home" class=" btn btn-warning btn-lg">My Dashboard</router-link>
  
            </div>

          </div>
    
</template>
<script>
export default {
    data() {
        return {
            
        }
    },

    methods: {
        getUserData(){

            


        }
    },

            mounted() {


                this.getUserData()



               if (localStorage.getItem('reloaded')) {
              // The page was just reloaded. Clear the value from local storage
              // so that it will reload the next time this page is visited.
              localStorage.removeItem('reloaded');

               
            } else {
                // Set a flag so that we know not to reload the page twice.
                localStorage.setItem('reloaded', '1');
            
               location.reload();
               
           

            }
          
              
            // this.$router.go() 
        },
}
</script>