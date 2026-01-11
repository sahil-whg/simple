import { Component } from '@angular/core';
import { JsonFormatterComponent } from './json-formatter/json-formatter.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [JsonFormatterComponent],
  template: `<app-json-formatter></app-json-formatter>`,
})
export class AppComponent {}
