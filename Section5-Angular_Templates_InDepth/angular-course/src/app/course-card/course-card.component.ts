import { AfterContentInit, AfterViewInit, Component, ContentChildren, ElementRef, EventEmitter, Input, OnInit, Output, QueryList, TemplateRef, ViewChild } from '@angular/core';
import { Course } from '../model/course';
import { NgIf, NgSwitch, NgSwitchCase, NgTemplateOutlet } from '@angular/common';
import { CourseImageComponent } from '../course-image/course-image.component';

@Component({
  selector: 'course-card',
  imports: [NgSwitch,NgSwitchCase,NgIf,NgTemplateOutlet],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css'
})
export class CourseCardComponent implements OnInit, AfterViewInit, AfterContentInit{
  
  @Input()
  course!: Course;
  
  // Input property for ngIf template usage 
  @Input()
  noImageTpl:TemplateRef<any> | undefined;

  // Input property for ngFor template usage
  @Input()
  cardIndex: number = 0;

  @Output()
  courseSelected = new EventEmitter<Course>();

  // Declare courseImage member variable with ViewChild/ContentChild decorator
  // Scope of ContentChild is limited to the current component. It has access only to the content part of the component in question.
  // @ContentChild(CourseImageComponent, {read: ElementRef})
  // image: ElementRef | undefined; 
  @ContentChildren(CourseImageComponent, {read: ElementRef})
  images: QueryList<CourseImageComponent> | undefined; 

  ngAfterViewInit() {
  }

  // Earliest possible lifecycle hook to acccess the content of the component.
  ngAfterContentInit(): void {
    console.log('Image element', this.images);
  }
  
  ngOnInit() {
    console.log('Course card component initialized');
  }

  onCourseViewed() {
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
