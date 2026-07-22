import {
  Component,
  EventEmitter,
  Input,
  Output,
  OnChanges,
  SimpleChanges
} from '@angular/core';

@Component({
  selector: 'app-student-card',
  imports: [],
  templateUrl: './student-card.html',
  styleUrl: './student-card.css'
})
export class StudentCard implements OnChanges {

  @Input() studentName = '';

  @Input() studentGpa = 0;

  @Output() editProfile = new EventEmitter<string>();

  ngOnChanges(changes: SimpleChanges) {

    if (changes['studentName']) {
      console.log(
        'Student name changed:',
        changes['studentName'].currentValue
      );
    }

  }

  onEditProfile() {
    this.editProfile.emit(this.studentName);
  }

}