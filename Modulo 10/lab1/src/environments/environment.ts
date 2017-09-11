// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase : {
      apiKey: "AIzaSyCclaXFx5lNb-bF_QJ2_lK3ZNsFF614HA0",
      authDomain: "apm-6-1.firebaseapp.com",
      databaseURL: "https://apm-6-1.firebaseio.com",
      projectId: "apm-6-1",
      storageBucket: "apm-6-1.appspot.com",
      messagingSenderId: "72306537399"
  }
};
