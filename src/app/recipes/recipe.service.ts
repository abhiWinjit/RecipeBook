import { Recipe } from './recipes.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
// import { Subject } from 'rxjs';

@Injectable()

export class RecipeService {

    // public recipeSelected = new Subject<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('Veg Fruit Salad',
            'It is healthy and super-tasty',
            'https://cdn-image.myrecipes.com/sites/default/files/styles/medium_2x/public/image/recipes/ck/08/03/fruitveg-salad-ck-1714585-x.jpg?itok=Cnojr-UB',
            [
                new Ingredient('Vegetables', 3),
                new Ingredient('Fruits', 4),
                new Ingredient('Yoghurt', 1)
            ]),
        new Recipe('Cheessy Pizza',
            'What else I need to say',
            'https://i1.wp.com/theunmanlychef.com/wp-content/uploads/2018/04/Cheesy-Bread-6.jpg?resize=1024%2C687',
            [
                new Ingredient('Vegetables', 3),
                new Ingredient('Cheese', 2),
                new Ingredient('Buns', 1)
            ])

    ];

    constructor(private slService: ShoppingListService) {

    }

    getRecipes() {
        return this.recipes.slice();
    }


    getRecipe(index: number) {

        return this.recipes[index];
    }
    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredientsFromRecipe(ingredients);
    }
}