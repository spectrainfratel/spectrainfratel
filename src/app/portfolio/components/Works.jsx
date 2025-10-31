// import Image from "next/image";
// import React from "react";

// export default function Works() {
//   const works = [
//     // {
//     //   site: "Ahmedabad, Gujarat",
//     //   time: "3st January 2025",
//     //   img: "/assets/service1.jpg",
//     // },
//     // {
//     //   site: "Ahmedabad, Gujarat",
//     //   time: "3st January 2025",
//     //   img: "/assets/service1.jpg",
//     // },
//     // {
//     //   site: "Ahmedabad, Gujarat",
//     //   time: "3st January 2025",
//     //   img: "/assets/service1.jpg",
//     // },
//     // {
//     //   site: "Ahmedabad, Gujarat",
//     //   time: "3st January 2025",
//     //   img: "/assets/service1.jpg",
//     // },
//     // {
//     //   site: "Ahmedabad, Gujarat",
//     //   time: "3st January 2025",
//     //   img: "/assets/service1.jpg",
//     // },
//     // {
//     //   site: "Ahmedabad, Gujarat",
//     //   time: "3st January 2025",
//     //   img: "/assets/service1.jpg",
//     // },
//     // {
//     //   site: "Ahmedabad, Gujarat",
//     //   time: "3st January 2025",
//     //   img: "/assets/service1.jpg",
//     // },
//     // {
//     //   site: "Ahmedabad, Gujarat",
//     //   time: "3st January 2025",
//     //   img: "/assets/service1.jpg",
//     // },
//   ];
//   return (
//     <div className="p-5">
//       <div className="flex flex-row items-center gap-3 md:gap-5 mb-6 md:mb-8">
//         <div className="md:h-24 sm:h-10 h-16 lg:h-40  w-1 bg-gradient-to-t from-[#0D50A7] to-[#02C5FD]" />
//         <h1 className="text-3xl md:text-5xl lg:text-7xl font-extrabold max-w-2xl">
//           Premium works for premium users
//         </h1>
//       </div>
//       <div>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-20 mt-6 p-5">
//           {works.map((work, index) => (
//             <div
//               key={index}
//               className="flex flex-col gap-5 items-center justify-centeroverflow-hidden"
//             >
//               <div className="bg-[#146CBB1A] w-full h-full px-10 p-5 relative flex items-center justify-center">
//                 <Image
//                   src={work.img}
//                   alt={`work ${index}`}
//                   width={400}
//                   height={400}
//                   className=" object-fill w-[75%] h-full"
//                 />
//               </div>

//               <div className=" w-full">
//                 <h2 className="text-2xl font-semibold">Site - {work.site}</h2>
//                 <p className="text-sm">Project Time - {work.time}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }


import Image from "next/image";
import React from "react";

export default function Works() {
  const works = [
    { site: "BSNL Tower Vavdi Gujarat", img: "/assets/w1.png" },
    { site: "Tower Erection – Tupani Gujarat", img: "/assets/w2.png" },
    { site: "EV Charger I&C : Ahmedabad Gujarat", img: "/assets/w3.png" },
    { site: "DG Installation : Bhavnagar Gujarat", img: "/assets/w4.png" },
    { site: "Solar Project : Gola Gujarat", img: "/assets/w5.png" },
    { site: "Fiber Laying HDD : Ahmedabad Gujarat", img: "/assets/w6.png" },
  ];

  return (
    <div className="p-5">
      <div className="flex flex-row items-center gap-3 md:gap-5 mb-6 md:mb-8">
        <div className="md:h-24 sm:h-10 h-16 lg:h-40 w-1 bg-gradient-to-t from-[#0D50A7] to-[#02C5FD]" />
        <h1 className="text-3xl md:text-5xl lg:text-7xl font-extrabold max-w-2xl">
          Premium works for premium users
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 mt-6 p-5">
        {works.map((work, index) => (
          <div
            key={index}
            className="flex flex-col gap-5 items-center justify-center overflow-hidden"
          >
            
            <div className="relative w-full h-80 bg-[#146CBB1A] overflow-hidden">
              <Image
                src={work.img}
                alt={`work ${index}`}
                fill
                className="object-cover hover:scale-105 transition-transform duration-500 ease-in-out"
              />
            </div>

           
            <div className="w-full text-left">
              <h2 className="text-2xl font-semibold">Site - {work.site}</h2>
              {/* <p className="text-sm text-gray-600">
                Project Time - {work.time || "N/A"}
              </p> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
