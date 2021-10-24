import { Recipe } from './../recipe.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'test recipe',
      'a recipe made just to test',
      'https://www.simplyrecipes.com/thmb/2Y7B2S38v8-d3-NkhEaCfqVNjY8=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2013__02__pasta-puttanesca-fork-vertical-1600-935649b4e572476cb9d4afb873193654.jpg',
    ),
  ];
  constructor() { }

  ngOnInit(): void { }
}
