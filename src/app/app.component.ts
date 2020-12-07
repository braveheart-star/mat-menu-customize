import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'kingTiger';
  items = [
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

  new() {
    console.log('new');
  }

  selectionChange(value) {
    console.log(value);
  }
}
