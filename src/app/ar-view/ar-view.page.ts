import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ar-view',
  templateUrl: './ar-view.page.html',
  styleUrls: ['./ar-view.page.scss'],
})
export class ArViewPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

/*
this.FeatureGeo             = "geo";
        this.FeatureImageTracking   = "image_tracking";
        this.FeatureInstantTracking = "instant_tracking";
        this.FeatureObjectTracking  = "object_tracking";
        this.Feature2DTracking      = "2d_tracking";
        */
        
  ionViewDidEnter() {

      var startupConfiguration: any = {"camera_position": "back"};

      WikitudePlugin.loadARchitectWorld(
          function(success) {
            console.log("ARchitect World loaded successfully.");
          },
          function(fail) {
            console.log("Failed to load ARchitect World!");
          },          
          "www/assets/01_ImageTracking_2_DifferentTargets/index.html", // (1) if you have a IR (Image Recognition) World, use this
          ["image_tracking"], // (1) if you have a IR (Image Recognition) World, use this
        //  "www/assets/07_3dModels_6_3dModelAtGeoLocation/index.html",  // (2) if you have a GeoLocation World, use this
        //  ["geo"],  // (2) if you have a GeoLocation World, use this


        
         //   "www/assets/08_PointOfInterest_3_MultiplePois/index.html",  // (2) if you have a GeoLocation World, use this
        //  ["geo"],  // (2) if you have a GeoLocation World, use this

         //   "www/assets04_CloudRecognition_2_ContinuousImageRecognition/index.html",  // (2) if you have a GeoLocation World, use this
        //  ["image_tracking"],  // (2) if you have a GeoLocation World, use this

        //  "www/assets/08_PointOfInterest_2_PoiWithLabel/index.html",  // (2) if you have a GeoLocation World, use this
        //  ["geo"],  // (2) if you have a GeoLocation World, use this
// you find other samples or Wikitude worlds in Wikitude Cordova Plugin
// which can be downloaded from here: https://github.com/Wikitude/wikitude-cordova-plugin/archive/v5.3.1-3.3.2.zip
          <JSON>startupConfiguration
      );
  }

}
