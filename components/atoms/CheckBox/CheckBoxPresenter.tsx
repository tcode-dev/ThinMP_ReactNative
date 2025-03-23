import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

export type Props = {
  isChecked: boolean;
  color: string;
  onPress: () => void;
};

const CheckBoxPresenter: React.FC<Props> = ({ isChecked, color, onPress }) => (
  <>
    {isChecked ? (
      <FontAwesome6 name="square-check" size={24} color={color} onPress={onPress} />
    ) : (
      <FontAwesome6 name="square" size={24} color={color} onPress={onPress} />
    )}
  </>
);



export default CheckBoxPresenter;
