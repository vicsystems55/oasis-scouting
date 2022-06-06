<template>
        <div style="height: 100%;" id="layout" class=" ">
            <!-- Header-->
            <header class="header-3">
                <!-- End headerbox-->
                <div class="headerbox">
                    <div class="container">
                        <div class="row justify-content-between align-items-center ">
                            <!-- Logo-->
                            <div class="col col col-xl-12 text-center">
                               <div class="logo">
                                   <a href="index.html" title="Return Home">
                                        <img src="img/logo.png" alt="Logo" class="logo_img">
                                    </a>
                               </div>
                            </div>
                            <!-- End Logo-->

                            <!-- Adds Header-->
                            <div class="col">
                               

                                <!-- Call Nav Menu-->
                                <a class="mobile-nav" href="#mobile-nav"><i class="fa fa-bars"></i></a>
                                <!-- End Call Nav Menu-->
                            </div>
                            <!-- End Adds Header-->
                        </div>
                    </div>
                </div>

                <nav class="mainmenu ">
                    <div class="container ">
                        <!-- Menu-->
                        <ul class="sf-menu" id="menu">

                            <li class="current">

                                <router-link to="/">Home</router-link>
                            
                            </li>

                            <li>

                                <router-link to="/about">About</router-link>
                            
                            </li>

                            <li class="current">

                                <router-link to="/contact">Contact</router-link>
                                
                            </li>

                            <li class="current">

                                <router-link to="/registration">Registration</router-link>
                                
                            </li>

                            

                            
                        </ul>
                        <!-- End Menu-->
                    </div>
                </nav>
                <!-- End headerbox-->
            </header>
            <!-- End Header-->

            <!-- mainmenu-->
     
            <!-- End mainmenu-->

            <!-- Mobile Nav-->
            <div id="mobile-nav">
                <!-- Menu-->
                <ul>
                   

                    <li>
                        <router-link to="/">Home</router-link>
                    </li>

                    <li>
                        <router-link to="/about">About</router-link>
                    </li>
                                        <li>
                        <router-link to="/contact">Contact</router-link>
                    </li>

                    <li>
                        <router-link to="/registration">Registration</router-link>
                    </li>

                   
                </ul>
                <!-- End Menu-->
            </div>
            <!-- End Mobile Nav-->
              
    
                   <div class="c">
                        <router-view></router-view>
                   </div>

               

            <!-- footer 2-->
            <footer id="footer" class="footer-2 align-bottom">
                <!-- Footer Top-->
                <div class="top-footer">

                    <!-- Logo Footer-->
                   <div class="col-lg-12">
                        <div class="logo-footer">
                            <h2>Oasis Football Scouting</h2>
                        </div>
                   </div>
                    <!-- End Logo Footer-->

                    <!-- Social Icons-->
                    <ul class="social">
                        <li>
                            <div>
                                <a href="#" class="facebook">
                                    <i class="fa fa-facebook"></i>
                                </a>
                            </div>
                        </li>
                        <li>
                            <div>
                                <a href="#" class="twitter-icon">
                                    <i class="fa fa-twitter"></i>
                                </a>
                            </div>
                        </li>
                        <li>
                            <div>
                                <a href="#" class="vimeo">
                                    <i class="fa fa-vimeo-square"></i>
                                </a>
                            </div>
                        </li>
                        
                        <li>
                            <div>
                                <a href="#" class="youtube">
                                    <i class="fa fa-youtube"></i>
                                </a>
                            </div>
                        </li>
                    </ul>
                    <!-- End Social Icons-->
                </div>
                <!-- End Footer Top-->

                <!-- Links Footer-->
                <div class="links-footer">
                    <div class="container">
                        <div class="row">

                           <!-- Column Links -->
                            <div class="col-lg-2 col-md-5 col-sm-5">
                                <div class="info-links">
                                   <h5>Organisation</h5>
                                    <ul>
                                        <li><a href="#">Volunteers</a></li>
                                        <li><a href="#">Committees</a></li>
                                        <li><a href="#">Official Documents</a></li>
                                        <li><a href="#">Terms of Service</a></li>
                                    </ul>
                                </div>
                            </div>
                            <!-- End Column Links -->

                            <!-- Column Links -->
                            
                            <!-- End Column Links -->

                            <!-- Column Links -->
                            <div class="col-lg-2 col-md-5 col-sm-5">
                                <div class="info-links">
                                   <h5>Interest Links</h5>
                                    <ul>
                                        <li><a href="#">Statistics</a></li>
                                        <li><a href="#">Teams</a></li>
                                        <li><a href="#">Qualifiers</a></li>
                                        <li><a href="#">Ticketing</a></li>
                                    </ul>
                                </div>
                            </div>
                            <!-- End Column Links -->

                            <!-- Column Links -->
                            
                            <!-- End Column Links -->

                        </div>
                    </div>
                </div>
                <!-- End Links Footer-->


                <!-- footer Down-->
                <div class="footer-down">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12">
                                <p>&copy; 2022 vicSystems . All Rights Reserved</p>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- footer Down-->
            </footer>
            <!-- End footer 2-->
        </div>
</template>