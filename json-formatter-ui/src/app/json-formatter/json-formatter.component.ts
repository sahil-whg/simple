import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { JsonFormatterService } from '../json-formatter/json-formatter.component.service';

@Component({
  selector: 'app-json-formatter',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './json-formatter.component.html',
})
export class JsonFormatterComponent {
  inputJson = '';
  outputJson = '';
  error = '';

  constructor(private service: JsonFormatterService) {}

  formatJson() {
    this.error = '';
    this.outputJson = '';

    this.service.format(this.inputJson).subscribe({
      next: res => this.outputJson = res.formatted,
      error: err => this.error = err.error?.error || 'Invalid JSON'
    });
  }
}
