import Image from "next/image";
import {SearchIcon,GlobeAltIcon,
    MenuIcon,
    UserCircleIcon,
    UserIcon, 
    MenuAlt1Icon} from '@heroicons/react/solid';
import { useState } from "react";
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRange } from 'react-date-range';
import { useRouter } from "next/dist/client/router";



function Header({placeholder}) {

    const [searchInput, setSearchInput] = useState("");
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [noOfGuests, setNoOfGuests] = useState(1);
    const router = useRouter();

    const resetInput = () =>{
        setSearchInput("");
    }

    const handleSelect = (ranges) => {
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate);

    }

    const selectionRange = {
        startDate : startDate,
        endDate: endDate,
        key: 'selection',
    };
    
    const search = () =>{
        router.push({
            pathname: "/search",
            query: {
            location: searchInput,
            startDate: startDate.toISOString(),
            endDate:endDate.toISOString(),
            noOfGuests,
        },
        });
    };

    return (
        <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">

            

            {/* Logo Div */}
            <div 
            onClick={()=>router.push('/')}
            className="relative flex items-center h-10 cursor-pointer my-auto">
               <Image src="https://links.papareact.com/qd3" 
               layout="fill"
               objectFit="contain"
               objectPosition="left"
                />
            </div>

            {/* Search Div */}
            <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-sm ">
              <input
               value={searchInput}
               onChange={(e)=> setSearchInput(e.target.value)}
               type="text" placeholder={placeholder || "Search Here..." }
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
            {searchInput && 
             <div className="flex flex-col col-span-3 mx-auto">
                 <DateRange ranges={[selectionRange]}
                  minDate={new Date()}
                  rangeColors={["#FD5B61"]}
                  onChange={handleSelect}
                 />

                 <div className="flex items-center border-b mb-5">
                     <h2 className="text-2xl flex-grow font-semibold">Number of Guests</h2>
                     <UserIcon className="h-5" />
                     <input 
                     value={noOfGuests}
                     onChange={(e)=>setNoOfGuests(e.target.value)}
                     min={1}
                     type="number" 
                     className="w-12 pl-2 outline-none text-lg text-red-400" />

                 </div>
                 <div className="flex">
                  <button 
                  onClick={resetInput}
                  className="flex-grow text-gray-500">Cancel</button>
                  <button 
                  onClick={search}
                  className="flex-grow text-red-400">Search</button>
                 </div>
             </div>}

        </header>
    )
}
export default Header;
