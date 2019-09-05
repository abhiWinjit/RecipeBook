import { Component, OnInit, Input, Output } from '@angular/core';
import { Recipe } from '../recipes.model';
import { DropdownDirective } from "../../shared/dropdown.directive";
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {
  // @Output() appDropdown:DropdownDirective;
  
  @Input() recipe: Recipe;
  constructor(private recipeService:RecipeService) { }

  ngOnInit() {
  }

  onAddToShoppingList() {
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }

}
