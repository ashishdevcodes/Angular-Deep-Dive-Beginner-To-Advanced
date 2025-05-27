import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { Course } from './model/course.ts';
import { CoursesService } from './services/courses.service';
import { CommonModule } from '@angular/common';
import { CONFIG_TOKEN } from './app.config.js';
import { COURSES } from '../db-data.js';
import { CourseCardComponent } from './courses/index.js';

@Component({
  selector: 'app-root',
  // imports: [CommonModule, CourseCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: false // This makes the component a standalone component, which can be used without an NgModule.
})
export class AppComponent implements OnInit, OnDestroy {

  courses: Course[] = COURSES;
  // courses$: Observable<Course[]> | undefined;
  // courses: Course[] = [];
  readonly config = inject(CONFIG_TOKEN); // Pre Angular 15: @Inject(CONFIG_TOKEN) private config: AppConfig;
  // Using inject() is the preferred way to access an injection token in Angular 15+.
  
  constructor(
    private coursesService: CoursesService) {
  }
  ngOnDestroy(): void {
    console.log('AppComponent destroyed');
  }

  ngOnInit() {
    // this.courses$ = this.coursesService.loadCourses();
    // this.coursesService.loadCourses().subscribe(courses => {
    //   this.courses = courses;
    //   console.log('Courses loaded:', this.courses);
    // });
  }

  save(course: Course) {
    this.coursesService.saveCourse(course).subscribe(() => {
      console.log('Course saved');
    });
  }

  onEditCourse() {
    // const course = this.courses[0];
    // const newCourse:any = {...course};
    // newCourse.description = 'Updated course description';
    // this.courses[0] = newCourse;
    // this.courses = [];
    this.courses[1].category = 'ADVANCED';
  }
}
