import { Component } from '@angular/core';

@Component({
  selector: 'app-main-wrapper',
  templateUrl: './main-wrapper.component.html',
  styleUrls: ['./main-wrapper.component.css']
})
export class MainWrapperComponent {
  alumnos: Array<string> = ['Franco', 'Rodrigo', 'Maximiliano', 'Jonathan'] ;
}
