<template>
        <div id="layout">
            <!-- Header-->
            <header>
                <!-- End headerbox-->
                <div class="headerbox">
                    <div class="container">
                        <div class="row justify-content-between align-items-center">
                            <!-- Logo-->
                            <div class="col">
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
                <!-- End headerbox-->
            </header>
            <!-- End Header-->

            <!-- mainmenu-->
            <nav class="mainmenu">
                <div class="container">
                    <!-- Menu-->
                    <ul class="sf-menu" id="menu">

                        <li class="current">

                            <a href="/">Home</a>
                          
                        </li>

                        <li>

                            <a href="/about">About</a>
                          
                        </li>

                        <li class="current">

                            <a href="/contact">Contact</a>
                            
                        </li>

                        <li class="current">

                            <a href="/registration">Registration</a>
                            
                        </li>

                        

                        
                    </ul>
                    <!-- End Menu-->
                </div>
            </nav>
            <!-- End mainmenu-->

            <!-- Mobile Nav-->
            <div id="mobile-nav">
                <!-- Menu-->
                <ul>
                   

                    <li>
                        <a href="/">Home</a>
                    </li>

                    <li>
                        <a href="/about">About</a>
                    </li>
                                        <li>
                        <a href="/contact">Contact</a>
                    </li>

                    <li>
                        <a href="/registration">Registration</a>
                    </li>

                   
                </ul>
                <!-- End Menu-->
            </div>
            <!-- End Mobile Nav-->

                    <router-view></router-view>

            <!-- footer 2-->
            <footer id="footer" class="footer-2">
                <!-- Footer Top-->
                <div class="top-footer">

                    <!-- Logo Footer-->
                   <div class="col-lg-12">
                        <div class="logo-footer">
                            <h2>Sports Cup</h2>
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
                                <a href="#" class="google-plus">
                                    <i class="fa fa-google-plus"></i>
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
                            <div class="col-lg-4 col-md-7 col-sm-7">
                                <div class="info-links">
                                   <h5>Groups</h5>
                                    <ul class="columns">
                                        <li><a href="#">GROUP A</a></li>
                                        <li><a href="#">GROUP B</a></li>
                                        <li><a href="#">GROUP C</a></li>
                                        <li><a href="#">GROUP D</a></li>
                                        <li><a href="#">GROUP E</a></li>
                                        <li><a href="#">GROUP F</a></li>
                                        <li><a href="#">GROUP G</a></li>
                                        <li><a href="#">GROUP H</a></li>
                                    </ul>
                                </div>
                            </div>
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
                            <div class="col-lg-4 col-md-7 col-sm-7">
                                <div class="info-links">
                                   <h5>Organisation</h5>
                                    <ul class="columns">
                                        <li><a href="#">NIZHNY NOVGOROD</a></li>
                                        <li><a href="#">SAINT PETERSBURG</a></li>
                                        <li><a href="#">EKATERINBURG</a></li>
                                        <li><a href="#">MOSCOW</a></li>
                                        <li><a href="#">KAZAN</a></li>
                                        <li><a href="#">KALININGRAD</a></li>
                                        <li><a href="#">VOLGOGRAD</a></li>
                                        <li><a href="#">ROSTOV-ON-DON</a></li>
                                    </ul>
                                </div>
                            </div>
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
                                <p>&copy; 2018 SportsCup . All Rights Reserved</p>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- footer Down-->
            </footer>
            <!-- End footer 2-->
        </div>
</template>