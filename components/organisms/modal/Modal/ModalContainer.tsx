import { useCallback } from 'react';
import ModalPresenter, { Props } from './ModalPresenter';
import { useThemeColor } from '@/hooks/useThemeColor';
import { usePlaylistModalStore } from '@/store/playlistModalStore';

const ModalContainer: React.FC<Pick<Props, 'children'>> = ({ children }) => {
  const color = useThemeColor();
  const { closePlaylistModal } = usePlaylistModalStore();
  const onPress = useCallback(() => {
    closePlaylistModal();
  }, [closePlaylistModal]);

  return (
    <ModalPresenter overlayColor={color.overlay} modalColor={color.onBackground} onPress={onPress}>
      {children}
    </ModalPresenter>
  );
};

export default ModalContainer;
