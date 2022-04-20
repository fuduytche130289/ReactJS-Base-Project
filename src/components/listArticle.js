import {useEffect, useState} from "react";
import {homeService} from "../service/homeService";

function ListArticle() {
    const [data, setData] = useState([]);
    const [search, setSearch] = useState('');
    const handSubmit = async (e) => {
        e.preventDefault();
        const res = await homeService.getArticles(search);
        setData(res.data.articles);
    }
    return (
        <>
            <div className="container mx-auto">
                <div>
                    <h1 className="text-6xl mt-4 pt-4 text-black font-bold">CGI BY TONIC</h1>
                    <br/>
                    <h6 className="text-gray-500 font-semibold">
                        lorem ipsum lorem ipsum lore
                    </h6>
                    <div className="flex mt-2">
                        <div className="w-full h-1 text-center bg-gray-500  ">
                        </div>
                    </div>
                    <div className="flex justify-start">
                        <span className="mx-4 font-bold mt-1">ALL</span>
                        <span className="mx-4 font-bold mt-1">ACCESSORIES</span>
                        <span className="mx-4 font-bold mt-1">CARS</span>
                        <span className="mx-4 font-bold mt-1">SUPER</span>
                    </div>
                    <br/>

                    <div className="text-center ">
                        <form onSubmit={handSubmit}>
                            <input type="text" placeholder="search" className="border-2 border-red-400 p-3 w-96"
                                   onChange={(e) => setSearch(e.target.value)} value={search}/>
                        </form>
                    </div>
                    <br/>

                    <div className="py-20 px-4">

                        <div className="flex justify-between items-center flex-wrap">
                            {
                                data.map((item, index) => {
                                    return (
                                        <div className="blogs bg-white mr-5 w-3/12" key={index}>
                                            <img
                                                src={item.urlToImage}
                                                className=""></img>
                                            <div className="p-5">
                                                <h1 className="text-2xl font-bold text-green-800 py-2">{item.title}</h1>
                                                <p className="bg-white text-sm text-black">{item.description}</p>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ListArticle;