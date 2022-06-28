import { Component, Input, OnInit } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { Tag } from '../shared/models/tag';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {
  @Input()
  foodPageTags?:string[];
  tags?:Tag[] = [];
  constructor( private fs:FoodService) { }

  ngOnInit(): void {
    if(!this.foodPageTags)
    this.tags = this.fs.getAllTag();
  }

}
