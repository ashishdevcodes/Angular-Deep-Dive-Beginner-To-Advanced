import { Component, inject, Injector, OnDestroy, OnInit } from '@angular/core';
import { Course } from './model/course.ts';
import { CoursesService } from './services/courses.service';
import { appConfig, CONFIG_TOKEN } from './app.config.js';
import { COURSES } from '../db-data.js';
import { CourseTitleComponent } from './course-title/course-title.component.js';
import { createCustomElement } from '@angular/elements';
import { CourseCardComponent } from "./courses/course-card/course-card.component";
import { CourseImageComponent } from "./courses/course-image/course-image.component";
import { NgFor, NgForOf } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [NgForOf,CourseCardComponent, CourseImageComponent],
  standalone: true, // This component is standalone, so it does not need to be declared in a module
})
export class AppComponent implements OnInit, OnDestroy {

  courses: Course[] = COURSES;
  // courses$: Observable<Course[]> | undefined;
  // courses: Course[] = [];
  readonly config = inject(CONFIG_TOKEN); // Pre Angular 15: @Inject(CONFIG_TOKEN) private config: AppConfig;
  // Using inject() is the preferred way to access an injection token in Angular 15+.
  // Because field initialisers run before the constructor, the property is ready by the time the constructor runs.
  
  constructor(
    private coursesService: CoursesService, private injector:Injector
  ) {
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
    // const htmlElement = createCustomElement(CourseTitleComponent, { injector: this.injector });
    // customElements.define('course-title', htmlElement);
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

  onCourseSelected(course:Course){
      console.log("Card Clicked: ", course);
  }
}
