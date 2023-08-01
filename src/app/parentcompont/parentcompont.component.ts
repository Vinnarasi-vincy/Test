import { Component } from '@angular/core';

@Component({
  selector: 'app-parentcompont',
  templateUrl: './parentcompont.component.html',
  styleUrls: ['./parentcompont.component.css']
})
export class ParentcompontComponent {
  items = ['item1', 'item2', 'item3', 'item4'];

  addItem(newItem: string) {
    this.items.push(newItem);
  }
}
