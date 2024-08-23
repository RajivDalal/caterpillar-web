import Image from "next/image";

export default function Loading()
{
    return ( 
        <>
            <div className="h-full w-full flex flex-col justify-center items-center">
                <Image 
                    src={"/logo.svg"} 
                    alt={"Logo"}
                    width={256}
                    height={256}
                    className="animate-pulse duration-700"
                />
            </div>
        </>
     );
};