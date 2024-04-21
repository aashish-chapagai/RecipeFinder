import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @Output() recipeSearchQuery: EventEmitter<string> = new EventEmitter<string>;
  searchQuery: string = '';
  searchRecipes() {
    const copiedSearchQuery: string = JSON.parse(JSON.stringify(this.searchQuery));
    this.recipeSearchQuery.emit(copiedSearchQuery);
    this.searchQuery = '';
  }
}
