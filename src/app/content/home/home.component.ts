import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  basePhotoUploaded = false;
  replacePhotoUploaded = false;
  facesSwapped = false;
  uploadedPhotoUrl: string | ArrayBuffer | null = null;
  replacePhotoUrl: string | ArrayBuffer | null = null;
  resultPhotoUrl: string | ArrayBuffer | null = null;

  triggerFileInput(inputId: string) {
    const fileInput = document.getElementById(inputId) as HTMLInputElement;
    if (fileInput) {
      fileInput.click();
    } else {
      console.error(`File input element with id '${inputId}' not found.`);
    }
  }

  handleFileInput(event: Event, type: 'base' | 'replace') {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      this.saveFile(file);
      if (type === 'base') {
        this.basePhotoUploaded = true;
        this.displayUploadedPhoto(file, 'base');
      } else {
        this.replacePhotoUploaded = true;
        this.displayUploadedPhoto(file, 'replace');
      }
    }
  }

  saveFile(file: File) {
    // Hier kannst du die Logik zum Speichern der Datei implementieren
    console.log('File uploaded:', file);
  }

  displayUploadedPhoto(file: File, type: 'base' | 'replace') {
    const reader = new FileReader();
    reader.onload = () => {
      if (type === 'base') {
        this.uploadedPhotoUrl = reader.result;
      } else {
        this.replacePhotoUrl = reader.result;
      }
    };
    reader.readAsDataURL(file);
  }

  isImage(url: string | ArrayBuffer | null): boolean {
    if (typeof url === 'string') {
      return url.startsWith('data:image');
    }
    return false;
  }

  swapFaces() {
    // Hier kannst du die Logik zum Tauschen der Gesichter implementieren
    console.log('Faces swapped');
    this.resultPhotoUrl = this.uploadedPhotoUrl; // Beispiel: Ergebnis ist das gleiche wie das hochgeladene Foto
    this.facesSwapped = true;
  }
}