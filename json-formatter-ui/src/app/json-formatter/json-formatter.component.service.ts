import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class JsonFormatterService {
  private apiUrl = 'http://51.20.9.68/api/format/';

  constructor(private http: HttpClient) {}

  format(json: string) {
    return this.http.post<any>(this.apiUrl, { json });
  }
}
