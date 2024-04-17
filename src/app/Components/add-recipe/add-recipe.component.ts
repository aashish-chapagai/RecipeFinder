import { Component, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe-model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-recipe',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-recipe.component.html',
  styleUrl: './add-recipe.component.css'
})
export class AddRecipeComponent {
  @Output() addedRecipe: EventEmitter<Recipe> = new EventEmitter<Recipe>;
  newRecipe: Recipe = {
    id: 0,
    title: '',
    description: '',
    ingredients: [],
    instruction: '',
    nutritionalfacts: {}
  }
  addRecipe() {
    this.addedRecipe.emit(this.newRecipe);
  }
}
