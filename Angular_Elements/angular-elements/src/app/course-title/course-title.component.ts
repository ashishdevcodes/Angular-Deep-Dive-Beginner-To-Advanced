import { Component, Input } from '@angular/core';

@Component({
  selector: 'course-title',
  // imports: [],
  templateUrl: './course-title.component.html',
  styleUrl: './course-title.component.css',
  standalone: false // This makes the component a standalone component, which can be used without an NgModule.
})
export class CourseTitleComponent {

@Input()
  title:string = 'Angular Fundamentals';
}
