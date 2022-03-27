import { useSelector, useDispatch } from "react-redux";
import { buyIceCream } from "../redux/iceCream/iceCreamActions";

const IceCreamContainer = () => {
  const numOfIceCreams = useSelector((state) => state.iceCream.numOfIceCreams);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>num of iceCreams - {numOfIceCreams}</h2>
      <button onClick={() => dispatch(buyIceCream())}>buy iceCream</button>
    </div>
  );
};

export default IceCreamContainer;
