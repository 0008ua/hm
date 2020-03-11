import { Component, OnInit, ViewChild } from '@angular/core';
import { environment } from 'src/environments/environment';
import { FormGroup, FormGroupDirective, FormControl, Validators } from '@angular/forms';
import { IFeedback } from 'src/app/interfaces';
import { SharedService } from 'src/app/services/shared.service';
import { Location } from '@angular/common';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit {
  environment = environment;
  feedbackForm: FormGroup;
  feedback: IFeedback;
  @ViewChild('feedbackFormDirective', { static: false }) feedbackFormDirective: FormGroupDirective;
  processing = false;

  constructor(
    private location: Location,
    private sharedService: SharedService,
    private matSnackBar: MatSnackBar,

  ) { }

  ngOnInit() {
    this.feedbackForm = new FormGroup({
      message: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(500),
      ]),
      name: new FormControl('', [
        Validators.required,
      ]),
      contacts: new FormControl('', [
        Validators.required,
      ]),
      // recaptcha: new FormControl('', [
      //   Validators.required
      // ])
    });
  }

  onFeedbackFormSubmit() {
    this.processing = true;
    this.feedback = this.feedbackForm.value;
    this.sharedService.sendFeedbackMessage(this.feedback, 'sddfsdf'
      //  this.feedbackForm.get('recaptcha').value
       )
      .subscribe(
        res => {
          this.matSnackBar.open(res, '', { duration: 3000 });
          console.log('feedback ', res);
          this.processing = false;
          this.resetForm();
          // this.location.back();

        },
        err => {
          this.processing = false;
          console.log('feedback err ', err);
          this.matSnackBar.open(err.error.message, '', { duration: 3000 });
        }
      );
  }

  resetForm() {
    if (this.feedbackFormDirective) {
      this.feedbackFormDirective.resetForm();
    }
  }
}