import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { COURSES } from '../db-data';
import { Course } from './model/course';
import { CourseCardComponent } from './course-card/course-card.component';
import { HighlightedDirective } from './directives/highlighted.directive';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { CoursesService } from './services/courses.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: false
})
export class AppComponent implements OnInit {


  courses$: Observable<Course[]> | undefined;
  // courses: Course[] = [];

  constructor(private coursesService: CoursesService) {
  }

  ngOnInit() {
    // this.http.get<Course[]>('api/courses', { params }).subscribe(courses => {
    //   this.courses = courses;
    // });
    this.courses$ = this.coursesService.loadCourses();
  }

  save(course: Course) {
    this.coursesService.saveCourse(course).subscribe(() => {
      console.log('Course saved');
    });
  }
}
