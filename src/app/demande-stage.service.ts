import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DemandeStageService {
  private baseUrl = 'http://localhost:8080/api/demandes'; // ✅ L'URL de ton backend Spring Boot

  constructor(private http: HttpClient) {}

  envoyerDemandeStage(formData: FormData): Observable<any> {
    return this.http.post(this.baseUrl, formData);
  }
}
