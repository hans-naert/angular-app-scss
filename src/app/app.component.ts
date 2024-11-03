import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TestScssComponent } from "./test-scss/test-scss.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TestScssComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-app-scss';
}
