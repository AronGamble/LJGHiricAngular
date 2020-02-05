import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { JobTypeItem } from '../Models/job-type-item';
import { interval, Subscription, Observable } from 'rxjs';


@Component({
  selector: 'app-vip',
  templateUrl: './vip.component.html',
  styleUrls: ['./vip.component.css']
})
export class VipComponent implements OnInit, OnDestroy {

  submitMessage = '';
  selected = 'option2';

  obs: Subscription;
obs2: Subscription;


  jobTypeOptions: JobTypeItem[] = [
    { id: '1', description: 'Contract' },
    { id: '2', description: 'Permanent' }
  ];

  detailsForm = this.fb.group({
    username: [''],
    password: ['']
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit() {

    // Custom Observable

    // this.obs = interval(1000).subscribe(data => { console.log(data); });

    // const customOntervalObservable = Observable.create((observer: { next: (arg0: string) => void; }) => {
    //   let count = 0;
    //   setInterval(() => {
    //     observer.next('Text output, could be a number or anything');
    //     count++;
    //   }, 1000);

    // });

    // this.obs2 = customOntervalObservable.subscribe((data: any) => {
    //   console.log('x' + data);
    // });

    document.body.classList.add('bg-account-pages');
    document.body.classList.add('py-4');
    document.body.classList.add('py-sm-0');

  }


  onSubmit(){

  }


  ngOnDestroy() {

    // this.obs.unsubscribe();
    // this.obs2.unsubscribe();
  }

}
