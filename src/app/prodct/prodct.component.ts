import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-prodct',
  templateUrl: './prodct.component.html',
  styleUrls: ['./prodct.component.css']
})
export class ProdctComponent {

  @Input() dataFromParent :string='';

  @Input() dnamicData :string='';
}
