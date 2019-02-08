import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'A test recipe',
      'This is the description..',
      'https://www.wellplated.com/wp-content/uploads/2017/12/Hoppin-John-recipe-600x629.jpg'
    ),
    new Recipe(
      'A test recipe 2',
      'This is the description 2..',
      'https://images.media-allrecipes.com/images/56589.png'
    )
  ];

  constructor() {
    console.log(Recipe.name);
  }

  ngOnInit() {
  }

}
