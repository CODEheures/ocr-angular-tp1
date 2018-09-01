import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {

  public userFormGroup: FormGroup

  constructor(private formBuilder: FormBuilder,
              private userService: UserService,
              private router: Router) { }

  ngOnInit() {
    this.userFormGroup = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      preferedDrink: ['', Validators.required],
      hobbies: this.formBuilder.array([])
    })
  }

  onSubmitUser() {
    this.userService.addUser({
      firstName: this.userFormGroup.value['firstName'],
      lastName: this.userFormGroup.value['lastName'],
      email: this.userFormGroup.value['email'],
      preferredDrink: this.userFormGroup.value['preferedDrink'],
      hobbies: (this.userFormGroup.value['hobbies'] && this.userFormGroup.value['hobbies'].length > 0) ?
        this.userFormGroup.value['hobbies'] : []
    })
    this.router.navigate(['/users'])
  }

  getHobbiesFormArray(): FormArray {
    return this.userFormGroup.get('hobbies') as FormArray
  }

  addHobbyControl() {
    this.getHobbiesFormArray().push(this.formBuilder.control('', Validators.required))
  }

}
