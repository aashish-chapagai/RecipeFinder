import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output} from '@angular/core';
import { Recipe } from '../recipe-model';
import { AddRecipeComponent } from '../add-recipe/add-recipe.component';

@Component({
  selector: 'app-recipe-list',
  standalone: true,
  imports: [CommonModule, AddRecipeComponent],
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent {
  @Output() sendRecipe: EventEmitter<Recipe> = new EventEmitter<Recipe>;
  @Output() editRecipe: EventEmitter<void> = new EventEmitter<void>;
  storedRecipes: string | null;  
  showAddForm: boolean = false;
  recipes: Recipe[] = []
  constructor () {
    this.storedRecipes = localStorage.getItem("Recipes");
    if (this.storedRecipes == null) {
      this.recipes = [];
    } else {
      this.recipes = JSON.parse(this.storedRecipes);
    }
  }

  pushAddedRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    localStorage.setItem("Recipes", JSON.stringify(this.recipes));
  }
  deleteRecipe(recipeToDelete: string) {
      const index = this.recipes.findIndex(recipe => recipe.id === recipeToDelete);
      this.recipes.splice(index, 1);     
      localStorage.setItem("Recipes", JSON.stringify(this.recipes));
  }
  openRecipe(recipe: Recipe) {
    this.sendRecipe.emit(recipe);
  }
  updateRecipe(recipe: Recipe) {
    this.editRecipe.emit();
    this.openRecipe(recipe);
  }
  adjustRecipeCard(showAddForm: boolean) {
    this.showAddForm = showAddForm;
  }
}
