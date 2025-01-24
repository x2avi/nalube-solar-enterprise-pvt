'use client'

import Image from "next/image"

const Consultation = () => {
    return (   
    <div className="text-white">
 <div className="p-4 mx-auto relative z-10 w-full pt-10 md:pt-20 px-2">
      <div className="text-4xl  md:text-7xl text-center bg-clip-text text-transparent bg-gradient-to-b from-purple-500 to-sky-200 bg-opacity-50">
      Consultation and  <br /> Permitting
      </div>
      <p className="mt-4 text-lg font-normal  text-neutral-300 max-w-lg text-center mx-auto px-4">
      Handling the necessary permits and documentation required for solar installations.
        </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-10">
    <div className="grid gap-4">
        <div>
            <Image
            width={500}
            height={500}
            priority
            className="h-auto max-w-full rounded-lg" src="/images/pexels-cristian-rojas-8853511.jpg" alt=""/>
        </div>
        <div>
            <Image
            width={500}
            height={500}
            priority
            className="h-auto max-w-full rounded-lg" src="/images/6551e35f9c0ce1.25960073_WhatsApp-Image-2023-11-13-at-09.07.07_767b05ec-gallery_big.jpg" alt=""/>
        </div>
        <div>
            <Image
            width={500}
            height={500}
            priority
            className="h-auto max-w-full rounded-lg" src="/images/CFE-1280S-1068x1068.jpg" alt=""/>
        </div>
    </div>
    <div className="grid gap-4">
        <div>
            <Image
            width={500}
            height={500}
            priority
            className="h-auto max-w-full rounded-lg" src="/images/Puhuiying-Solar-Street-Lights-Outdoor-Solar-Parking-Lights-with-Wireless-Motion-Sensor.jpg" alt=""/>
        </div>
        <div>
            <Image
            width={500}
            height={500}
            priority
            className="h-auto max-w-full rounded-lg" src="/images/FLEX-500-SOLAR-PACKAG.jpg" alt=""/>
        </div>
        <div>
            <Image
            width={500}
            height={500}
            priority
            className="h-auto max-w-full rounded-lg" src="/images/OIP (1).jpg" alt=""/>
        </div>
    </div>
    <div className="grid gap-4">
        <div>
            <Image
            width={500}
            height={500}
            priority
            className="h-auto max-w-full rounded-lg" src="/images/OIP (2).jpg" alt=""/>
        </div>
        <div>
            <Image
            width={500}
            height={500}
            priority
            className="h-auto max-w-full rounded-lg" src="/images/OIR (1).jpg" alt=""/>
        </div>
        <div>
            <Image
            width={500}
            height={500}
            priority
            className="h-auto max-w-full rounded-lg" src="/images/OIP (4).jpg" alt=""/>
        </div>
    </div>
    <div className="grid gap-4">
        <div>
            <Image
            width={500}
            height={500}
            priority
            className="h-auto max-w-full rounded-lg" src="/images/orc-5899-504_xl.jpg" alt=""/>
        </div>
        <div>
            <Image
            width={500}
            height={500}
            priority
            className="h-auto max-w-full rounded-lg" src="/images/OIP (5).jpg" alt=""/>
        </div>
        <div>
            <Image
            width={500}
            height={500}
            priority
            className="h-auto max-w-full rounded-lg" src="/images/95038da38d.jpg" alt=""/>
        </div>
    </div>
    </div>
    </div> );
}
 
export default  Consultation;