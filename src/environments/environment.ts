// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {


  version: '1.0',
  developerName: 'Miguel Valencia',

  api_production: '',
  api_development: 'localhost:7058',

  firebase: {
    projectId: 'project-cv-7cee1',
    appId: '1:607888338150:web:4333d31f76db15887b5f27',
    storageBucket: 'project-cv-7cee1.appspot.com',
    locationId: 'us-central',
    apiKey: 'AIzaSyAhDrmaZ1q7B0_8_DvhjeCewg8iTgRRUos',
    authDomain: 'project-cv-7cee1.firebaseapp.com',
    messagingSenderId: '607888338150',
  },
  production: false
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
