// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  usecaseId: "1",
  apiEndPoint: 'http://localhost:5000/api/v1',
  public:'http://localhost:5000/assets/pdfs/',
  firebase: {
    apiKey: 'AIzaSyDP7ulefaLJ8fz5MXZZkoD9FzN5h6MI7sQ',
    authDomain: 'ml-acc.firebaseapp.com',
    databaseURL: 'https://ml-acc.firebaseio.com',
    projectId: 'ml-acc',
    storageBucket: 'ml-acc.appspot.com',
    messagingSenderId: '529743086184'
  } 
};


/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
