import Image from "next/image";
import {SearchIcon,GlobeAltIcon,MenuIcon,UserCircleIcon,UserIcon, MenuAlt1Icon} from '@heroicons/react/solid';

function Header() {
    return (
        <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">

            

            {/* Logo Div */}
            <div className="relative flex items-center h-10 cursor-pointer my-auto">
               <Image src="https://links.papareact.com/qd3" 
               layout="fill"
               objectFit="contain"
               objectPosition="left"
                />
            </div>

            {/* Search Div */}
            <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-sm ">
              <input type="text" placeholder="Search Here..." 
              className="pl-5 bg-transparent outline-none flex-grow text-gray-600 text-sm
              text-gray placeholder-gray-400"/>
              <SearchIcon className="hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 
              cursor-pointer md:mx-2" />
            </div>

            {/* Links Div */}
            <div className="flex space-x-4 items-center justify-end text-gray-500 cursor-pointer ">
                <p className="hidden cursor-pointer md:inline">Become A Host</p>
                <GlobeAltIcon className="h-8 " />

                <div className="flex items-center space-x-2 border-2 p-2 rounded-full ">
                <MenuIcon className="h-6" />
                <UserCircleIcon className="h-6" />
                </div>

            
            </div>

        </header>
    )
}
export default Header;
