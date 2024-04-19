import { Component, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe-model';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { v4 as uuidv4 } from 'uuid';

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
    nutritionalFacts: {},
    image: null
  }
  addRecipe(form: NgForm) {
    const uploadedFile: File = form.value.image;
    console.log(uploadedFile)
    this.newRecipe.image = uploadedFile;
    this.newRecipe.id = uuidv4();
    this.addedRecipe.emit(this.newRecipe);
  }
  displayAddForm() {
    this.showAddForm = !this.showAddForm;
    this.adjustRecipeCard.emit(this.showAddForm);
  }
}
