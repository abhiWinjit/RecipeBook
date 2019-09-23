import { Component, OnInit, ElementRef, EventEmitter, ViewChild, Output } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
// import { ShoppingListComponent } from '../shopping-list.component';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  // @ViewChild('nameInput',{static:false}) nameInputReference: ElementRef;
  // @ViewChild('amountInput',{static:false}) amountInputReference: ElementRef;
  // @Output() ingredientAdded = new EventEmitter<{name: string, amount: number}>();

  constructor(private recipeList: ShoppingListService) { }

  ngOnInit() {
  }

  onAddItem() {
    const ingName = this.nameInputReference.nativeElement.value;
    const ingAmount = this.amountInputReference.nativeElement.value;

    const newIngredient = new Ingredient(ingName, ingAmount);
    this.recipeList.addIngredient(newIngredient);
    // this.ingredientAdded.emit(newIngredient);
  }

}
