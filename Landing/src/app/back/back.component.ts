import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-back',
  templateUrl: './back.component.html',
  styleUrls: ['./back.component.css']
})
export class BackComponent implements OnInit {

  @Input() buttonText = 'Back to Previous Page';

  constructor(private location: Location) { }

  ngOnInit() {
  }

  goBack() {
    this.location.back();

  }


}
