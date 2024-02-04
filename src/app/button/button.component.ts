import { Component,  EventEmitter, Input, Output } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  @Input () buttonText: string = 'Click me';
  @Output () click = new EventEmitter<void>();

  // Add a method to emit the event
  onClick(): void{
    this.click.emit();
}

}


