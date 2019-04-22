import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from './services/header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public displayUsecasePageLink = false;
  @Input() title: string;

  constructor(private router: Router, private headerService: HeaderService) { }

  ngOnInit() {
    this.headerService.navigatedUrl.subscribe((res) => {
      console.log(res);
      if (res !== '/home') {
        this.displayUsecasePageLink = true;
      } else  {
        this.displayUsecasePageLink = false;
      }
    });
  }

  public navigateToHome() {
    this.router.navigate(['home']);
  }

  public navigate(path: string) {
    this.router.navigate([path]);
  }

}
