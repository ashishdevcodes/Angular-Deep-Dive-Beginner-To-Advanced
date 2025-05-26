import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseCardComponent, CourseImageComponent } from '.';

@NgModule({
    declarations: [
        CourseCardComponent,
        CourseImageComponent
    ],
    imports: [CommonModule],
    exports: [CourseCardComponent, CourseImageComponent]
})
export class CoursesModule { }
