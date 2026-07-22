import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-reactive-enrollment',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './reactive-enrollment.html',
  styleUrl: './reactive-enrollment.css'
})
export class ReactiveEnrollment {

  enrollForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.enrollForm = this.fb.group({
      studentName: [
        '',
        [Validators.required, Validators.minLength(3)]
      ],

      studentEmail: [
        '',
        [Validators.required, Validators.email],
        [this.simulateEmailCheck]
      ],

      courseId: [
        '',
        [Validators.required, this.noCourseCode]
      ],

      preferredSemester: [
        'Odd',
        Validators.required
      ],

      agreeToTerms: [
        false,
        Validators.requiredTrue
      ],

      additionalCourses: this.fb.array([])
    });
  }

  // Custom synchronous validator
  noCourseCode(control: AbstractControl): ValidationErrors | null {
    if (control.value && control.value.toString().startsWith('XX')) {
      return { noCourseCode: true };
    }

    return null;
  }

  // Custom asynchronous validator
  simulateEmailCheck(
    control: AbstractControl
  ): Promise<ValidationErrors | null> {

    return new Promise((resolve) => {

      setTimeout(() => {

        if (control.value && control.value.includes('test@')) {
          resolve({ emailTaken: true });
        } else {
          resolve(null);
        }

      }, 800);

    });
  }

  // Typed getter for FormArray
  get additionalCourses(): FormArray<FormControl<string>> {
    return this.enrollForm.get('additionalCourses') as FormArray<FormControl<string>>;
  }

  // Add new course
  addCourse(): void {
    this.additionalCourses.push(
      new FormControl('', {
        nonNullable: true,
        validators: [Validators.required]
      })
    );
  }

  // Remove course
  removeCourse(index: number): void {
    this.additionalCourses.removeAt(index);
  }

  // Submit form
  onSubmit(): void {

    if (this.enrollForm.valid) {

      console.log('Form Value:', this.enrollForm.value);

      /*
       enrollForm.value excludes disabled controls.
       enrollForm.getRawValue() includes disabled controls.
      */

      console.log(
        'Raw Form Value:',
        this.enrollForm.getRawValue()
      );

    } else {

      this.enrollForm.markAllAsTouched();

    }
  }
}