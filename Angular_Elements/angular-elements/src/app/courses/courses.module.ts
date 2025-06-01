import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseCardComponent, CourseImageComponent } from '.';
import { FilterByCategoryPipe } from './filter-by-category.pipe';
import { CourseTitleComponent } from '../course-title/course-title.component';

@NgModule({
    declarations: [
        CourseCardComponent,
        CourseImageComponent,
        FilterByCategoryPipe,
        CourseTitleComponent
    ],
    imports: [CommonModule],
    exports: [CourseCardComponent, CourseImageComponent, FilterByCategoryPipe, CourseTitleComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CoursesModule { }
