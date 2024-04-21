import { Component } from '@angular/core';
import { HeaderComponent } from './Components/header/header.component';
import { RecipeListComponent } from './Components/recipe-list/recipe-list.component';
import { RepiceDetailsComponent } from './Components/repice-details/repice-details.component';
import { Recipe } from './Components/recipe-model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, RecipeListComponent, RepiceDetailsComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  editable: boolean = false;
  title = 'InternWork';
  showRecipes: boolean = true;
  recipe: Recipe = {
    id: '',
    title: '',
    description: '',
    ingredients: [],
    instruction: '',
    nutritionalFacts: [],
    image: null
  }
  searchQuery: string = '';
  receiveRecipe(recipe: Recipe) {
    this.recipe = recipe;
    this.showRecipes = false;
  }
  goBack() {
    this.showRecipes = true;
    this.editable = false;
  }
  editRecipe() {
    this.editable = true;
  }
  searchRecipe(searchQuery: string) {
    this.searchQuery = searchQuery;
  }
  resetSearchQuery() {
    this.searchQuery = '';
  }
}