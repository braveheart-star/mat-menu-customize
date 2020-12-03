import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'kingTiger';

  currentState = [
    {
      image:
        'https://pbs.twimg.com/profile_images/838867731327807489/7S9ysf2l_200x200.jpg',
      value: 'The vicious cycle',
    },
    {
      image: 'assets/gym.svg',
      value: 'GYM solutions',
    },
  ];

  select(optionIndex: number): void {
    const temp = [...this.currentState];
    temp.splice(optionIndex, 1);
    this.currentState = [this.currentState[optionIndex], ...temp];
  }
}
