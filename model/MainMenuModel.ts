import { MainMenuConstant } from '@/constants/MainMenuConstant';
import { LocalizationKeys } from '@/localize/localize';

export type MainMenuKeys = Extract<MainMenuConstant, LocalizationKeys>;

export class MainMenuModel {
  item: MainMenuKeys;
  visibility: boolean;

  constructor(item: MainMenuKeys, visibility: boolean) {
    this.item = item;
    this.visibility = visibility;
  }
}
