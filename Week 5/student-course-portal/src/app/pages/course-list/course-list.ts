import {
  CommonModule
} from '@angular/common';

import {
  Component,
  OnInit
} from '@angular/core';

import {
  Router
} from '@angular/router';

import {
  CourseService
} from '../../services/course';

import {
  Course
} from '../../models/course.model';

@Component({
  selector: 'app-course-list',

  standalone: true,

  imports: [
    CommonModule
  ],

  templateUrl: './course-list.html',

  styleUrl: './course-list.css'
})
export class CourseList
  implements OnInit {

  courses: Course[] = [];

  errorMessage = '';

  isLoading = true;

  constructor(
    private courseService: CourseService,

    private router: Router
  ) {}

  ngOnInit(): void {

    this.courseService
      .getCourses()
      .subscribe({

        next: courses => {

          this.courses = courses;

        },

        error: error => {

          this.errorMessage =
            'Failed to load courses.';

          console.error(error);

        },

        complete: () => {

          this.isLoading = false;

        }

      });

  }

  openCourse(
    courseId: number
  ): void {

    this.router.navigate([
      'courses',
      courseId
    ]);

  }

}