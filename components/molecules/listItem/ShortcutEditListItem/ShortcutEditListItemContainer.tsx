import { useCallback } from 'react';
import ShortcutEditListItemPresenter, { Props as ShortcutEditListItemPresenterProps } from './ShortcutEditListItemPresenter';
import { useThemeColor } from '@/hooks/useThemeColor';
import { ShortcutModel } from '@/model/ShortcutModel';
import { useShortcutsStore } from '@/store/shortcutsStore';
import { ShortcutCategory } from '@/type/Entity';

type Props = ShortcutModel & Pick<ShortcutEditListItemPresenterProps, 'drag'>;

const SongEditListItemContainer: React.FC<Props> = (props) => {
  const color = useThemeColor();
  const { removeShortcut } = useShortcutsStore();
  const remove = useCallback(() => {
    removeShortcut(props.id);
  }, [removeShortcut, props.id]);
  const borderRadius = props.category === ShortcutCategory.Artist ? 20 : 4;

  return <ShortcutEditListItemPresenter {...props} remove={remove} backgroundColor={color.background} borderBottomColor={color.border} iconColor={color.icon} borderRadius={borderRadius} />;
};

export default SongEditListItemContainer;
