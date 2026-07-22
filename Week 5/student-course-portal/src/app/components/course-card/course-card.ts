import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges
} from '@angular/core';

import { Course } from '../../models/course.model';

@Component({
  selector: 'app-course-card',
  standalone: true,
  templateUrl: './course-card.html',
  styleUrl: './course-card.css'
})
export class CourseCard implements OnChanges {

  @Input() course!: Course;

  @Output() enrollRequested =
    new EventEmitter<number>();

  ngOnChanges(changes: SimpleChanges): void {

    if (changes['course']) {

      console.log(
        'Course changed:',
        this.course
      );

    }

  }

  enroll(): void {

    this.enrollRequested.emit(
      this.course.id
    );

  }

}