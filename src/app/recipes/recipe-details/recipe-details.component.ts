import { Component, OnInit, Input, Output } from '@angular/core';
import { Recipe } from '../recipes.model';
import { DropdownDirective } from "../../shared/dropdown.directive";
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {
  // @Output() appDropdown:DropdownDirective;
  recipe: Recipe;
  id: number;
  // @Input() recipe: Recipe;
  //recipe: Recipe;
  constructor(private recipeService:RecipeService,
    private route: ActivatedRoute,
    private router: Router) { 
      
    }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params:  Params) => {
          this.id = +params['id'];        //+ used for converting string to number
          this.recipe = this.recipeService.getRecipe(this.id);
        }
      );
  }

  onAddToShoppingList() {
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }

  onEditRecipe(){
    // this.router.navigate(['edit'],{relativeTo: this.route});
    this.router.navigate(['../',this.id,'edit'],{relativeTo: this.route});
  }

  onDeleteRecipe(){

  }
}
