(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["compass-compass-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/compass/compass.page.html":
  /*!*********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/compass/compass.page.html ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCompassCompassPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n\t<ion-toolbar>\n\t\t<ion-buttons slot=\"start\">\n\t\t\t<ion-menu-button (click)=\"openMenu()\"></ion-menu-button>\n\t\t</ion-buttons>\n\t\t<ion-title>TRACKER</ion-title>\n\t</ion-toolbar>\n</ion-header>\n\n<ion-content>\n\t<div #map id=\"map\" [hidden]=\"!user\"></div>\n\t<br />\n\t<ion-button (click)=\"showAlert()\">WHERE AM I?</ion-button>\n\t<br />\n\n\t<div *ngIf=\"user\">\n\t\t<ion-item>\n\t\t\t<ion-label>User ID: {{ user.uid }}</ion-label>\n\t\t</ion-item>\n\n\t\t<ion-button expand=\"block\" (click)=\"startTracking()\" *ngIf=\"!isTracking\">\n\t\t\t<ion-icon name=\"locate\" slot=\"start\"></ion-icon>\n\t\t\tStart Tracking\n\t\t</ion-button>\n\n\t\t<ion-button expand=\"block\" (click)=\"stopTracking()\" *ngIf=\"isTracking\">\n\t\t\t<ion-icon name=\"hand\" slot=\"start\"></ion-icon>\n\t\t\tStop Tracking\n\t\t</ion-button>\n\n\t\t<ion-list>\n\t\t\t<ion-item-sliding *ngFor=\"let pos of locations | async\">\n\t\t\t\t<ion-item>\n\t\t\t\t\t<ion-label text-wrap>\n\t\t\t\t\t\tLat: {{ pos.lat }} Lng: {{ pos.lng }}\n\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t{{ pos.timestamp | date:'short' }}\n\t\t\t\t\t\t</p>\n\t\t\t\t\t</ion-label>\n\t\t\t\t</ion-item>\n\n\t\t\t\t<ion-item-options side=\"start\">\n\t\t\t\t\t<ion-item-option color=\"danger\" (click)=\"deleteLocation(pos)\">\n\t\t\t\t\t\t<ion-icon name=\"trash\" slot=\"icon-only\"></ion-icon>\n\t\t\t\t\t</ion-item-option>\n\t\t\t\t</ion-item-options>\n\t\t\t</ion-item-sliding>\n\t\t</ion-list>\n\t</div>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/compass/compass.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/compass/compass.module.ts ***!
    \*******************************************/

  /*! exports provided: CompassPageModule */

  /***/
  function srcAppCompassCompassModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CompassPageModule", function () {
      return CompassPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _compass_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./compass.page */
    "./src/app/compass/compass.page.ts");

    let CompassPageModule = class CompassPageModule {};
    CompassPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild([{
        path: '',
        component: _compass_page__WEBPACK_IMPORTED_MODULE_5__["CompassPage"]
      }])],
      declarations: [_compass_page__WEBPACK_IMPORTED_MODULE_5__["CompassPage"]]
    })], CompassPageModule);
    /***/
  },

  /***/
  "./src/app/compass/compass.page.scss":
  /*!*******************************************!*\
    !*** ./src/app/compass/compass.page.scss ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppCompassCompassPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#map {\n  width: 100%;\n  height: 400px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcGFzcy9DOlxcUHJvamVjdHNcXHB3YS1lbGVtZW50cy9zcmNcXGFwcFxcY29tcGFzc1xcY29tcGFzcy5wYWdlLnNjc3MiLCJzcmMvYXBwL2NvbXBhc3MvY29tcGFzcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxXQUFBO0VBQ0EsYUFBQTtBQ0NEIiwiZmlsZSI6InNyYy9hcHAvY29tcGFzcy9jb21wYXNzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNtYXAge1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdGhlaWdodDogNDAwcHg7XHJcbn1cclxuXHJcbiIsIiNtYXAge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA0MDBweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/compass/compass.page.ts":
  /*!*****************************************!*\
    !*** ./src/app/compass/compass.page.ts ***!
    \*****************************************/

  /*! exports provided: CompassPage */

  /***/
  function srcAppCompassCompassPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CompassPage", function () {
      return CompassPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/auth/es2015/index.js");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/firestore/es2015/index.js");
    /* harmony import */


    var _capacitor_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @capacitor/core */
    "./node_modules/@capacitor/core/dist/esm/index.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    let CompassPage = class CompassPage {
      constructor(fbAuth, afs, menu) {
        this.fbAuth = fbAuth;
        this.afs = afs;
        this.menu = menu;
        this.markers = []; // Misc

        this.isTracking = false;
        this.user = null;
        this.pathCoordinates = [];
        this.anonymousLogin();
      }

      ionViewWillEnter() {
        this.watchPosition().subscribe(position => this.position = position);
        this.initMap();
        this.setTracker();
      }

      openMenu() {
        this.menu.open('side-menu');
      } // formats calbackFn data as an Observable


      watchPosition() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["bindCallback"])(_capacitor_core__WEBPACK_IMPORTED_MODULE_4__["Geolocation"].watchPosition)({});
      }

      anonymousLogin() {
        this.fbAuth.auth.signInAnonymously().then(res => {
          this.user = res.user;
          this.locationsCollection = this.afs.collection("locations/".concat(this.user.uid, "/track"), ref => ref.orderBy('timestamp')); // Make sure we also get the Firebase item ID!

          this.locations = this.locationsCollection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(actions => actions.map(a => {
            const data = a.payload.doc.data();
            const id = a.payload.doc.id;
            return Object.assign({
              id
            }, data);
          }))); // Update Map marker on every change

          /* 			this.locations.subscribe(locations => {
              this.updateMap(locations)
          }) */
        });
      } // Initialize a blank map


      initMap() {
        const mapOptions = {
          // center:  new google.maps.LatLng(38.7121152, -9.125888),
          zoom: 18,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
        this.watch = _capacitor_core__WEBPACK_IMPORTED_MODULE_4__["Geolocation"].watchPosition({}, (position, err) => {
          if (position) {
            this.map.setCenter({
              lat: position.coords.latitude,
              lng: position.coords.longitude
            });
          }
        });
      }

      setDrawer() {
        const drawingManager = new google.maps.drawing.DrawingManager({
          drawingMode: google.maps.drawing.OverlayType.MARKER,
          drawingControl: true,
          drawingControlOptions: {
            position: google.maps.ControlPosition.TOP_CENTER,
            drawingModes: ['marker', 'circle', 'polygon', 'polyline', 'rectangle']
          },
          markerOptions: {
            icon: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'
          },
          circleOptions: {
            fillColor: '#ffff00',
            fillOpacity: 1,
            strokeWeight: 5,
            clickable: false,
            editable: true,
            zIndex: 1
          }
        }); // drawingManager.setMap(this.map)
      }

      setTracker() {
        /* 		this.pathCoordinates = [
            { lat: 38.71, lng: -9.201 },
            { lat: 38.735, lng: -9.245 },
            { lat: 38.775, lng: -9.26 },
            { lat: 38.805, lng: -9.31 },
            { lat: 38.825, lng: -9.36 },
            { lat: 38.865, lng: -9.385 }
        ]
        */
        this.linePath = new google.maps.Polyline({
          // path: this.pathCoordinates,
          geodesic: true,
          strokeColor: '#FF0000',
          strokeOpacity: 1.0,
          strokeWeight: 2
        });
        this.linePath.setMap(this.map);
      } // Use Capacitor to track our geolocation


      startTracking() {
        this.isTracking = true;
        this.watch = _capacitor_core__WEBPACK_IMPORTED_MODULE_4__["Geolocation"].watchPosition({}, (position, err) => {
          if (position) {
            this.addNewLocation(position.coords.latitude, position.coords.longitude, position.timestamp);
            this.pathCoordinates = [...this.pathCoordinates, {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            }];
            this.updateTracker();
          }
        });
      }

      updateTracker() {
        this.linePath.setPath(this.pathCoordinates);
        /* 		const path = [
            { lat: 38.71, lng: -9.201 },
            { lat: 38.735, lng: -9.245 },
            { lat: 38.775, lng: -9.26 },
            { lat: 38.805, lng: -9.31 },
            { lat: 38.825, lng: -9.36 },
            { lat: 38.865, lng: -9.385 }
        ]
          this.linePath.setPath(path) */
      } // Unsubscribe from the geolocation watch using the initial ID


      stopTracking() {
        this.pathCoordinates = [];

        _capacitor_core__WEBPACK_IMPORTED_MODULE_4__["Geolocation"].clearWatch({
          id: this.watch
        }).then(() => {
          this.isTracking = false;
        });
      } // Save a new location to Firebase and center the map


      addNewLocation(lat, lng, timestamp) {
        this.locationsCollection.add({
          lat,
          lng,
          timestamp
        });
        const position = new google.maps.LatLng(lat, lng);
        this.map.setCenter(position);
        this.map.setZoom(5);
      } // Delete a location from Firebase


      deleteLocation(pos) {
        this.locationsCollection.doc(pos.id).delete();
      } // Redraw all markers on the map


      updateMap(locations) {
        // Remove all current marker
        this.markers.map(marker => marker.setMap(null));
        this.markers = [];

        for (const loc of locations) {
          const latLng = new google.maps.LatLng(loc.lat, loc.lng);
          const marker = new google.maps.Marker({
            map: this.map,
            animation: google.maps.Animation.DROP,
            position: latLng
          });
          this.markers.push(marker);
        }
      }

      showAlert() {
        const lat = this.position.coords.latitude;
        const lng = this.position.coords.longitude;
        const marker = new google.maps.Marker({
          map: this.map,
          animation: google.maps.Animation.DROP,
          position: new google.maps.LatLng(this.position.coords.latitude, this.position.coords.longitude)
        });

        _capacitor_core__WEBPACK_IMPORTED_MODULE_4__["Modals"].alert({
          title: 'Your Location',
          message: "Lat: ".concat(lat, ", Lng: ").concat(lng)
        });
      }

    };

    CompassPage.ctorParameters = () => [{
      type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"]
    }, {
      type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"]
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["MenuController"]
    }];

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('map', {
      static: false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])], CompassPage.prototype, "mapElement", void 0);
    CompassPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./compass.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/compass/compass.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./compass.page.scss */
      "./src/app/compass/compass.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["MenuController"]])], CompassPage);
    /***/
  }
}]);
//# sourceMappingURL=compass-compass-module-es5.js.map