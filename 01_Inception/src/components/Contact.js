const Contact = () => {
    return (
        <div className="w-3/5 border-2 border-black flex flex-col items-center mx-auto gap-4 p-4">
            <h1 className="font-bold text-2xl m-2 p-2">Contact Us Page</h1>

            <input type="text" className="outline-none w-52 rounded-md px-1.5 py-1 placeholder:text-[#EF6027] bg-gray-100" placeholder="Name"/>

            <input type="text" className="outline-none w-52 rounded-md px-1.5 py-1 placeholder:text-[#EF6027] bg-gray-100" placeholder="Message"/>
            <button className="bg-gradient-to-r from-[#EF6027] to-[#ffb01e] px-2 py-1 w-[12rem] mx-auto font-bold text-white mt-1 rounded-md">Submit</button>
        </div>
    )
}

export default Contact;