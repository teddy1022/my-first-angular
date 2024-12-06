import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  @Input() parentname:string = '';

  @Output() childName = new EventEmitter();

  sendHello() {
    this.childName.emit('Hello');
  }
}
