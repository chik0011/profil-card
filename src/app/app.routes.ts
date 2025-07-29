import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { UserList } from './components/user-list/user-list'
import { UserCardComponent } from './components/user-card/user-card';
 
export const routes: Routes = [
    { path: '', component: UserCardComponent },
    { path: 'user-list', component: UserList },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
