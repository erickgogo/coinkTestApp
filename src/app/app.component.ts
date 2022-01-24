import { Component } from '@angular/core';
import { LoaderData, LoaderService } from './services/loader-service.service';
 //import { ScreenOrientation } from '@awesome-cordova-plugins/screen-orientation/ngx';
 //import { ScreenOrientation } from '@awesome-cordova-plugins/screen-orientation';
 //import { ScreenOrientation } from '@ionic-native/screen-orientation';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public loader: boolean= false
  constructor(private loaderService: LoaderService) {
    this.loaderService.loader.subscribe((loaderData: LoaderData) => {
      this.loader = loaderData.show as boolean;
    });
  }

}
