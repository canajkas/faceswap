import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FaceswapService {
  private baseUrl = 'https://your-server-url.com/api'; // Ersetze dies durch deine Server-URL

  constructor(private http: HttpClient) {}

  uploadFile(file: File, endpoint: string): Observable<any> {
    const formData = new FormData();
    formData.append('file', file);

    return this.http.post(`${this.baseUrl}/${endpoint}`, formData);
  }
}