import { AfterContentChecked, AfterViewChecked, Attribute, Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { Course } from '../../model/course.ts';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'course-card',
  // imports: [CommonModule],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css',
  standalone: false, // This makes the component a standalone component, which can be used without an NgModule.
})
export class CourseCardComponent implements OnChanges, AfterContentChecked, AfterViewChecked {
  @Input()
  course!: Course;

  @Input()
  cardIndex: number | undefined;

  @Output('courseChanged')
  courseEmitter = new EventEmitter<Course>();


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
}
