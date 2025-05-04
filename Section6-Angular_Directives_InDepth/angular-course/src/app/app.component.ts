import { AfterViewInit, Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { COURSES } from '../db-data';
import { Course } from './model/course';
import { CourseCardComponent } from './course-card/course-card.component';
import { HighlightedDirective } from './directives/highlighted.directive';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    standalone: false
})
export class AppComponent implements AfterViewInit {

    courses = COURSES;


    @ViewChildren(CourseCardComponent, { read: ElementRef })
    cards: QueryList<ElementRef> | undefined;

    // One way to access directive instance:- @ViewChild(HighlightedDirective)
    
    // Another way to access directives:
    // This will get the first instance of HighlightedDirective, 
    // in cases where the component has multiple directives applied to it,
    // we can use the @ViewChildren decorator to get all instances of the directive.
    @ViewChild(CourseCardComponent,{read: HighlightedDirective}) 
    highlighted: HighlightedDirective | undefined;

    constructor() {

    }

    ngAfterViewInit() {
        console.log(this.highlighted)
    }

    onCourseSelected(course: Course) {

    }


    onToggle($event: boolean) {
        console.log('Toggle event', $event);
    }
}
