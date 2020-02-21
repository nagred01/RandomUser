
import { RouterModule, Routes } from '@angular/router';
import {UsersComponent} from "./users/users.component";

const routes: Routes = [
  { path: 'user', component: UsersComponent },
  { path : '', component : UsersComponent}
];

export const routing = RouterModule.forRoot(routes);