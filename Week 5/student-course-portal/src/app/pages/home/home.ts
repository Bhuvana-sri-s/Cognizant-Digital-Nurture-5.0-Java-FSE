import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CourseService } from '../../services/course';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit {

  portalTitle = 'Student Course Portal';

  studentName = '';

  coursesAvailable = 0;

  enrolledCourses = 0;

  gpa = 3.8;

  constructor(
    private courseService: CourseService
  ) {}

  ngOnInit(): void {

    this.courseService
      .getCourses()
      .subscribe({

        next: (courses) => {
          this.coursesAvailable = courses.length;
        },

        error: (error) => {
          console.error(
            'Failed to load courses:',
            error
          );
        }

      });

  }

  enrollCourse(): void {

    this.enrolledCourses++;

    alert(
      'Course enrolled successfully!'
    );

  }

}