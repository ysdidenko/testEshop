import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { StoreService } from 'src/app/shared/services/store.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private storeService: StoreService,
    private snackBar: MatSnackBar
  ) {
    this.form = this.fb.group({
      from: [],
      subject: [],
      message: [],
    });
  }

  sendMessage(): void {
    this.storeService
      .postMessage({
        to: 'not sure why we should send this field...',
        from: this.form.controls['from'].value,
        subject: this.form.controls['subject'].value,
        message: this.form.controls['message'].value,
      })
      .subscribe(
        (success) => {
          this.form.reset();
          this.snackBar.open('Your request was successfully sent', 'OK');
        },
        (error) => {
          this.snackBar.open(
            "Ooops. We couldn't send your request.",
            'Dismiss'
          );
        }
      );
  }
}
