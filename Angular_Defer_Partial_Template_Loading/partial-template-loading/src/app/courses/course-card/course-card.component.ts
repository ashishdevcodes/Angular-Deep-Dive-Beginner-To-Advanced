import { AfterContentChecked, AfterViewChecked, Attribute, Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { Course } from '../../model/course.ts';
import { NgIf, NgSwitch, NgSwitchCase } from '@angular/common';

@Component({
  selector: 'course-card',
  imports: [NgIf, NgSwitch,NgSwitchCase],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css',
  standalone: true // This component is standalone, so it does not need to be declared in a module
})
export class CourseCardComponent implements OnChanges, AfterContentChecked, AfterViewChecked {
  @Input()
  course!: Course;

  @Input()
  cardIndex: number | undefined;

  @Output('courseChanged')
  courseEmitter = new EventEmitter<Course>();

  @Output()
  courseSelected = new EventEmitter<Course>();

  constructor(@Attribute('type') private type: string) {
    // console.log('CourseCardComponent type:', this.type);
  }

  // This lifecycle hook is called after the view of the component has been checked.
  // It can be used to perform additional checks or updates after the view has been rendered.
  // It is not commonly used, but can be useful for debugging or performance optimization.
  ngAfterViewChecked(): void {
    // console.log('CourseCardComponent AfterViewChecked:');
  }

  // This lifecycle hook is called after the content of the component has been checked.
  // It can be used to perform additional checks or updates after the view has been rendered.
  ngAfterContentChecked(): void {
    // console.log('CourseCardComponent AfterContentChecked:');
    // this.course.description = "ngAfterContentChecked";
    // this.course.category = "ADVANCED";
  }

  ngOnChanges(changes: SimpleChanges): void {
    // console.log('CourseCardComponent changes:', changes);
  }

  ngOnInit() {
  }

  onTitleChanged(title: string) {
    this.course.description = title;
  }

  onSaveClicked(description: string) {

    this.courseEmitter.emit({ ...this.course, description });

  }

  onCourseViewed() {
    console.log('Course card was viewed');
    this.courseSelected.emit(this.course);
  }
}
