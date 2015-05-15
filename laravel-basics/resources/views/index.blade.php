@extends('layout.main')
@section('content')
    <!-- CONTENIDO AQUÍ -->
    
    <!-- SLIDER -->
        <div id="slider-container">
            <div id="slider"  class="cycle-slideshow" 
                data-cycle-fx="fadeout" 
                data-cycle-timeout="0"
                data-cycle-caption-plugin=caption2
                data-cycle-overlay=".slider-overlay"
                data-cycle-overlay-fx-out="slideUp"
                data-cycle-overlay-fx-in="slideDown"
                data-cycle-slides="> div"
                data-cycle-prev="#slider-prev"
                data-cycle-next="#slider-next"
            >
                <div class="slider-item" data-cycle-title="Emprendox" data-cycle-desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit.">
                    <img src="img/slider/mcdonalds.jpg" alt="McDonalds" >
                </div>
                <div class="slider-item" data-cycle-title="Negocios" data-cycle-desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora, unde!">
                    <img src="img/slider/starbucks.jpg" alt="Starbucks" >
                </div>
                <div class="slider-item" data-cycle-title="Franquicias" data-cycle-desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, labore?">
                    <img src="img/slider/sweetncoffe.jpg" alt="Sweet and Coffe" >
                </div> 
            </div>
            <!-- PREV/NEXT BUTTONS -->
            <div class="slider-buttons">
                <div id="slider-prev">
                    <svg class="slider-button">
                        <use xlink:href="#prev"></use>
                    </svg>
                </div>
                <div id="slider-next">
                    <svg class="slider-button">
                        <use xlink:href="#next"></use>
                    </svg>               
                </div>
            </div>
        </div>

        <!-- CAROUSEL -->
        <div class="carousel-container">
            <h3>Anuncios destacados</h2>
            <div id="carousel">
                <div class="carousel-item">
                    <img src="img/carousel/grace_thumbnail.jpeg" alt="">
                    <h2 class="center-text">Grace</h2>
                    <p class="center-text">Lorem ipsum</p>
                </div>
                <div class="carousel-item">
                    <img src="img/carousel/importadora_thumbnail.jpg" alt="">
                    <h2 class="center-text">Importadora</h2>
                    <p class="center-text">Lorem ipsum</p>
                </div>
                <div class="carousel-item">
                    <img src="img/carousel/licoreria_thumbnail.jpg" alt="">
                    <h2 class="center-text">Licoreria</h2>
                    <p class="center-text">Lorem ipsum</p>
                </div>
                <div class="carousel-item">
                    <img src="img/carousel/subway_thumbnail.jpg" alt="">
                    <h2 class="center-text">Subway</h2>
                    <p class="center-text">Lorem ipsum</p>
                </div>
                <div class="carousel-item">
                    <img src="img/carousel/juanvaldez_thumbnail.jpg" alt="">
                    <h2 class="center-text">Juan Valdez</h2>
                    <p class="center-text">Lorem ipsum</p>
                </div>
                <div class="carousel-item">
                    <img src="img/carousel/grace_thumbnail.jpeg" alt="">
                    <h2 class="center-text">Grace</h2>
                    <p class="center-text">Lorem ipsum</p>
                </div>
                <div class="carousel-item">
                    <img src="img/carousel/importadora_thumbnail.jpg" alt="">
                    <h2 class="center-text">Importadora</h2>
                    <p class="center-text">Lorem ipsum</p>
                </div>
            </div>
            <a href="#">MAS ANUNCIOS</a>
        </div>

        <!-- ANUNCIO DESCATADO -->
        <div class="destacado-container">
            <div class="destacado-fondo">
                <img src="img/destacado.jpg" alt="">
            </div>
            <div class="destacado">
                <h1>PRETTY USED THINGS</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, in. Quisquam quam aliquam ea eveniet animi odio, ad tempore nam!</p>
                <img src="img/logo-destacado.png" alt="Pretty Used Things">
                <button>LEER MÁS</button>
            </div>
        </div>

        <!-- COMPROMISO -->
        <div class="compromiso-container">
            <h3>Compromiso</h3>
                <div class="compromiso-slider cycle-slideshow" 
                data-cycle-fx="fade" 
                data-cycle-timeout="5000"
                data-cycle-slides="> h3"
                data-cycle-center-horz=true
                >
                    <h3>I love topping croissant halvah. Fruitcake candy I love bonbon wafer fruitcake candy chocolate cake bear claw.</h3>
                    <h3>Topping oat cake sugar plum cupcake wafer I love carrot cake pudding. </h3>
                    <h3>Halvah I love sugar plum I love sweet. Ice cream bonbon fruitcake bonbon cotton candy candy canes toffee.</h3>
                    <h3>Muffin gingerbread cupcake candy tootsie roll lemon drops oat cake tootsie roll pastry. </h3>
                </div>
        </div>
@stop