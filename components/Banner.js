import Image from "next/image";

function Banner() {
    return (
        <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px] ">
            <Image 
            src="https://links.papareact.com/0fm" 
            layout="fill"
            objectFit="cover"
            className=""/> 

            <div className="absolute top-1/2 w-full text-center">
                <p className="text-sm sm:text-lg">Not Sure Where To Go?</p>
                <button className="text-purple-500 bg-white px-10 py-4 rounded-full shadow-lg
                my-3 font-bold hover:shadow-2xl active:scale-90 trasnition duration-150 ">Explore!</button>
            </div>


        </div>
    )
}

export default Banner
