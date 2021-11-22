import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blank',
  templateUrl: './blank.component.html',
  styleUrls: ['./blank.component.css']
})
export class BlankComponent implements OnInit {
  customTitle: string = 'Challenge';
  customIcon: string = 'favicon';

  constructor(public router: Router) {
    switch(this.router.url)
    {
      case '/dashboard':
      {
        this.customTitle = 'Dashboard';
        this.customIcon = 'home';
        break;
      }
      case '/projects':
      {
        this.customTitle = 'Projects';
        this.customIcon = 'projects';
        break;
      }
      case '/calendar':
      {
        this.customTitle = 'Calendar';
        this.customIcon = 'calendar';
        break;
      }
      case '/documents':
      {
        this.customTitle = 'Documents';
        this.customIcon = 'documents';
        break;
      }
      case '/reports':
      {
        this.customTitle = 'Reports';
        this.customIcon = 'reports';
        break;
      }
    };
  }

  ngOnInit() {
  }

}
