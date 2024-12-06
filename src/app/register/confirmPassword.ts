import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function confirmPassword(passwordControlName:string):ValidatorFn {
    return(control:AbstractControl): ValidationErrors | null => {
        const parent = control.parent;// 取得表單的父級（FormGroup）

        const password = parent?.get(passwordControlName)?.value;// 取得密碼的值
        const confirmPassword = control.value;// 取得確認密碼的值

        // 如果密碼與確認密碼不一致，返回錯誤物件
        if(password !== confirmPassword){
            return { confirmPasswordMismatch : true};
        }
        return null;// 如果一致，返回 null（驗證成功）

    }
}