<template>

    <div class="c">
                    <!-- Section Title -->
            <div class="section-title" style="background:url(img/slide/1.jpg)">
                <div class="container">
                    <div class="row">
                        <div class="col-md-8">
                            <h1>Page 404</h1>
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

               <!-- Content Central -->
                <section class="container">
                    <div class="row">
                        <div class="page-error">
                            <h1>404 <i class="fa fa-unlink"></i></h1>
                             <hr class="tall">
                            <p class="lead">We're sorry, but the page you were looking for doesn't exist.</p>
                            <a href="index.html" class="btn btn-lg btn-primary">Return Home</a>
                        </div>
                    </div>
                </section>
                <!-- End Content Central -->

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
    </div>
    
</template>