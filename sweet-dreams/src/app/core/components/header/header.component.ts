import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MainSearchComponent } from '../main-search/main-search.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MainSearchComponent, MatToolbarModule, MatInputModule],
  templateUrl: './header.component.html',
  // template: '<div>hello</div>'
})
export class HeaderComponent {}
