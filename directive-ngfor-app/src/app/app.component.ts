import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  productList: Array<string> = ['phone', 'Galaxy 9.0', 'BlackBerrry 10z', 'Mi'];
}
