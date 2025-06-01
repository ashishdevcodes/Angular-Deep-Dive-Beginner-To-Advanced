import { Pipe, PipeTransform } from '@angular/core';
import { Course } from '../model/course.ts';

@Pipe({
  name: 'filterByCategory',
  pure: false, // Setting pure to false allows the pipe to be re-evaluated when the input changes.
  standalone: false // This makes the pipe a standalone pipe, which can be used without an NgModule.
})
export class FilterByCategoryPipe implements PipeTransform {

  transform(courses: Course[], category: string): Course[] {
    if (!courses || !category) {
      return courses;
    }

    return courses.filter(course => course.category === category);
  }

}
