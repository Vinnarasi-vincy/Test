import { Component,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-childcompont',
  templateUrl: './childcompont.component.html',
  styleUrls: ['./childcompont.component.css']
})
export class ChildcompontComponent {

  @Output() newItemEvent = new EventEmitter<string>();

  addNewItem(value: string) {
    this.newItemEvent.emit(value);
  }

}
