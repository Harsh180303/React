import { CDN_URL } from "../utils/constents";

const ItemList = ({ items }) => {
  console.log("itmes ye hain ", items);
  return (
    <div>
      {items.map((items) => (
        <div
          key={items.card.info.id}
          className="p-2 m-2 border-gray-400 border-b-2 text-left gap-x-3 flex flex-row-reverse justify-between"
        >
          <div className="w-3/12 relative">
            <img src={CDN_URL + items.card.info.imageId} className="object-cover h-full" />
            <button className="p-1 bg-black text-white shadow-md rounded-md absolute inset-0 mx-auto w-14 h-7 flex justify-end text-center font-bold">Add +</button>
          </div>

          <div className="w-9/12">
            <div className="font-semibold flex flex-col py-2">
              <span>{items.card.info.name}</span>
              <span>
                ₹
                {items.card.info.price
                  ? items.card.info.price / 100
                  : items.card.info.defaultPrice / 100}
              </span>
            </div>
            <p className="text-xs my-2">{items.card.info.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
