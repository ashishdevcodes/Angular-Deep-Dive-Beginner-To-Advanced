import { Component, Input } from '@angular/core';
import { CoursesService } from '../../services/courses.service';

@Component({
  selector: 'course-image',
  // imports: [],
  templateUrl: './course-image.component.html',
  styleUrl: './course-image.component.css',
  standalone: false, // This makes the component a standalone component, which can be used without an NgModule.
})
export class CourseImageComponent {
  @Input('src')
  imageUrl: string | undefined;



  constructor(private coursesService: CoursesService) { }

  ngOnInit() {
  }
}
