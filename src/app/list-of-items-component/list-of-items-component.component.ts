import { Component, OnInit } from '@angular/core';
import { CategotyService } from "./../services/categoty.service";
import { Category } from "./../shared/entities/Category";

@Component({
  selector: 'app-list-of-items-component',
  templateUrl: './list-of-items-component.component.html',
  styleUrls: ['./list-of-items-component.component.css']
})
export class ListOfItemsComponentComponent implements OnInit {

  allCategories: Category[];

  constructor(private categoryService: CategotyService) { }

  ngOnInit() {
    this.categoryService.getCategories().subscribe((resp: Category[]) => {
      this.allCategories = resp;
    });
  }

  public getCategories() {
    this.categoryService.getCategories().subscribe((resp: Category[]) => {
      this.allCategories = resp;
    });
  }

  public getCategory() {
    console.log(new Category("TestCategoty"));
    this.categoryService.getCategory(1).subscribe((resp: Category) => {
      console.log(2, resp);
    });
  }

  public addCategory() {
    console.log(this.categoryService.addCategory(new Category("TestCategoty")));
    this.categoryService.addCategory(new Category("TestCategoty")).subscribe((e) => {
      this.getCategories();
      console.log(e);
    }), (e) => {
      console.log(e);
    };
  }

  public deleteCategory(id: number) {
    this.categoryService.deleteCategory(id).subscribe((res: any) => {
      console.log(res);
      this.getCategories();
    });
  }

}
