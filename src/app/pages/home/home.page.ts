import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiCoinkServiceService } from 'src/app/services/api-coink-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private apiCoinkService: ApiCoinkServiceService,private routerService: Router) { }

  ngOnInit() {
    //this.getDocumentTypes()
  }
  
  goToRegister(){
    this.routerService.navigateByUrl("/register")
  }

}
