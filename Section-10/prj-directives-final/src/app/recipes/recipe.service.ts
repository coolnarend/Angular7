import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Fench Fries',
      'This is simply a test',
      'https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG',
      [
        new Ingredient('Meat', 1),
        new Ingredient('Fries', 20)
      ]
      ),
    new Recipe(
      'Big Fat Burger',
      'This is simply a test',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Cheeseburger.jpg/1200px-Cheeseburger.jpg',
      [
        new Ingredient('Buns', 5),
        new Ingredient('Meat', 11),
        new Ingredient('Eggs', 6)
      ]
      )
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientstoShoppList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
