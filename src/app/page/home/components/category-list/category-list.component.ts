import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { IGroupDrink } from '../../../../interfaces/filters';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CategoryListComponent implements OnInit {

  @Input() groupDrink: IGroupDrink;
  @Input() loading: boolean;

  constructor() {
  }

  ngOnInit(): void {
  }
}
