import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Course } from '../model/course';
import { NgIf, NgStyle, NgSwitch, NgSwitchCase } from '@angular/common';

@Component({
  selector: 'course-card',
  imports: [NgIf,NgSwitch,NgSwitchCase],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css'
})
export class CourseCardComponent {
  @Input(
    { required: true }
  ) course: Course;
  @Input(
    { required: true }
  ) index: number;

  @Output()
  courseSelected = new EventEmitter<Course>();

  // Input property for ngFor template usage
  @Input()
  cardIndex: number;


  onCourseViewed() {
    console.log('Course card was viewed');
    this.courseSelected.emit(this.course);
  }

  isImageVisible() {
    return this.course && this.course.iconUrl;
  }

  cardClasses() {
    if (this.course.category === 'BEGINNER') {
      return {
        'course-card beginner': true,
      }

    }
  }

  cardStyles() {
    return {
      // 'text-decoration': 'underline',
      'background-image': 'url(' + this.course.iconUrl + ')' // this.course.iconUrl
    }
  }
}
