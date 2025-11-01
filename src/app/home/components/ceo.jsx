
import React from 'react';
import Image from 'next/image';

export default function CEO() {
  const hire = [
    {
      title: "Specialised Multi-Vertical Expertise",
      desc: "Spectra Infratel handles a diverse set of infrastructure services — telecommunications (tower & fibre works, RF surveys, civil & electrical), EV charging and electrical projects. This breadth means you get a partner who understands how different disciplines integrate (telecom + power + civil) rather than shifting between multiple vendors."
    },
    {
      title: "End-to-End Project Delivery Capability",
      desc: "From site acquisition, design & engineering, civil works, electrical & power installation, to commissioning and maintenance — Spectra can manage full lifecycle. This reduces hand-off risks, ensures consistency and simplifies accountability."
    },
    {
      title: "Quality & Compliance Focus",
      desc: "In the telecom vertical, Spectra lists services like tower erection, civil construction, power-cable work, RF/EMF surveys and more. These are regulated/technical scopes where compliance matters deeply (safety, structural, EMF). Their focus here signals you’re working with a vendor who knows standards & regulation."
    },
    {
      title: "Scalability and Reliability",
      desc: "Since infrastructure projects (telecom, EV charging) often require scale (many sites), rollout in phases, repeatability — Spectra’s experience with telecom site rollouts gives confidence that they can scale, manage logistics, field teams, supply chains, and maintain roll-out timeframe."
    },
    {
      title: "Single Point Accountability",
      desc: "When you engage one partner who handles multiple disciplines (civil + power + telecom + EV charging), you reduce coordination complexity, interface issues and finger-pointing. Spectra can act as that single point, simplifying your management overhead, tracking, quality-control."
    },
    {
      title: "Aligned with Sustainable & Future-Ready Infrastructure",
      desc: "With EV charging growing, and telecom infrastructure evolving (5G, fibre, IoT), you want a partner who is already working in these spaces. Hiring Spectra signals commitment to future-proofing your project, rather than legacy approach."
    },
    {
      title: "Local Presence & On-Ground Capability",
      desc: "Especially in regions like Gujarat / Ahmedabad (if applicable) working with a vendor that has local presence means quicker mobilisation, local regulatory knowledge, regional labour & supply chain familiarity. Spectra’s operations in telecom imply they have field teams and infrastructure."
    }
  ];

  return (
    <div className="p-7 w-full h-full">
      {/* === CEO SECTION === */}
      <div className="inner">
        <div className="ceo-space h-full bg-[url('/assets/ceobg.jpg')] bg-cover bg-center flex items-end justify-center">
          <div className="image-div overflow-hidden w-full flex justify-center items-center bg-[linear-gradient(135deg,_rgba(13,80,167,0.8),_rgba(2,197,253,0.8))] relative">
            <Image
              src="/assets/ceoPic.png"
              alt="ceo"
              width={400}
              height={200}
              className="object-contain z-2"
            />
            <div className="ceo-title-space absolute bottom-0 left-0 w-full text-center text-white bg-opacity-50 py-4 z-3">
              <h2 className="text-6xl md:text-3xl lg:text-6xl font-bold">Jignesh Patel</h2>
              <p className="italic">CEO, Director</p>
            </div>
            <div className="ceo-rectangle border-[6px] rounded-lg border-transparent [border-image:linear-gradient(135deg,_rgba(2,197,253,1),_rgba(13,80,167,1))_1] p-4 md:p-6 text-white w-[300px] md:w-[400px] lg:w-[500px] h-[200px] md:h-[250px] lg:h-[300px] absolute z-0"></div>
          </div>
        </div>
        <div className="why-hire-spectra flex flex-col gap-10 text-center bg-[#001020] text-white px-7 py-20">
          <h4 className="text-2xl md:text-3xl lg:text-4xl font-bold">
            Why Hire Spectra Infratel
          </h4>

          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left mt-10">
            {hire.map((item, index) => (
              <div
                key={index}
                className="border border-gray-700 hover:border-cyan-400 transition-all duration-300  p-6 bg-[#0a1a2f] hover:bg-[#0e233f] shadow-md"
              >
                <h5 className="text-xl font-semibold text-cyan-400 mb-3">
                  {item.title}
                </h5>
                <p className="text-sm text-gray-300 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
