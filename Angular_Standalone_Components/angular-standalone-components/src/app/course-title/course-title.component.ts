import { Component, Input } from '@angular/core';

@Component({
  selector: 'course-title',
  // imports: [],
  templateUrl: './course-title.component.html',
  styleUrl: './course-title.component.css',
  standalone: true // This component is standalone, so it does not need to be declared in a module
})
export class CourseTitleComponent {

@Input()
  title:string = 'Angular Fundamentals';
}
