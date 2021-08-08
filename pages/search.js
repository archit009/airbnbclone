import { useRouter } from "next/dist/client/router";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { format } from "date-fns";
import InfoCard from "../components/InfoCard";
import Map from "../components/Map";

function Search({searchResults}) {
    const router = useRouter();
    const {location, startDate, endDate , noOfGuests} = router.query;
    const formattedStartDate = format(new Date(startDate),"dd MMMM yy");
    const formattedEndDate = format(new Date(endDate),"dd MMMM yy");
    const range = `${formattedStartDate} - ${formattedEndDate}`;
       

    return (
        <div>
            <Header placeholder={`${location} | ${range} | ${noOfGuests} Guests`}/>
            <main className="flex">
                <section className="flex-grow pt-14 px-6">
                   <p className="text-xs">300+ stays | {range} | {noOfGuests} Guests </p>
                   <h1 className="text-3xl font-semibold mb-6 mt-2">Stays in {location}</h1>

                   <div className="hidden lg:inline-flex mb-5 whitespace-nowrap text-gray-800 space-x-3">
                       <p className="myButton">Cancelleation Flexible</p>
                       <p className="myButton">Price</p>
                       <p className="myButton">Rooms and Beds</p>
                       <p className="myButton">More Filters</p>
                   </div>

                   <div className="flex flex-col">
                   {searchResults.map(({img, location, title, description, star, total, price})=>(
                       <InfoCard
                       key={img}
                       img={img}
                       location={location}
                       title={title}
                       description={description}
                       star={star}
                       total={total}
                       price={price}
                    />
                   ))
                   }
                   </div>
                </section>

                <section className="hidden xl:inline-flex min-w-[600px]">
                    <Map searchResults={searchResults}/>
                </section>
            </main>

            <Footer/>
        </div>
    )
}

export default Search

export async function getServerSideProps(){
  const searchResults = await fetch("https://links.papareact.com/isz").
  then(res=>res.json());
  return{
      props:{
          searchResults,
      },
  };
}
