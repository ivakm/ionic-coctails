export interface IFilters {
  drinks: ICategoryDrink[];
}

export interface ICategoryDrink {
  strCategory: string;
}

export interface IDrinks {
  drinks: IDrink[];
}

export interface IDrink {
  strDrink: string;
  strDrinkThumb: string;
  idDrink: string;
}

export interface IGroupDrink {
  category: string;
  drinks: IDrink[];
}

export type ICheckboxCategoryDrink = [string, boolean];
