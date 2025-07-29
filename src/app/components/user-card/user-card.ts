import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RandomUserService } from '../../services/random-user';

@Component({
  selector: 'app-user-card',
  standalone: true, 
  imports: [CommonModule, RouterModule],
  templateUrl: './user-card.html',
  styleUrls: ['./user-card.scss']
})
export class UserCardComponent implements OnInit {
  user: any;

  constructor(private randomUserService: RandomUserService) {}

  ngOnInit(): void {
    this.randomUserService.getRandomUser().subscribe(data => {
      this.user = data;
    });
  }
}
