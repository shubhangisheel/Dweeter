"use strict";
require('core-js');
require('reflect-metadata');
require('zone.js/dist/zone');
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
//import { enableProdMode } from '@angular/core';
//import { environment } from './environments/environment';
var app_1 = require('./app');
// if (environment.production) {
//   enableProdMode();
// }
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_1.AppModule);
//# sourceMappingURL=main.js.map