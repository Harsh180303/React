import { CDN_URL } from "../utils/constents";
import { useDispatch } from "react-redux"
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {
  // console.log("itmes ye hain ", items);

  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    // dispatch an action
    dispatch(addItem(item))
  }
  
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border-gray-400 border-b-2 text-left gap-x-3 flex flex-row-reverse justify-between"
        >
          <div className="w-3/12 relative">
            <img
              src={CDN_URL + item.card.info.imageId}
              className="object-cover h-full"
            />
            <button className="p-1 bg-black text-white shadow-md rounded-md absolute inset-0 mx-auto w-14 h-7 flex justify-end text-center font-bold"
            onClick={() => handleAddItem(item)}
            >
              Add +
            </button>
          </div>

          <div className="w-9/12">
            <div className="font-semibold flex flex-col py-2">
              <span>{item.card.info.name}</span>
              <span>
                ₹
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
            </div>
            <p className="text-xs my-2">{item.card.info.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
