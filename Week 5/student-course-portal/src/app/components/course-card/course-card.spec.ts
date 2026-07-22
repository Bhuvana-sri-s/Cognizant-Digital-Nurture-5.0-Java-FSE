import {
  ComponentFixture,
  TestBed
} from '@angular/core/testing';

import {
  By
} from '@angular/platform-browser';

import {
  CourseCard
} from './course-card';

import {
  Course
} from '../models/course.model';
describe('CourseCard', () => {

  let component: CourseCard;

  let fixture:
    ComponentFixture<CourseCard>;

  const mockCourse: Course = {

    id: 1,

    name: 'Data Structures',

    code: 'CS101',

    credits: 4,

    gradeStatus: 'passed'

  };

  beforeEach(async () => {

    await TestBed.configureTestingModule({

      imports: [

        CourseCard

      ]

    }).compileComponents();

    fixture =
      TestBed.createComponent(
        CourseCard
      );

    component =
      fixture.componentInstance;

    component.course =
      mockCourse;

    fixture.detectChanges();

  });

  it('should create', () => {

    expect(component)
      .toBeTruthy();

  });

  it('should display the course name', () => {

    const heading =
      fixture.debugElement
        .query(By.css('h3'))
        .nativeElement;

    expect(
      heading.textContent
    ).toContain(
      'Data Structures'
    );

  });

  it('should emit course id when enroll button is clicked', () => {

    spyOn(
      component.enrollRequested,
      'emit'
    );

    const button =
      fixture.debugElement
        .query(By.css('button'))
        .nativeElement;

    button.click();

    expect(
      component.enrollRequested.emit
    ).toHaveBeenCalledWith(1);

  });

  it('should call ngOnChanges when course changes', () => {

    spyOn(
      console,
      'log'
    );

    component.ngOnChanges({

      course: {

        currentValue: mockCourse,

        previousValue: undefined,

        firstChange: true,

        isFirstChange: () => true

      }

    });

    expect(
      console.log
    ).toHaveBeenCalled();

  });

  it('should display the course code and credits', () => {

    const content =
      fixture.nativeElement
        .textContent;

    expect(content)
      .toContain('CS101');

    expect(content)
      .toContain('4');

  });

});