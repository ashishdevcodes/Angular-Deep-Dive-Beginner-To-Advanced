import {Component, Inject, Input, OnInit} from '@angular/core';
import { COURSES_SERVICE } from '../app.component';
import { CoursesService } from '../services/courses.service';

@Component({
    selector: 'course-image',
    templateUrl: './course-image.component.html',
    styleUrls: ['./course-image.component.css'],
    standalone: false
})
export class CourseImageComponent implements OnInit {

  @Input('src')
  imageUrl:string | undefined;



  constructor(private coursesService: CoursesService) { }

  ngOnInit() {
  }

}
