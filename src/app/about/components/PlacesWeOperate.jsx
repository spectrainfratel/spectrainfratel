// import Image from "next/image";
// import React from "react";

// export default function PlacesWeOperate() {
//   const work =[
//     {title:"BSNL Tower Vavdi Gujarat", img:"public/assets/w1.png"},
//     {title:"Tower Erection – Tupani Gujarat", img:"public/assets/w2.png"},
//     {title:"EV Charger I&C : Ahmedabad Gujarat", img:"public/assets/w3.png"},
//     {title:"DG Installation : Bhavnagar Gujarat", img:"public/assets/w4.png"},
//     {title:"Solar Project : Gola Gujarat", img:"public/assets/w5.png"},
//     {title:"Fiber Laying HDD : Ahmedabad Gujarat", img:"public/assets/w6.png"},
//   ]
//   return (
//     <div className="min-h-screen p-5 px-10">
//       <div className="flex flex-row items-center gap-5">
//         <div className="min-h-16 h-full w-1 bg-gradient-to-t from-[#0D50A7] to-[#02C5FD]" />
//         <h1 className="lg:text-7xl text-5xl font-extrabold">
//           Places we operate
//         </h1>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-6">
//         {Array.from({ length: 6 }).map((_, index) => (
//           <div
//             key={index}
//             className="relative w-auto h-64 md:h-72 lg:h-96  overflow-hidden"
//           >
//             <Image
//               src="/assets/service1.jpg"
//               alt={`service ${index}`}
//               fill
//               className="object-cover"
//             />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }


import Image from "next/image";
import React from "react";

export default function PlacesWeOperate() {
  const work = [
    { title: "BSNL Tower Vavdi Gujarat", img: "/assets/w1.png" },
    { title: "Tower Erection – Tupani Gujarat", img: "/assets/w2.png" },
    { title: "EV Charger I&C : Ahmedabad Gujarat", img: "/assets/w3.png" },
    { title: "DG Installation : Bhavnagar Gujarat", img: "/assets/w4.png" },
    { title: "Solar Project : Gola Gujarat", img: "/assets/w5.png" },
    { title: "Fiber Laying HDD : Ahmedabad Gujarat", img: "/assets/w6.png" },
  ];

  return (
    <div className="min-h-screen p-5 px-10 bg-white">
      {/* Heading */}
      <div className="flex flex-row items-center gap-5">
        <div className="min-h-16 h-full w-1 bg-gradient-to-t from-[#0D50A7] to-[#02C5FD]" />
        <h1 className="lg:text-7xl text-5xl font-extrabold text-gray-900">
          Places we operate
        </h1>
      </div>

      {/* Grid Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {work.map((item, index) => (
          <div
            key={index}
            className="relative w-full h-72 md:h-80 lg:h-96  overflow-hidden group shadow-md hover:shadow-xl transition-all duration-300"
          >
            {/* Image */}
            <Image
              src={item.img}
              alt={item.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-all duration-300 flex items-end">
              <p className="text-white text-sm sm:text-base font-semibold p-4">
                {item.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
