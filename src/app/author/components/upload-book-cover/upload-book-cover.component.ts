import { Component } from '@angular/core';

@Component({
  selector: 'app-upload-book-cover',
  standalone: true,
  imports: [],
  templateUrl: './upload-book-cover.component.html',
  styleUrl: './upload-book-cover.component.css'
})

export class UploadBookCoverComponent {
  imageUrl: string | ArrayBuffer | null = null;

  onFileSelected(event: any) {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.imageUrl = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }
}
