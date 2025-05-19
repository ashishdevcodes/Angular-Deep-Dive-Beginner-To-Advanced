import { Component, Inject, InjectionToken, OnInit } from '@angular/core';
import { Course } from './model/course';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CoursesService } from './services/courses.service';
import { CONFIG_TOKEN, APP_CONFIG, AppConfig } from './config';

export const COURSES_SERVICE = new InjectionToken<CoursesService>('COURSES_SERVICE');
// function coursesServiceProvider(http: HttpClient) {
//   return new CoursesService(http);
// }

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: false,
  providers: [
    CoursesService
  ]
  // providers: [
  //   { 
  //     provide: CONFIG_TOKEN, 
  //     // useFactory: () => APP_CONFIG 
  //     useValue: APP_CONFIG 
  //   }]
})
export class AppComponent implements OnInit {


  courses$: Observable<Course[]> | undefined;
  // courses: Course[] = [];

  constructor(private coursesService: CoursesService,
    // @Inject(CONFIG_TOKEN) private config: AppConfig
  ) {
    // console.log('AppConfig', config);
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
