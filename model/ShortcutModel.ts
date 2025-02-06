import { Category } from "@/repository/ShortcutRepository";

export type ShortcutModel = {
  id: string;
  name: string;
  description: string;
  category: Category,
  imageId: string;
  order: number,
};
