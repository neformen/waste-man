import { Component, OnInit } from '@angular/core';
import { CategotyService } from './../services/categoty.service';
import { Category } from './../shared/entities/Category';

@Component({
  selector: 'app-list-of-items-component',
  templateUrl: './list-of-items-component.component.html',
  styleUrls: ['./list-of-items-component.component.css']
})
export class ListOfItemsComponentComponent implements OnInit {

  categories: Category[];
  newCategoryName: string;

  constructor(private categoryService: CategotyService) { }

  ngOnInit() {
    this.getCategories();
  }

  public getCategories() {
    this.categoryService.getCategories().subscribe((categories: Category[]) => {
      this.categories = categories.sort((a, b) => b.id - a.id);
    });
  }

  public addCategory() {
    const newCategory = new Category(this.newCategoryName);
    this.categoryService.addCategory(newCategory).subscribe(() => {
      this.getCategories();
    });
  }

  public deleteCategory(id: number) {
    this.categoryService.deleteCategory(id).subscribe((categories: Category[]) => {
      this.categories = categories.sort((a, b) => b.id - a.id);
    });
  }

}
