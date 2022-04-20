function Menu() {
    return (
        <>
            <div className="container mx-auto">
                <div>
                    <h1 className="text-6xl mt-4 text-black font-bold text-center">+ ONIC</h1>
                    <br/>
                    <h6 className="text-center mt-1 text-gray-500 font-semibold">
                        lorem ipsum lorem ipsum lore
                    </h6>
                    <div className="flex justify-center mt-2">
                        <div className="w-96 h-1 text-center bg-gray-500  ">
                        </div>
                    </div>
                    <div className="flex justify-center ">
                        <span className="mx-4 font-bold mt-1">GCC</span>
                        <span className="mx-4 font-bold mt-1">SERVICES</span>
                        <span className="mx-4 font-bold mt-1">STUDIO</span>
                    </div>
                    <br/>
                    <div className="w-full h-96  overflow-hidden mx-auto mt-2">
                        <img
                            src="https://noithatvuonggia.com/wp-content/uploads/2018/08/banner-moi-nhat-noi-that-do-go-da-nang-021.jpg"
                            alt="" className="object-cover w-full h-full"/>
                    </div>
                    <div className="text-center ">
                        <i className="fa-solid fa-angle-down text-6xl bg-yellow-500 px-4 relative bottom-14 cursor-pointer  rounded-full"></i>
                    </div>
                    <div className="text-center font-bold text-2xl">
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br></br> tempor
                        incididunt ut laboresed do eiusmod tempor incididunt ut labore et dolore magna aliqua".
                    </div>
                </div>
            </div>
        </>
    );
}

export default Menu;

