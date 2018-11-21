// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  stocks_api:'https://api.iextrading.com/1.0/stock/market',
  aws_clientId: '747nv187qvhdo1d2919abddqc6',
  aws_userPoolId: 'us-east-1_9yH01PsjH',
  aws_region:'us-east-1',
  aws_auth_url: 'https://trackstocks.auth.us-east-1.amazoncognito.com',
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
