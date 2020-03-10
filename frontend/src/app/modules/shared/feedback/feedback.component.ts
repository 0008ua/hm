import { Component, OnInit, ViewChild } from '@angular/core';
import { environment } from 'src/environments/environment';
import { FormGroup, FormGroupDirective, FormControl, Validators } from '@angular/forms';
import { IFeedback } from 'src/app/interfaces';

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
    // private location: Location,
    // private ngUserManService: NgUserManService,
    // private matSnackBar: MatSnackBar,

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
    // this.processing = true;
    // this.feedback = this.feedbackForm.value;
    // this.ngUserManService.sendFeedbackMessage(this.feedback, this.feedbackForm.get('recaptcha').value)
    //   .subscribe(
    //     res => {
    //       // console.log('feedback ', res);
    //       this.matSnackBar.open('Повідомлення надіслано. Ми зв\'яжемось з вами найближчим часом', '',
    //         { duration: 5000 });
    //       this.processing = false;
    //       this.resetForm();
    //       this.location.back();

    //     },
    //     err => {
    //       this.processing = false;
    //       this.matSnackBar.open('Сталася помилка. Повідомлення не надіслано. Спробуйте пізнше', '',
    //         { duration: 3000, panelClass: 'warn' });
    //       // console.log('feedback err ', err);
    //     }
    //   );
  }

  resetForm() {
    if (this.feedbackFormDirective) {
      this.feedbackFormDirective.resetForm();
    }
  }
}