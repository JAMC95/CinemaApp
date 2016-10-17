import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import {MoviesModule} from "./modules/movie.module";

platformBrowserDynamic().bootstrapModule(MoviesModule);