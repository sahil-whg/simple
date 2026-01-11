import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class JsonFormatterService {
  private apiUrl = 'http://localhost:8000/api/format/';

  constructor(private http: HttpClient) {}

  format(json: string) {
    return this.http.post<any>(this.apiUrl, { json });
  }
}
