import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';


@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[];
  // ingredients: Ingredient[] =  [
  //   new Ingredient('Apples',5),
  //     new Ingredient('Oranges',6),
  // ];
  constructor(private recipeList:ShoppingListService) { }

  ngOnInit() {
    this.ingredients =this.recipeList.getIngredients();
    this.recipeList.ingredientsChanged
    .subscribe(
      (ingredients: Ingredient[])=> {
        this.ingredients = ingredients;
      }
    )
  }

  // onIngredientAdded(ingredient: Ingredient){
  //   this.ingredients.push(ingredient);
  // }

}
