import Image from "next/image"
function LargeCard({img,title,description,buttonText}) {
    return (
        <div className="py-16 cursor-pointer relative">
            {/*Image Div */}
            <div className="relative h-96 min-w-[300px]">
                <Image src={img} layout="fill" objectFit="cover" className="rounded-2xl"/>
            </div>

            {/* Inner Content Div */}
            <div className="absolute top-32 left-12">
                <h3 className="text-4xl mb-3 w-64">
                    {title}
                </h3>
                <p>
                    {description}
                </p>
                <button className="text-sm text-white bg-gray-500 px-4 py-2 
                rounded-lg mt-5 hover:scale-105 transition transform duration-300 ease-out
                active:scale-90 trasnition">
                    {buttonText}
                </button>
            </div>
        </div>
    )
}

export default LargeCard