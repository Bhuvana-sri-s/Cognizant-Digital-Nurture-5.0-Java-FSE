import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration'
})
export class DurationPipe implements PipeTransform {

  transform(hours: number): string {

    if (hours < 24) {
      return `${hours} hours`;
    }

    const days = Math.floor(hours / 24);
    const remainingHours = hours % 24;

    return `${days} days ${remainingHours} hours`;
  }

}