import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';






@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule,FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Angular latest and SpringBoot Full Stack App');
}
