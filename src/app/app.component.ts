import { Component } from '@angular/core';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['../demo-styling.css']
})
export class AppComponent {
  title = 'Boomble Party';
  ngOnInit(): void {
    initFlowbite();
  }
}
