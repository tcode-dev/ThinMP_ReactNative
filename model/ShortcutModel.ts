import { ShortcutCategory } from "@/type/Entity";

export class ShortcutModel {
  id: string;
  name: string;
  description: string;
  category: ShortcutCategory;
  imageId: string;
  order: number;

  constructor(id: string, name: string, description: string, category: ShortcutCategory, imageId: string, order: number) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.category = category;
    this.imageId = imageId;
    this.order = order;
  }
}
