import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { JobTypeItem } from '../Models/job-type-item';

@Component({
  selector: 'app-vip',
  templateUrl: './vip.component.html',
  styleUrls: ['./vip.component.css']
})
export class VipComponent implements OnInit {

  submitMessage = '';

  jobTypeOptions : JobTypeItem[] = [
    {  id : "1", description : "Contract" },
    {  id : "2", description : "Permanent" }
  ];


  detailsForm = this.fb.group({
    username: [''],
    password: ['']
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    
    document.body.classList.add('bg-account-pages');
    document.body.classList.add('py-4');
    document.body.classList.add('py-sm-0');

  }

}
