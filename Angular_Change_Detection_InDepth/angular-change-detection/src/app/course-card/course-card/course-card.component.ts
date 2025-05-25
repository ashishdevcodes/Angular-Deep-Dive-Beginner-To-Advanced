import { Attribute, ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, Output } from '@angular/core';
import { Course } from '../../model/course.ts';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'course-card',
  imports: [CommonModule],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseCardComponent {
  @Input()
  course!: Course;

  @Input()
  cardIndex: number | undefined;

  @Output('courseChanged')
  courseEmitter = new EventEmitter<Course>();


  constructor(@Attribute('type') private type: string, private cd : ChangeDetectorRef) {
    console.log('CourseCardComponent type:', this.type);
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
