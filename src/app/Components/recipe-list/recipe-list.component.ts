import { CommonModule } from '@angular/common';
import { Component} from '@angular/core';
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
  recipes: Recipe[] = [
    {
    id: 1,
    title: 'Momo',
    description: 'this is momo',
    ingredients: ["chicken", "flour"],
    instruction: 'ok momo',
    nutritionalfacts: {'protein' : "10gm"}
    }, 
    {
      id: 2,
      title: 'Momo2',
      description: 'this is momo2',
      ingredients: ["chicken", "flour"],
      instruction: 'ok momo',
      nutritionalfacts: {'protein' : "10gm"}
    }, 
    {
      id: 3,
      title: 'Momo3',
      description: 'this is momo3',
      ingredients: ["chicken", "flour"],
      instruction: 'ok momo',
      nutritionalfacts: {'protein' : "10gm"}
    }, 
    {
      id: 4,
      title: 'Momo4',
      description: 'this is momo4',
      ingredients: ["chicken", "flour"],
      instruction: 'ok momo',
      nutritionalfacts: {'protein' : "10gm"}
    }, 
    {
      id: 5,
      title: 'Momo5',
      description: 'this is momo5',
      ingredients: ["chicken", "flour"],
      instruction: 'ok momo',
      nutritionalfacts: {'protein' : "10gm"}
    }
  ]
  pushAddedRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
  }
}
