import { Component } from '@angular/core';
import { Recipe } from './recipe.module';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  recipes : Recipe[] = [
    new Recipe('A test recipe', 'A test desc', 'https://www.cookipedia.co.uk/wiki/images/d/d6/General_Tso%27s_chicken_recipe.jpg')
  ];

}
