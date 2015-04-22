(function () {
	'use strict';

	/* Application Dependencies
	*********************************************************************/
	var legacy           = require('legacy');
	var $ 				 = require('jquery-browserify');
	var bp 				 = require('breakpoints');
	var googlemaps		 = require('googlemaps');
	/* angular */  		   require('angular');
	/* angularRoute */	   require('angular-route');
	/* angularCookies */   require('angular-cookies');
	var dropdownsLib	 = require('chosen');
	var tween 			 = require('tween');
	var parallax 		 = require('parallax');
	var angularSanatize  = require('angular-sanitize');
	var videogular		 = require('videogular');
	var videogularControls = require('controls');
	var videogularoverlayPlay = require('overlay-play');
	var videogularBuffering = require('buffering');
	var videogularPoster = require('poster');
	var viewer360 = require('360viewer');


	/* Bootstrap Application
	*********************************************************************/

	// Localization Component
	var i18nModule       = require('./global/localization/service')();
	var App 			 = angular.module('desigual', ['ngRoute', 'localization', 'ngCookies', 'com.2fdevs.videogular', 'com.2fdevs.videogular.plugins.controls', 'com.2fdevs.videogular.plugins.overlayplay', 'com.2fdevs.videogular.plugins.poster', 'com.2fdevs.videogular.plugins.buffering']);
	/* Routes
	*********************************************************************/

	var routes 			 = require('./global/routes/routes')(App);

	/* utilities
	*********************************************************************/

    var filters          = require('./global/components/app/filters')(App);
    var videoPlayerCtrl  = require('./global/components/videogular/controller')(App);

	/* Global Components
	*********************************************************************/

	var appCtrl			 = require('./global/components/app/controller')(App);
	var appDir			 = require('./global/components/app/directive')(App);

	// Back End Bind Component
	var backendBind	 = require('./global/components/backend-bind/directive')(App);

	// Cookies Modal Component
	var cookiesModal 	 = require('./global/components/cookies-modal/directive')(App);

	// Navigation Component
	var navigation 		 = require('./global/components/navigation/directive')(App);

	// Navigation Mobile Component
	var navigationMobile = require('./global/components/navigation-mobile/directive')(App);

	// Tabs Component
	var tabsDir 	     = require('./global/components/tabs/directive')(App);

	// Grid Component
	var gridMobileDir 	= require('./global/components/grid-component-mobile/directive')(App);

    // Quick buy Controller
    var quickBuyCtrl     = require('./global/components/quick-buy/controller')(App);
    // Quick buy Directive
    var quickBuyDir         = require('./global/components/quick-buy/directive')(App);

    // Social Flip Directive
    var socialFlipDir = require('./global/components/social-flip/directive')(App);

	// Match
	var match = require('./global/components/match/directive')(App);

	// Focus
	var focus            = require('./global/components/focus/directive')(App);

	// Placeholder
	var placeholder            = require('./global/components/placeholder/directive')(App);

	// Newsletter Component
	var newsletterDir 	 = require('./global/components/newsletter/directive')(App);
	var globalNewsletterCtrl = require('./global/components/newsletter/controller')(App);


	// Quantity Stepper Component
	var quantityStepper  = require('./global/components/quantity-stepper/directive')(App);

	// Overlay Component
	var overlayCtrl      = require('./global/components/overlay/overlay/controller')(App);
	var overlay  		 = require('./global/components/overlay/overlay/directive')(App);
	var shareOveralyCtrl = require('./global/components/overlay/share-overlay/controller')(App);
	var shareOveraly     = require('./global/components/overlay/share-overlay/directive')(App);
	var giftOveralyCtrl = require('./global/components/overlay/gift-overlay/controller')(App);
	var giftOveraly     = require('./global/components/overlay/gift-overlay/directive')(App);

	// Video Modal
	var videoModalCtrl = require('./global/components/modal-video/controller')(App);
	var videoModalDir = require('./global/components/modal-video/directive')(App);

    // Video Component
    var videoPlayer = require('./global/components/video/directive')(App);

	// Remember Me Component
	var rememberMeCtrl	 = require('./global/components/remember-me/controller')(App);
	var rememberMeDir	 = require('./global/components/remember-me/directive')(App);

	// Localization Component
	var i18nDir 		 = require('./global/localization/directive')(App);
	var i18nCtrl 		 = require('./global/localization/controller')(App);
	var i18nfilter 		 = require('./global/localization/filter')(App);

	// Print Btn Component
	var printBtnDir = require('./global/components/print-btn/directive')(App);

	// Drop Down Component
	var dropdowns		 = require('./global/components/dropdown/directive')(App);

	// Carousel Component
	var carouselDir 	 = require('./global/components/carousel/directive')(App);

	/* Global Services
	*********************************************************************/
    var serviceConfig    = require('./global/services/service-config')(App);

	var configService	 = require('./global/services/service-config')(App);
	var sessionsService	 = require('./global/services/session')(App);
	var loginService     = require('./global/services/login')(App);
    var profileService   = require('./global/services/profile')(App);
    var authService      = require('./global/services/auth')(App);
    var storesService    = require('./global/services/stores')(App);
    var mapsService    	 = require('./global/services/maps')(App);
    var orderService     = require('./global/services/order')(App);
    var productService	 = require('./global/services/products')(App);


	/* Global Controllers
	*********************************************************************/
	var lazyLoadCtrl 	 = require('./global/controllers/lazy-load')(App);
	var loginCtrl 		 = require('./global/controllers/login')(App);
	var registerCtrl 	 = require('./global/controllers/register')(App);
	var forgotPasswordCtrl= require('./global/controllers/forgot-password')(App);

	/* Home Components
	*********************************************************************/

	var parallaxAnim  	  = require('./home/split-pane/directive')(App);
	var heroDir  	  	  = require('./home/hero/directive')(App);
	var heroCtrl  	  	  = require('./home/hero/controller')(App);
    var desigualNowCtrl   = require('./home/desigual-now/controller')(App);
    var desigualNowDir    = require('./home/desigual-now-item/directive')(App);
    var desigualNowMobileDir   = require('./home/desigual-now-mobile/directive')(App);
    var desigualNowMobileItemDir    = require('./home/desigual-now-item-mobile/directive')(App);
    var desigualNowMap    = require('./home/desigual-now-map/directive')(App);

	/* PDP components
	***************************chec******************************************/

	// PDP Page Component
	var pdpPageSer		  = require('./pdp/pdp/service')(App);
	var pdpPageCtrl		  = require('./pdp/pdp/controller')(App);
	var pdpPageDir		  = require('./pdp/pdp/directive')(App);

	// Product Thumbnails Component
	var productThumbCtrl  = require('./pdp/product-thumbnails/controller')(App);
	var productThumbDir   = require('./pdp/product-thumbnails/directive')(App);

	// Size Options Component
	var sizeOptionsCtrl   = require('./pdp/size-options/controller')(App);
	var sizeOptionsDir    = require('./pdp/size-options/directive')(App);

	// Colour Options Component
	var colourOptsCtrl	  = require('./pdp/colour-options/controller')(App);
	var colourOptsDir	  = require('./pdp/colour-options/directive')(App);

	// Colour Options Component
	var addToCartCtrl	  			= require('./pdp/add-to-cart/controller')(App);
	var addToCartDir	 			= require('./pdp/add-to-cart/directive')(App);

	// Zoom Component
	var zoom 			  			= require('./pdp/zoom/directive')(App);

	// Out of stock Component
	var outOfStockSer  	  			= require('./pdp/out-of-stock/service')(App);
	var outOfStockCtrl    			= require('./pdp/out-of-stock/controller')(App);
	var outOfStockDir  	  			= require('./pdp/out-of-stock/directive')(App);

	// Viewer
	var viewerDir	  	  			= require('./pdp/viewer/directive')(App);

	/* Cart components
	*********************************************************************/

	// Cart Page Component
	var cartPageCtrl 	  			= require('./cart/cart/controller')(App);
	var cartService 	  			= require('./cart/cart/service')(App);
	var cartDirective 	  			= require('./cart/cart/directive')(App);

	// Cart Item Component
	var cartItem 		  			= require('./cart/cart-item/directive')(App);
	// Wish Item Component
	var wishItem 		  			= require('./cart/wish-item/directive')(App);
	var wishListService   			= require('./cart/wish-item/service')(App);

	// Gift Item Component
	var giftItem 		  			= require('./cart/gift-item/directive')(App);

    // Reject Item Component
    var rejectItem       			= require('./cart/reject-item/directive')(App);
    /* Search components
     *********************************************************************/

    var searchCtrl    = require('./global/components/search-bar/controller')(App);
    var searchService    = require('./global/components/search-bar/service')(App);
    var searchBarDir	 = require('./global/components/search-bar/directive')(App);


    // Subsection Page Component
    var subesctionCtrl = require('./product-list/product-list/controller')(App);
    var subesctionDir = require('./product-list/product-list/directive')(App);

    // Subsection Item Grid Component
    var subItem = require('./product-list/product-list-item/directive')(App);

    // Subsection Promo Item
    var promoItem = require('./product-list/promo-item/directive')(App);

	/* Checkout components
	*********************************************************************/

	// Checkout Page Component
	var checkOutPageCtrl  			= require('./checkout/checkout/controller')(App);
	var checkOutPageDir   			= require('./checkout/checkout/directive')(App);

	//Checkout Login Component
	var checkoutLoginPageCtrl 		= require('./checkout/login/controller')(App);
	var checkOutLoginPageDir  		= require('./checkout/login/directive')(App);
	var checkoutPaymentOptionsDir	= require('./checkout/global/cart-payment-options/directive')(App);

	//Checkout Cart Overview
	var cartOverviewCtrl  			= require('./checkout/global/cart-overview/controller')(App);
	var cartOverviewDir   			= require('./checkout/global/cart-overview/directive')(App);

	//Checkout Cart Totals Summary
	var cartTotalsCtrl	  			= require('./checkout/global/cart-totals-summary/controller')(App);
	var cartTotalsDir  	  			= require('./checkout/global/cart-totals-summary/directive')(App);

	//Create Account Component
	var createAccountCtrl 			= require('./checkout/shipping/form-create-account/controller')(App);
	var createAccountDir  			= require('./checkout/shipping/form-create-account/directive')(App);

	// Form Main Address Component
	var formMainAddressCtrl			= require('./checkout/shipping/form-main-address/controller')(App);
	var formMainAddressDir 			= require('./checkout/shipping/form-main-address/directive')(App);
	// Form Main Address Email Component
	var formMainAddressEmailDir 	= require('./checkout/shipping/form-main-address-email/directive')(App);
	//Form Main Address List Component
	var formMainAddressListCtrl		= require('./checkout/shipping/form-main-address-list/controller')(App);
	var formMainAddressListDir 		= require('./checkout/shipping/form-main-address-list/directive')(App);

	// Form Search Stores Component
	var formSearchCtrl	  			= require('./checkout/shipping/form-search-stores/controller')(App);
	var formSearchDir	 			= require('./checkout/shipping/form-search-stores/directive')(App);
	// Form Select Saved Stores Component
	var formSelectDir	  			= require('./checkout/shipping/form-select-saved-stores/directive')(App);

	// Form Shipping Address Component
	var formshippingAddressDir  	= require('./checkout/shipping/form-shipping-address/directive')(App);

	//Form Shipping Methods Component
	var formShippingMethodsCtrl  	= require('./checkout/shipping/form-shipping-methods/controller')(App);
	var formShippingMethodsDir		= require('./checkout/shipping/form-shipping-methods/directive')(App);

	// Payment Options Component
	var paymentOptionsListCtrl		= require('./checkout/shipping/form-payment-options-list/controller')(App);
	var paymentOptionsListDir		= require('./checkout/shipping/form-payment-options-list/directive')(App);

	// Form Terms And Conditions Component
	var formTermsCondsDir 			= require('./checkout/shipping/form-terms-conditions/directive')(App);
	// // Form Payment Methods Component
	var formPaymentCtrl	  			= require('./checkout/payment/form-payment-options/controller')(App);
	var formPaymentDir	  			= require('./checkout/payment/form-payment-options/directive')(App);

	// Form shipping Address List
	var formShippingAddressListCtrl	= require('./checkout/shipping/form-shipping-address-list/controller')(App);
	var formShippingAddressList		= require('./checkout/shipping/form-shipping-address-list/directive')(App);


	// Checkout Confirmation Page Component
	var checkOutConfCtrl   			= require('./checkout/confirmation/controller')(App);

	var checkOutOrderSummaryListDir = require('./checkout/confirmation/order-summary-list/directive')(App);
	var checkOutOrderSummaryDir		= require('./checkout/confirmation/order-summary/directive')(App);
	var checkOutOrderPromoDir		= require('./checkout/confirmation/promo-split/directive')(App);


	/* My Account components
	*********************************************************************/

	// Acount Page Component
	var accountPageSer	 			= require('./account/address/service')(App);
	var accountPageCtrl	 			= require('./account/account/controller')(App);
    var accountPageDir             = require('./account/account/directive')(App);
    var accountAddressDir             = require('./account/address/directive')(App);
    
	// Account Create Component
	// var accountCreateDir = require('./account/create/directive')(App);

    // Track Order Components
    var trackOrderDirective        = require('./track-order/directive')(App);
    
	/* Store Locator components
	*********************************************************************/
	// global controller
	var storeLocatorCtrl = require('./store-locator/store-locator/controller')(App);
	// global directive
	var storeLocatorDir	 = require('./store-locator/store-locator/directive')(App);
	// map controller
	var storeLocatorMapCtrl 	= require('./store-locator/map/controller')(App);
	// map directive
	var storeLocatorMapDir		= require('./store-locator/map/directive')(App);
	// tabs controller
	var storeLocatorTabCtrl		= require('./store-locator/tabs/controller')(App);
	// tabs directive
	var storeLocatorTabDir		= require('./store-locator/tabs/directive')(App);
	// search controller
	var storeLocatorSearchCtrl   = require('./store-locator/search/controller')(App);
	// search directive
	var storeLocatorSearchDir   = require('./store-locator/search/directive')(App);
	// details directive
	var storeLocatorDetailsDir   = require('./store-locator/details/directive')(App);
	var storeLocatorDetailsPageDir   = require('./store-locator/details-page/directive')(App);
	// list controller
	var storeLocatorListItemCtrl = require('./store-locator/listitem/controller')(App);
	// list directive
	var storeLocatorListItemDir	= require('./store-locator/listitem/directive')(App);
	// fitlers controller
	var storeLocatorFiltersCtrl	 = require('./store-locator/filters/controller')(App);
	// fitlers directive
	var storeLocatorFiltersDir   = require('./store-locator/filters/directive')(App);

	/* Lookbook components
	*********************************************************************/
	// global controller
	var lookbookCtrl = require('./lookbook/controller')(App);

}());
