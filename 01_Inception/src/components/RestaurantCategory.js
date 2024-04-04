import ItemList from "./itemList";
import { useState } from "react"

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {

    const handleClick = () => {
        setShowIndex()
    }
    
    return (
        <div>
            {/* Header */}
            <div className="w-6/12 mx-auto bg-gray-100 shadow-lg p-4 my-4">
                <div className="flex justify-between cursor-pointer select-none" onClick={handleClick}>
                    <span className="font-bold text-lg">{data.title} ({data.itemCards.length})</span>
                    <span className="cursor-pointer font-bold text-lg">⌄</span>
                </div>
                

                {showItems && <ItemList items={data.itemCards}/>}
            </div>
        </div>
    )    
}

export default RestaurantCategory;