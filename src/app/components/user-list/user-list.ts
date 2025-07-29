import { Component, OnInit } from '@angular/core';
import { RandomUserService } from '../../services/random-user';
import { CommonModule } from '@angular/common';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-user-list',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './user-list.html',
  styleUrl: './user-list.scss',
  animations: [
    trigger('fadeInUp', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(10px)' }),
        animate('300ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})

export class UserList implements OnInit {
  users: any[];

  constructor(private randomUserService: RandomUserService) {
    this.users = [];
  }

  ngOnInit(): void {
    this.randomUserService.getRandomUsers().subscribe(data => {
      this.users = data;
    });
  }
}
