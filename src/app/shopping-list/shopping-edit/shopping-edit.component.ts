import { Component, OnInit, ElementRef, EventEmitter, ViewChild, Output, OnDestroy } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
// import { ShoppingListComponent } from '../shopping-list.component';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f', { static: false }) slForm: NgForm;
  // @ViewChild('nameInput',{static:false}) nameInputReference: ElementRef;
  // @ViewChild('amountInput',{static:false}) amountInputReference: ElementRef;
  // @Output() ingredientAdded = new EventEmitter<{name: string, amount: number}>();
  subscription: Subscription;
  editMode = false;
  editedItemIndex: number;
  editedItem: Ingredient

  constructor(private recipeList: ShoppingListService) { }

  ngOnInit() {
    this.subscription = this.recipeList.startedEditing
      .subscribe(
        (index: number) => {
          this.editedItemIndex = index;
          this.editMode = true;
          this.editedItem = this.recipeList.getIngredient(index);
          this.slForm.setValue({
            name: this.editedItem.name,
            amount: this.editedItem.amount
          })
        }
      );
  }

  onSubmit(form: NgForm) {
    // const ingName = this.nameInputReference.nativeElement.value;
    // const ingAmount = this.amountInputReference.nativeElement.value;
    const value = form.value;
    const newIngredient = new Ingredient(value.name, value.amount);
    if (this.editMode) {
      this.recipeList.updateIngredient(this.editedItemIndex, newIngredient);
    } else {
      this.recipeList.addIngredient(newIngredient);
    }
    this.editMode = false;
    form.reset();
    // this.recipeList.addIngredient(newIngredient);
    // this.ingredientAdded.emit(newIngredient);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
