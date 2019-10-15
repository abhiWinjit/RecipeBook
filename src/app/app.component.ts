import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // title = 'assignment3';

  // loadedFeature = 'recipe';
  // onNavigation(feature2: string){
  //   this.loadedFeature = feature2;
  // }
  constructor(private authService: AuthService) { }
  ngOnInit() {
    this.authService.autoLogin();
  }
}
