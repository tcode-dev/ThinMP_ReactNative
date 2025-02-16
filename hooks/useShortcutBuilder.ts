import { useCallback } from 'react';
import { ShortcutRepository } from '@/repository/ShortcutRepository';
import { ShortcutCategory } from '@/type/Entity';
import localize from '@/localize';

export const useShortcutBuilder = (id: string, category: ShortcutCategory) => {
  return useCallback(() => {
    const shortcutRepository = new ShortcutRepository();

    if (shortcutRepository.existsShortcut(id, category)) {
      return { label: localize('shortcutRemove'), callback: () => shortcutRepository.deleteShortcut(id, category) };
    } else {
      return { label: localize('shortcutAdd'), callback: () => shortcutRepository.addShortcut(id, category) };
    }
  }, [id, category]);
};