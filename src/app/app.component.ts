import { Component, OnInit  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserCardComponent } from './components/user-card/user-card';
import { Injectable } from '@angular/core';
import { RandomUserService } from './services/random-user';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-root',
  imports: [CommonModule, UserCardComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  user = null;

  constructor(private randomUserService: RandomUserService) {}

  ngOnInit(): void {
    this.randomUserService.getRandomUser().subscribe(data => {
      this.user = data;
    });
  }
}
