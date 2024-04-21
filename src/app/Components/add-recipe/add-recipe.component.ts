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
    image: ''
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
    this.newRecipe.id = uuidv4();
    console.log(this.newRecipe.image)
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
  saveImage(event: Event) {
    const reader = new FileReader();
    const input = event.target as HTMLInputElement;
    reader.onload = (event: any) => {
      const imageDataUrl: string = event.target.result;
      this.newRecipe.image = imageDataUrl;
    };
    if (!input.files) {
      return;
    }
    const imageFile = input.files[0];
    reader.readAsDataURL(imageFile);
  }
  onImageSelected(event: any) {
    const imageFile: File = event.target.files[0];
    const imageFileSize = imageFile.size / 1024;
    if (imageFileSize > 250) {
      const imageTag = document.getElementById('image') as HTMLInputElement;
      imageTag.value= '';
      return;
    } else {
      this.saveImage(event);
    }
  }
}