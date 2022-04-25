import "../../src/assets/css/header.css";

function Header() {
    return (
        <div>
            <div className="bg-burger bg-top pt-0.5 pb-32 hidden md:block">
                <div className="mt-8 flex">
                    <img className="h-44 mx-auto" src="https://i.ibb.co/nsd0DHL/g12899.png" alt=""/>
                </div>

                <nav className="mt-10 flex">
                    <ul className="triangle-menu bg-red-500 text-white uppercase font-semibold h-8 inline-flex mx-auto items-center">
                        <li className="px-6">
                            <a href>
                                La carte
                            </a>
                        </li>
                        <span>/</span>
                        <li className="px-6">
                            <a href>
                                Nos restaurants
                            </a>
                        </li>
                        <span>/</span>
                        <li className="px-6">
                            <a href>
                                La big histoire
                            </a>
                        </li>
                        <span>/</span>
                        <li className="px-6">
                            <a href>
                                Nos actualités
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
)
}
export default Header;