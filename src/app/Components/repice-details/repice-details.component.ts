import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Recipe } from '../recipe-model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-repice-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './repice-details.component.html',
  styleUrl: './repice-details.component.css'
})
export class RepiceDetailsComponent {
  @Input() recipe: Recipe | null = null;
  @Input() editable: boolean = false;
  @Output() backButtonClicked: EventEmitter<void> = new EventEmitter<void>;

  goBack() {
    this.backButtonClicked.emit();
  }
}
