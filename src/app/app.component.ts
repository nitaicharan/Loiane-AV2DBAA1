import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  myDateValue: Date;

  title = 'course';

  ngOnInit(): void {
    this.myDateValue = new Date();
  }
}
