(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["camera-camera-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/camera/camera.page.html":
  /*!*******************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/camera/camera.page.html ***!
    \*******************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCameraCameraPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n\t<ion-toolbar>\n\t\t<ion-title>\n\t\t\tPhoto Gallery\n\t\t</ion-title>\n\t</ion-toolbar>\n</ion-header>\n\n<ion-content>\n\t<ion-header collapse=\"condense\">\n\t\t<ion-toolbar>\n\t\t\t<ion-title size=\"large\">Photo Gallery</ion-title>\n\t\t</ion-toolbar>\n\t</ion-header>\n\n\t<ion-grid>\n\t\t<ion-row>\n\t\t\t<ion-col size=\"3\" *ngFor=\"let photo of photoService.photos; index as position\">\n\t\t\t\t<ion-img\n\t\t\t\t\tsrc=\"{{ photo.base64 ? photo.base64 : photo.webviewPath }}\"\n\t\t\t\t\t(click)=\"presentModal(position)\"\n\t\t\t\t></ion-img>\n\t\t\t</ion-col>\n\t\t</ion-row>\n\t</ion-grid>\n\n\t<ion-slides pager=\"true\" [options]=\"slideOpts\">\n\t\t<ion-slide *ngFor=\"let photo of photoService.photos; index as position\">\n\t\t\t<ion-img src=\"{{ photo.base64 ? photo.base64 : photo.webviewPath }}\"></ion-img>\n\t\t</ion-slide>\n\t</ion-slides>\n\n\t<ion-fab vertical=\"bottom\" horizontal=\"center\" slot=\"fixed\">\n\t\t<ion-fab-button (click)=\"photoService.addNewToGallery()\">\n\t\t\t<ion-icon name=\"camera\"></ion-icon>\n\t\t</ion-fab-button>\n\t</ion-fab>\n</ion-content>\n<!-- \n(click)=\"showActionSheet(photo, position)\"\n -->\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/camera/photo-displayer/photo-displayer.component.html":
  /*!*************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/camera/photo-displayer/photo-displayer.component.html ***!
    \*************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCameraPhotoDisplayerPhotoDisplayerComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-slides pager=\"true\" [options]=\"slideOpts\">\n\t<ion-slide *ngIf=\"photoService.photos[0] as photo\">\n\t\t<ion-img src=\"{{ photo.base64 ? photo.base64 : photo.webviewPath }}\"></ion-img>\n\t</ion-slide>\n\t<ion-slide *ngIf=\"photoService.photos[1] as photo\">\n\t\t<ion-img src=\"{{ photo.base64 ? photo.base64 : photo.webviewPath }}\"></ion-img>\n\t</ion-slide>\n\t<ion-slide *ngIf=\"photoService.photos[2] as photo\">\n\t\t<ion-img src=\"{{ photo.base64 ? photo.base64 : photo.webviewPath }}\"></ion-img>\n\t</ion-slide>\n</ion-slides>\n\n<!-- \n\t<ion-slides pager=\"true\" [options]=\"slideOpts\">\n\t<ion-slide *ngFor=\"let photo of photoService.photos; index as position\">\n\t\t<ion-img src=\"{{ photo.base64 ? photo.base64 : photo.webviewPath }}\"></ion-img>\n\t</ion-slide>\n</ion-slides>\n\n -->\n";
    /***/
  },

  /***/
  "./src/app/camera/camera.module.ts":
  /*!*****************************************!*\
    !*** ./src/app/camera/camera.module.ts ***!
    \*****************************************/

  /*! exports provided: CameraPageModule */

  /***/
  function srcAppCameraCameraModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CameraPageModule", function () {
      return CameraPageModule;
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


    var _camera_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./camera.page */
    "./src/app/camera/camera.page.ts");
    /* harmony import */


    var _photo_displayer_photo_displayer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./photo-displayer/photo-displayer.component */
    "./src/app/camera/photo-displayer/photo-displayer.component.ts");

    let CameraPageModule = class CameraPageModule {};
    CameraPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild([{
        path: '',
        component: _camera_page__WEBPACK_IMPORTED_MODULE_5__["CameraPage"]
      }])],
      declarations: [_camera_page__WEBPACK_IMPORTED_MODULE_5__["CameraPage"], _photo_displayer_photo_displayer_component__WEBPACK_IMPORTED_MODULE_6__["PhotoDisplayerComponent"]],
      entryComponents: [_photo_displayer_photo_displayer_component__WEBPACK_IMPORTED_MODULE_6__["PhotoDisplayerComponent"]]
    })], CameraPageModule);
    /***/
  },

  /***/
  "./src/app/camera/camera.page.scss":
  /*!*****************************************!*\
    !*** ./src/app/camera/camera.page.scss ***!
    \*****************************************/

  /*! exports provided: default */

  /***/
  function srcAppCameraCameraPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".camera-footer {\n  --background: pink !important;\n  background: pink !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FtZXJhL0M6XFxQcm9qZWN0c1xccHdhLWVsZW1lbnRzL3NyY1xcYXBwXFxjYW1lcmFcXGNhbWVyYS5wYWdlLnNjc3MiLCJzcmMvYXBwL2NhbWVyYS9jYW1lcmEucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsNkJBQUE7RUFDQSwyQkFBQTtBQ0NEIiwiZmlsZSI6InNyYy9hcHAvY2FtZXJhL2NhbWVyYS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FtZXJhLWZvb3RlciB7XHJcblx0LS1iYWNrZ3JvdW5kOiBwaW5rICFpbXBvcnRhbnQ7XHJcblx0YmFja2dyb3VuZDogcGluayAhaW1wb3J0YW50O1xyXG59XHJcbiIsIi5jYW1lcmEtZm9vdGVyIHtcbiAgLS1iYWNrZ3JvdW5kOiBwaW5rICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQ6IHBpbmsgIWltcG9ydGFudDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/camera/camera.page.ts":
  /*!***************************************!*\
    !*** ./src/app/camera/camera.page.ts ***!
    \***************************************/

  /*! exports provided: CameraPage */

  /***/
  function srcAppCameraCameraPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CameraPage", function () {
      return CameraPage;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _services_photo_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/photo.service */
    "./src/app/services/photo.service.ts");
    /* harmony import */


    var _photo_displayer_photo_displayer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./photo-displayer/photo-displayer.component */
    "./src/app/camera/photo-displayer/photo-displayer.component.ts");

    let CameraPage = class CameraPage {
      constructor(photoService, actionSheetController, modalController) {
        this.photoService = photoService;
        this.actionSheetController = actionSheetController;
        this.modalController = modalController;
        this.slideOpts = {
          speed: 400,
          initialSlide: 0
        };
        this.storedPhotos$ = this.photoService.storedPhotos$;
      }

      ngOnInit() {
        this.photoService.storedPhotos$.subscribe(storedPhotos => this.storedPhotos = storedPhotos);
      }

      showActionSheet(photo, position) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          const actionSheet = yield this.actionSheetController.create({
            header: 'Photos',
            buttons: [{
              text: 'Delete',
              role: 'destructive',
              icon: 'trash',
              handler: () => {
                this.photoService.deletePicture(photo, position);
              }
            }, {
              text: 'Cancel',
              icon: 'close',
              role: 'cancel',
              handler: () => {// Nothing to do, action sheet is automatically closed
              }
            }]
          });
          yield actionSheet.present();
        });
      }

      presentModal(position) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          const modal = yield this.modalController.create({
            component: _photo_displayer_photo_displayer_component__WEBPACK_IMPORTED_MODULE_4__["PhotoDisplayerComponent"],
            componentProps: {
              position
            }
          });
          return yield modal.present();
        });
      }

    };

    CameraPage.ctorParameters = () => [{
      type: _services_photo_service__WEBPACK_IMPORTED_MODULE_3__["PhotoService"]
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"]
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
    }];

    CameraPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-camera',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./camera.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/camera/camera.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./camera.page.scss */
      "./src/app/camera/camera.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_photo_service__WEBPACK_IMPORTED_MODULE_3__["PhotoService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])], CameraPage);
    /***/
  },

  /***/
  "./src/app/camera/photo-displayer/photo-displayer.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/camera/photo-displayer/photo-displayer.component.ts ***!
    \*********************************************************************/

  /*! exports provided: PhotoDisplayerComponent */

  /***/
  function srcAppCameraPhotoDisplayerPhotoDisplayerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PhotoDisplayerComponent", function () {
      return PhotoDisplayerComponent;
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


    var src_app_services_photo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/photo.service */
    "./src/app/services/photo.service.ts");

    let PhotoDisplayerComponent = class PhotoDisplayerComponent {
      constructor(photoService) {
        this.photoService = photoService; // Optional parameters to pass to the swiper instance. See http://idangero.us/swiper/api/ for valid options.

        this.slideOpts = {
          speed: 400,
          initialSlide: 0
        };
      }

      set position(value) {
        this._position = value; // this.slideOpts.initialSlide = value + 1
      }

    };

    PhotoDisplayerComponent.ctorParameters = () => [{
      type: src_app_services_photo_service__WEBPACK_IMPORTED_MODULE_2__["PhotoService"]
    }];

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Number])], PhotoDisplayerComponent.prototype, "position", null);
    PhotoDisplayerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-photo-displayer',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./photo-displayer.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/camera/photo-displayer/photo-displayer.component.html")).default
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_photo_service__WEBPACK_IMPORTED_MODULE_2__["PhotoService"]])], PhotoDisplayerComponent);
    /***/
  },

  /***/
  "./src/app/services/photo.service.ts":
  /*!*******************************************!*\
    !*** ./src/app/services/photo.service.ts ***!
    \*******************************************/

  /*! exports provided: PhotoService */

  /***/
  function srcAppServicesPhotoServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PhotoService", function () {
      return PhotoService;
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


    var _capacitor_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @capacitor/core */
    "./node_modules/@capacitor/core/dist/esm/index.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    let PhotoService = class PhotoService {
      constructor(platform) {
        this.platform = platform;
        this.photos = [];
        this.PHOTO_STORAGE = 'photos'; // Retrieve cached photo array data

        this.storedPhotos$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["from"])(_capacitor_core__WEBPACK_IMPORTED_MODULE_2__["Storage"].get({
          key: this.PHOTO_STORAGE
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(stored => JSON.parse(stored.value) || []), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["mergeMap"])(storedPhotos => this.isDeviceHybrid ? Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(storedPhotos) // If running on the mobile...
        : Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["forkJoin"])(formatToBase64(storedPhotos)) // If running on the web...
        ));

        this.convertBlobToBase64 = blob => new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.onerror = reject;

          reader.onload = () => {
            resolve(reader.result);
          };

          reader.readAsDataURL(blob);
        });

        this.isDeviceHybrid = this.platform.is('hybrid');
        this.storedPhotos$.subscribe(storedPhotos => this.photos = storedPhotos);
      }

      watchStore() {
        // formats calback fn data as an Observable
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["bindCallback"])(_capacitor_core__WEBPACK_IMPORTED_MODULE_2__["Storage"].get)({
          key: this.PHOTO_STORAGE
        });
      }

      addNewToGallery() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          // Take a photo
          const capturedPhoto = yield _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["Camera"].getPhoto({
            resultType: _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["CameraResultType"].Uri,
            source: _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["CameraSource"].Camera,
            quality: 100 // highest quality (0 to 100)

          });
          const savedImageFile = yield this.savePicture(capturedPhoto); // Add new photo to Photos array

          this.photos.unshift(savedImageFile); // Cache all photo data for future retrieval

          _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["Storage"].set({
            key: this.PHOTO_STORAGE,
            value: this.isDeviceHybrid ? JSON.stringify(this.photos) : JSON.stringify(this.photos.map(p => {
              // Don't save the base64 representation of the photo data,
              // since it's already saved on the Filesystem
              const photoCopy = Object.assign({}, p);
              delete photoCopy.base64;
              return photoCopy;
            }))
          });
        });
      } // Save picture to file on device


      savePicture(cameraPhoto) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          // Convert photo to base64 format, required by Filesystem API to save
          const base64Data = yield this.readAsBase64(cameraPhoto); // Write the file to the data directory

          const fileName = new Date().getTime() + '.jpeg';
          yield _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["Filesystem"].writeFile({
            path: fileName,
            data: base64Data,
            directory: _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["FilesystemDirectory"].Data
          }); // Get platform-specific photo filepaths

          return yield this.getPhotoFile(cameraPhoto, fileName);
        });
      } // Read camera photo into base64 format based on the platform the app is running on


      readAsBase64(cameraPhoto) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          // MOBILE: "hybrid" will detect Cordova or Capacitor
          if (this.isDeviceHybrid) {
            // Read the file into base64 format
            const file = yield _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["Filesystem"].readFile({
              path: cameraPhoto.path
            });
            return file.data;
          } // WEB: Fetch the photo, read as a blob, then convert to base64 format


          const response = yield fetch(cameraPhoto.webPath ? cameraPhoto.webPath : null);
          const blob = yield response.blob();
          return yield this.convertBlobToBase64(blob);
        });
      } // Retrieve the photo metadata based on the platform the app is running on


      getPhotoFile(cameraPhoto, fileName) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          if (this.isDeviceHybrid) {
            // Get the new, complete filepath of the photo saved on filesystem
            const fileUri = yield _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["Filesystem"].getUri({
              directory: _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["FilesystemDirectory"].Data,
              path: fileName
            }); // Display the new image by rewriting the 'file://' path to HTTP
            // Details: https://ionicframework.com/docs/building/webview#file-protocol

            return {
              filepath: fileUri.uri,
              webviewPath: _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["Capacitor"].convertFileSrc(fileUri.uri)
            };
          } else {
            // Use webPath to display the new image instead of base64 since it's
            // already loaded into memory
            return {
              filepath: fileName,
              webviewPath: cameraPhoto.webPath
            };
          }
        });
      } // Delete picture by removing it from reference data and the filesystem


      deletePicture(photo, position) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          // Remove this photo from the Photos reference data array
          this.photos.splice(position, 1); // Update photos array cache by overwriting the existing photo array

          _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["Storage"].set({
            key: this.PHOTO_STORAGE,
            value: JSON.stringify(this.photos)
          }); // delete photo file from filesystem


          const filename = photo.filepath.substr(photo.filepath.lastIndexOf('/') + 1);
          yield _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["Filesystem"].deleteFile({
            path: filename,
            directory: _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["FilesystemDirectory"].Data
          });
        });
      }

      addNewToGallery1111() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          // Take a photo
          const capturedPhoto = yield _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["Camera"].getPhoto({
            resultType: _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["CameraResultType"].Uri,
            source: _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["CameraSource"].Camera,
            quality: 100 // highest quality (0 to 100)

          });
          const savedImageFile = yield this.savePicture(capturedPhoto); // Add new photo to Photos array

          this.photos.unshift(savedImageFile); // Cache all photo data for future retrieval

          _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["Storage"].set({
            key: this.PHOTO_STORAGE,
            value: this.isDeviceHybrid ? JSON.stringify(this.photos) : JSON.stringify(this.photos.map(p => {
              // Don't save the base64 representation of the photo data,
              // since it's already saved on the Filesystem
              const photoCopy = Object.assign({}, p);
              delete photoCopy.base64;
              return photoCopy;
            }))
          });
        });
      }

    };

    PhotoService.ctorParameters = () => [{
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"]
    }];

    PhotoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"]])], PhotoService); // PURE FN: Display the photo by reading into base64 format

    function formatToBase64(storedPhotos) {
      return storedPhotos.map(p => Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["from"])( // Read each saved photo's data from the Filesystem
      _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["Filesystem"].readFile({
        path: p.filepath,
        directory: _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["FilesystemDirectory"].Data
      })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(readFile => Object.assign({}, p, {
        // Web platform only: Save the photo into the base64 field
        base64: "data:image/jpeg;base64,".concat(readFile.data)
      }))));
    }
    /***/

  }
}]);
//# sourceMappingURL=camera-camera-module-es5.js.map