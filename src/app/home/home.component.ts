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

  triggerFileInput() {
    const fileInput = document.getElementById('fileInput') as HTMLInputElement;
    fileInput.click();
  }

  handleFileInput(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      this.saveFile(file);
      this.basePhotoUploaded = true;
    }
  }

  saveFile(file: File) {
    // Hier kannst du die Logik zum Speichern der Datei implementieren
    console.log('File uploaded:', file);
  }
}