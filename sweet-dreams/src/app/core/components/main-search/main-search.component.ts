import { Component } from '@angular/core';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormField, MatFormFieldControl } from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-main-search',
  standalone: true,
  imports: [MatFormField, MatIconModule],
  templateUrl: './main-search.component.html',
  styleUrl: './main-search.component.css',
  providers: [
    {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {
      appearance: 'fill'
    }}
  ]
})
export class MainSearchComponent {
}
