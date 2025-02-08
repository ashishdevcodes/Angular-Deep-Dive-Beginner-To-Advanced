import { Component, ElementRef, Input, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { COURSES } from '../db-data';
import { Course } from './model/course';
import { CourseCardComponent } from './course-card/course-card.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    standalone: false
})
export class AppComponent {

    courses = [...COURSES];

    // Obtain a reference to course-card component using ViewChild decorator
    // It can be done in two ways: one is by using the template reference variable and the other is by using the component class name.
    // Scope of the ViewChild decorator is limited to the component where it is defined.
    // If you want to access the child component in the parent component, you have to use the @ViewChild decorator.
    // First way: using the template reference variable
    // @ViewChild(CourseCardComponent)
    // @ViewChild('cardRef1')
    // Second way: using the component class name
    // card1: CourseCardComponent;
    // @ViewChild('cardRef1',{read:ElementRef})
    // card1: ElementRef;
    // @ViewChild('courseImage')
    // courseImage: ElementRef;
    // @ViewChild('cardRef2')
    // card2: CourseCardComponent;
    // @ViewChild('container')
    // containerDiv:ElementRef

    // ViewChildren decorator is used to obtain a reference to multiple child components.
    // It is used to obtain a reference to all the child components of the specified type.
    // It can be used with read property to obtain a reference to the native element of the child component.
    // It can be used with the changes property to subscribe to the changes in the QueryList.
    @ViewChildren(CourseCardComponent,{read:ElementRef})
    cards: QueryList<CourseCardComponent>;

    // ngAfterViewInit() is called after the view is initialized and the child components are available.
    // Avoid using this hook to fetch data from the server. Use ngOnInit() instead.
    // Avoid changing the data in the component in this hook. Use ngOnInit() instead. 
    // If you change the data in this hook, it will trigger change detection and may cause an infinite loop.
    ngAfterViewInit() {
        // console.log("Course Image: ", this.courseImage);
        // console.log("Card2: ", this.card2);
        // console.log("container: ", this.containerDiv);

        // Generate samples of all properties of the cards, which are available in the QueryList and log them to the console.
        console.log(this.cards);
        // this.cards.changes.subscribe(cards => {
        //     console.log(cards);
        // });


    }

    onCourseSelected(course: Course) {
        // console.log("Card1: ", this.card1);
        // console.log("Card2: ", this.card2);
        // console.log("container: ", this.containerDiv);
    }

    onCourseEdited() {
        this.courses.push({
            id: 1,
            description: "Angular core deep dive",
            iconUrl: 'https://s3-us-west-1.amazonaws.com/angular-university/course-images/angular-core-in-depth-small.png',
            longDescription: "A detailed walk-through of the most important part of Angular - the Core and Common modules",
            category: 'INTERMEDIATE',
            lessonsCount: 10
        })
    }
}
