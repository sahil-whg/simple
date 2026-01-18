import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { JsonFormatterService } from '../json-formatter/json-formatter.component.service';
import JSON5 from 'json5';

@Component({
  selector: 'app-json-formatter',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './json-formatter.component.html',
  styleUrls: ['./json-formatter.component.css']

})
export class JsonFormatterComponent {
  inputJson = '';
  outputJson = '';
  error = '';

  constructor(private service: JsonFormatterService) {}

  formatJson() {
    if (!this.inputJson || !this.inputJson.trim()) {
      return;
    }
  
    try {
      const parsed = JSON5.parse(this.inputJson);
      this.inputJson = JSON.stringify(parsed, null, 2);

    } catch(error) {
      console.log('error', error);
      this.inputJson = this.looseFormat(this.inputJson);

      // If parsing fails, do nothing
      // User keeps original input
    }
  }
  
  looseFormat(input: string): string {
    let indent = 0;
    const INDENT = 2;
  
    return input
      .replace(/([{[])/g, '$1\n')
      .replace(/([}\]])/g, '\n$1')
      .replace(/,/g, ',\n')
      .split('\n')
      .map(line => {
        if (line.match(/^[}\]]/)) indent -= INDENT;
        const padded = ' '.repeat(Math.max(indent, 0)) + line.trim();
        if (line.match(/[{[]$/)) indent += INDENT;
        return padded;
      })
      .join('\n');
  }
  
}
