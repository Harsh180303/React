import { useEffect, useState } from "react"
import { MENU_API, MENU_API_TWO } from "../utils/constents"
 
const useRestaurantMenu = (resId) => {

    const [resInfo, setResInfo] = useState(null)

    useEffect(() => {
        fetchdata()
    }, [])

    const fetchdata = async () => {
        const data = await fetch(MENU_API + resId + MENU_API_TWO)
        const json = await data.json()
        // console.log(json)
        setResInfo(json.data)
    }

    return resInfo;
}

export default useRestaurantMenu;