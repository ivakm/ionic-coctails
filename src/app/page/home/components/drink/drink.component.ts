import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { IDrink } from '../../../../interfaces/filters';

@Component({
  selector: 'app-drink',
  templateUrl: './drink.component.html',
  styleUrls: ['./drink.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DrinkComponent implements OnInit {

  @Input() drink: IDrink;

  constructor() {
  }

  ngOnInit() {}

}
