import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Recipe } from '../recipe-model';
import { CommonModule } from '@angular/common';
import { NutritionalFact } from '../nutritionalfacts-model';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-repice-details',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './repice-details.component.html',
  styleUrl: './repice-details.component.css'
})
export class RepiceDetailsComponent {
  @Input() recipe: Recipe = {
    id: '',
    title: '',
    description: '',
    ingredients: [],
    instruction: '',
    nutritionalFacts: [],
    image: ''
  };
  @Input() editable: boolean = false;
  @Output() backButtonClicked: EventEmitter<void> = new EventEmitter<void>;
  @Output() updateButtonClicked: EventEmitter<void> = new EventEmitter<void>;
  @Output() changeRecipe: EventEmitter<Recipe> = new EventEmitter<Recipe>;
  

  goBack() {
    this.backButtonClicked.emit();
  }
  enableUpdate() {
    this.updateButtonClicked.emit();
  }
  updateRecipe() {
    const ingredientsField = document.getElementById("ingredients")
    if(ingredientsField === document.activeElement) {
      return;
    }
    const nutritionalFactsValueField = document.getElementById("nutritionalfactsvalue");
    if(nutritionalFactsValueField === document.activeElement) {
      return;
    }
    const copiedRecipe: Recipe = JSON.parse(JSON.stringify(this.recipe));
    this.changeRecipe.emit(copiedRecipe);
    this.editable = false;
  }
  newIngredient: string = '';
  addIngredient() {
    if (this.newIngredient.trim() != '') {
      this.recipe.ingredients.push(this.newIngredient.trim());
      this.newIngredient = '';
    }
  }
  removeIngredient(index: number) {
    this.recipe.ingredients.splice(index, 1);
  }
  newNutritionalFacts: NutritionalFact = {
    name: '',
    value: ''
  }; 
  addNutritionalFact() {
    if (this.newNutritionalFacts.name.trim() != '' && this.newNutritionalFacts.value.trim() != '') {
      this.recipe.nutritionalFacts.push(this.newNutritionalFacts);
      this.newNutritionalFacts = { name: '', value: '' };
    }
  }
  removeNutritionalFact(index: number) {
    this.recipe.nutritionalFacts.splice(index, 1);
  }
  saveImage(event: Event) {
    const reader = new FileReader();
    const input = event.target as HTMLInputElement;
    reader.onload = (event: any) => {
      const imageDataUrl: string = event.target.result;
      this.recipe.image = imageDataUrl;
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
