var openTableApp = angular
                
                .module('openTableApp', ['ui.router', 'templates', 'ngResource', 'ngMessages', 'Devise', 'uiGmapgoogle-maps'])
                .config(function(uiGmapGoogleMapApiProvider) {
                    uiGmapGoogleMapApiProvider.configure({
                        key: 'AIzaSyAzp93o1OZ_zhsxTKUZ82Jwff2KCcjSyBo',
                        libraries: 'weather,geometry,visualization'
                    });
                })
                .config(function($stateProvider, $urlRouterProvider){
                  $stateProvider
                    // Landing page that asks for your city
                    .state('home', {
                      url: '/',
                      templateUrl: 'app/home/home.html',
                      controller: 'HomeController as home'
                    })
                    // Hits Unofficial OpenTable API and pulls restaurant results
                    .state('home.wildcard', {
                      url: 'wildcard',
                      templateUrl: 'app/wildcard/wildcard.html',
                      controller: 'WildCardController as wildcard'
                    })
                    // This is all saved restaurants 
                    .state('restaurants', {
                      url: '/restaurants',
                      templateUrl: 'app/restaurants/views/restaurants.html',
                      controller: 'RestaurantsController as restaurants'
                    })
                    // Add a new restaurant 
                    .state('new', {  
                      url: '/new',
                      templateUrl: 'app/restaurants/views/new.html',
                      controller: 'NewRestaurantController as newRestaurant'
                    })
                    // Show page 
                    .state('restaurant', { 
                      url: '/restaurant/:id',
                      templateUrl: 'app/restaurants/views/show.html',
                      controller: 'ShowRestaurantController as showRestaurant'
                    })
                    // Edit restaurant details
                    .state('edit', { 
                      url:'/edit/:id',
                      templateUrl: 'app/restaurants/views/edit.html',
                      controller: 'EditRestaurantController as editRestaurant'
                    })
                    // Reviews User INDEX
                    .state('reviews', {
                      url:'/reviews',
                      templateUrl: 'app/reviews/views/reviews.html',
                      controller: 'ReviewsController as reviews'
                    })
                    // Reviews NEW
                    .state('newreview', {
                      url:'/reviews/new',
                      templateUrl: 'app/reviews/views/new.html',
                      controller: 'NewReviewController as newReview'
                    })
                    // Reviews SHOW
                    .state('showreview', {
                      url:'/reviews/:id',
                      templateUrl: 'app/reviews/views/show.html',
                      controller: 'ShowReviewController as showReview'
                    })
                    // Reviews EDIT
                    .state('editreview', {
                      url:'/reviews/edit/:id',
                      templateUrl: 'app/reviews/views/edit.html',
                      controller: 'EditReviewController as editReview'
                    })
                    // Users Index
                    .state('users', {
                      url:'/users',
                      templateUrl: 'app/users/views/users.html',
                      controller: 'UsersController as users'
                    })
                    // Users Show
                    .state('showuser', {
                      url:'/users/:id',
                      templateUrl: 'app/users/views/show.html',
                      controller: 'ShowUserController as showUser'
                    })
                    // Devise - Login
                    .state('login', {
                      url: '/login',
                      templateUrl: 'app/auth/_login.html',
                      controller: 'AuthCtrl'//,
                    })
                    // Devise - Register
                    .state('register', {
                      url: '/register',
                      templateUrl: 'app/auth/_register.html',
                      controller: 'AuthCtrl'//,
                    })
                    // Defaults to home
                      $urlRouterProvider.otherwise('/');
                });

