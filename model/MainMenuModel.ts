import { MainMenuConstant } from '@/constants/MainMenuConstant';
import localize, { LocalizationKeys } from '@/localize/localize';

export type MainMenuKeys = Extract<MainMenuConstant, LocalizationKeys>;

export class MainMenuModel {
  item: MainMenuKeys;
  visibility: boolean;
  text: string;
  href: string;

  constructor(item: MainMenuKeys, visibility: boolean) {
    this.item = item;
    this.visibility = visibility;
    this.text = localize(item);
    this.href = `/${item}`;
  }
}
