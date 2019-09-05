import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'assignment3';

  loadedFeature = 'recipe';
  onNavigation(feature2: string){
    this.loadedFeature = feature2;
  }
}
