import {Component, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
    selector: 'app-students',
    templateUrl: './students.component.html',
    styleUrls: ['./students.component.css']
})
export class StudentsComponent {

    @ViewChild('f') registerForm: NgForm;

    defaultSex = 'Male';
    defaultSecret = 'pet';
    user = {
        secret: '',
        userData: {
            email: '',
            fullName: '',
            sex: '',
            username: '',
        }
    };
    submitted = false;

    constructor() {
    }

    onSubmit() {
        this.submitted = true;

        const userData = this.user.userData;
        const registerForm = this.registerForm.value;

        this.user.secret = registerForm.secret;
        userData.email = registerForm.userData.email;
        userData.fullName = registerForm.userData.fullName;
        userData.sex = registerForm.userData.sex;
        userData.username = registerForm.userData.username;

        this.registerForm.resetForm();
    }

    suggestUserName() {
        const suggestedName = 'Superuser';
        // this.registerForm.setValue({
        //     secret: 'car',
        //     userData: {
        //         email: '',
        //         fullName: '',
        //         sex: 'Male',
        //         username: suggestedName,
        //     }
        // });

        this.registerForm.form.patchValue({
            userData: {
                username: suggestedName
            }
        });
    }
}
