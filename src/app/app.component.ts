import { Component, ElementRef, ViewChild } from '@angular/core';
import { WhichImageIsService } from './which-image-is.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'app works!';

  file;
  
  response;

  constructor(private fb: FormBuilder,
    private whichImageIsService: WhichImageIsService) {
  }

  onFileChange(event) {
    if(event.target.files && event.target.files.length > 0) {
      let file = event.target.files[0];
      this.file = file;
    }
  }

  onSubmit() {
      this.whichImageIsService.askForImage(this.file)
        .subscribe(res => this.response = res);
  }

}
