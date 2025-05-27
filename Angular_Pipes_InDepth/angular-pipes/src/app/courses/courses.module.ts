import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseCardComponent, CourseImageComponent } from '.';
import { FilterByCategoryPipe } from './filter-by-category.pipe';

@NgModule({
    declarations: [
        CourseCardComponent,
        CourseImageComponent,
        FilterByCategoryPipe
    ],
    imports: [CommonModule],
    exports: [CourseCardComponent, CourseImageComponent, FilterByCategoryPipe]
})
export class CoursesModule { }
