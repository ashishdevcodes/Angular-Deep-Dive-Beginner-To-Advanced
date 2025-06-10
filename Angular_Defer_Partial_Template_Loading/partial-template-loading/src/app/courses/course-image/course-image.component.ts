import { Component, Input } from '@angular/core';
import { CoursesService } from '../../services/courses.service';

@Component({
  selector: 'course-image',
  // imports: [],
  templateUrl: './course-image.component.html',
  styleUrl: './course-image.component.css',
  standalone: true // This component is standalone, so it does not need to be declared in a module
})
export class CourseImageComponent {
  @Input('src')
  imageUrl: string | undefined;



  constructor(private coursesService: CoursesService) { }

  ngOnInit() {
  }
}
