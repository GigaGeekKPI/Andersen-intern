import { FormGroup } from '@angular/forms';

export function passwordValidator(group: FormGroup): object {
    let password = group.get('password');
    let confirmPassword = group.get('confirm');

    if(password.value !== confirmPassword.value) {
        return { notEqual: true };
    }

    return null;
}