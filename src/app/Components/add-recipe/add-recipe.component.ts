import { Component, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe-model';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { v4 as uuidv4 } from 'uuid';
import { NutritionalFact } from '../nutritionalfacts-model';

@Component({
  selector: 'app-add-recipe',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './add-recipe.component.html',
  styleUrl: './add-recipe.component.css'
})
export class AddRecipeComponent {
  @Output() addedRecipe: EventEmitter<Recipe> = new EventEmitter<Recipe>;
  @Output() adjustRecipeCard: EventEmitter<boolean> = new EventEmitter<boolean>;
  showAddForm: boolean = false;
  newRecipe: Recipe = {
    id: '',
    title: '',
    description: '',
    ingredients: [],
    instruction: '',
    nutritionalFacts: [],
    image: null
  }
  addRecipe(form: NgForm) {
    const ingredientsField = document.getElementById("ingredients")
    if(ingredientsField === document.activeElement) {
      return;
    }
    const nutritionalFactsValueField = document.getElementById("nutritionalfactsvalue");
    if(nutritionalFactsValueField === document.activeElement) {
      return;
    }
    const uploadedFile: File = form.value.image;
    console.log(uploadedFile)
    this.newRecipe.image = uploadedFile;
    this.newRecipe.id = uuidv4();
    const copiedRecipe: Recipe = JSON.parse(JSON.stringify(this.newRecipe));
    this.addedRecipe.emit(copiedRecipe);
    form.resetForm();
    this.newRecipe.ingredients = [];
    this.newRecipe.nutritionalFacts = [];
  }
  displayAddForm() {
    this.showAddForm = !this.showAddForm;
    this.adjustRecipeCard.emit(this.showAddForm);
  }
  newIngredient: string = '';
  addIngredient() {
    if (this.newIngredient.trim() != '') {
      this.newRecipe.ingredients.push(this.newIngredient.trim());
      this.newIngredient = '';
    }
  }
  removeIngredient(index: number) {
    this.newRecipe.ingredients.splice(index, 1);
  }
  newNutritionalFacts: NutritionalFact = {
    name: '',
    value: ''
  }; 
  addNutritionalFact() {
    if (this.newNutritionalFacts.name.trim() != '' && this.newNutritionalFacts.value.trim() != '') {
      this.newRecipe.nutritionalFacts.push(this.newNutritionalFacts);
      this.newNutritionalFacts = { name: '', value: '' };
    }
  }
  removeNutritionalFact(index: number) {
    this.newRecipe.nutritionalFacts.splice(index, 1);
  }
}