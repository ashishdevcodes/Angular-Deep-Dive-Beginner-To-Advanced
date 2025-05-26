import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { Course } from './model/course.ts';
import { CoursesService } from './services/courses.service';
import { CommonModule } from '@angular/common';
import { CourseCardComponent } from './course-card/course-card/course-card.component.js';
import { CourseImageComponent } from './course-image/course-image/course-image.component.js';
import { CONFIG_TOKEN } from './app.config.js';
import { COURSES } from '../db-data.js';

@Component({
  selector: 'app-root',
  imports: [CommonModule, CourseCardComponent, CourseImageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit, OnDestroy {

  courses: Course[] = COURSES;
  // courses$: Observable<Course[]> | undefined;
  // courses: Course[] = [];
  readonly config = inject(CONFIG_TOKEN); // Pre Angular 15: @Inject(CONFIG_TOKEN) private config: AppConfig;
  // Using inject() is the preferred way to access an injection token in Angular 15+.
  
  constructor(
    private coursesService: CoursesService) {
    console.log('AppComponent config:', this.config);
  }
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
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
    const course = this.courses[0];
    const newCourse:any = {...course};
    newCourse.description = 'Updated course description';
    this.courses[0] = newCourse;
    // this.courses = [];
  }
}
