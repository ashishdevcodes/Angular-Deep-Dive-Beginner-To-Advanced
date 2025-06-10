import { Pipe, PipeTransform } from '@angular/core';
import { Course } from '../model/course.ts';

@Pipe({
  name: 'filterByCategory',
  pure: false, // Setting pure to false allows the pipe to be re-evaluated when the input changes.
  standalone: true // This component is standalone, so it does not need to be declared in a module
})
export class FilterByCategoryPipe implements PipeTransform {

  transform(courses: Course[], category: string): Course[] {
    if (!courses || !category) {
      return courses;
    }

    return courses.filter(course => course.category === category);
  }

}
