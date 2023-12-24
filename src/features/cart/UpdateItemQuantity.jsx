import { useDispatch } from 'react-redux';
import Button from '../../ui/Button';
import { decreaseItemQuantity, increaseItemQuantity } from './cartSlice';

const UpdateItemQuantity = ({ pizzaId, currentQuantity }) => {
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increaseItemQuantity(pizzaId));
  };
  const handledecrement = () => {
    dispatch(decreaseItemQuantity(pizzaId));
  };
  return (
    <div className="flex items-center gap-1 md:gap-3">
      <Button type="round" onClick={handledecrement}>
        -
      </Button>
      <span className="text-sm font-medium">{currentQuantity}</span>
      <Button type="round" onClick={handleIncrement}>
        +
      </Button>
    </div>
  );
};

export default UpdateItemQuantity;
