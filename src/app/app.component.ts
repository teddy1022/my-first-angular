import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChildComponent } from "./child/child.component";
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from "./header/header.component";
import { RegisterComponent } from "./register/register.component";
import { FooterComponent } from "./footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ChildComponent, FormsModule, HeaderComponent, RegisterComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'tutorial';
  name :string = "";

  email:string = '';

  nameChange(e :Event){
    const inputElement = e.target as HTMLInputElement;
    this.name = inputElement.value;
    console.log(inputElement.value);
    
  }

  addSub(str: string){
    this.name += str;
  }
}
