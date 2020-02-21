import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { ApiService } from "../core/api.service";
import { User } from '../model/user.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  userForm: FormGroup;
  users: User[];
  viewUSer: any;

  constructor(private formBuilder: FormBuilder, private router: Router, private apiService: ApiService) { }

  onSubmit() {
    if (this.userForm.invalid) {
      return;
    }
    const USerPayload = {
      usercount: this.userForm.controls.usercount.value,
    }
    this.apiService.getUsers(USerPayload).subscribe(data => {
      if (data.results.length > 0) {
        this.users = data.results;
      } else {
      }
    });
  }

  ngOnInit() {
    this.users = [];
    this.viewUSer = [];
    this.userForm = this.formBuilder.group({
      usercount: ['', Validators.compose([Validators.required, Validators.min(0), Validators.max(20)])],
    });
  }

  viewUser(user) {
    this.viewUSer = user;
  }
}
