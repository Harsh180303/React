import { useEffect, useState } from "react";

const User = ({name}) => {
    
    const [count, setCount] = useState(0);
    const [count2] = useState(1);

    useEffect(() => {
        // Api Calls
    }, []);

    async function getUsrInfo () {
        // const data
    }

    return (
        <div className="user-card">
            <h1>count = {count}</h1>
            <button onClick={() => {
                setCount(count + 1)
            }}>Count Increase</button>
            <h2>Name: {name}</h2>
            <h3>Locatin: Bhopal</h3>
            <h4>Contact: @Harsh_18_03_03</h4>
        </div>
    )
}

export default User;