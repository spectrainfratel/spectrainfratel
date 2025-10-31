import Image from "next/image";
import React from "react";

export default function OpenPositions() {
  return (
    <div className="bg-white w-full py-8 px-5 flex flex-col items-center">
      {/* Title */}

      {/* Main content grid */}
      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left: Image */}
        <div>
          <h1 className="text-2xl md:text-3xl font-serif font-bold mb-6 text-black w-full max-w-5xl">
            Why join our team?
          </h1>
          <div className="w-full h-48 md:h-[220px]  overflow-hidden">
            <Image
              src="/assets/career/team.jpg"
              alt="Team"
              width={700}
              height={500}
              className="object-cover w-full h-full"
              priority
            />
          </div>
        </div>
        {/* Right: Reasons list */}
        <div className="flex flex-col gap-6">
          {/* 01 */}
          <div>
            <div className="text-sky-600 text-4xl font-semibold mb-2">01</div>
            <div>
              <span className="font-bold text-black">
                We are the best in what we do
              </span>
              <p className="text-gray-700 text-sm mt-1">
                Exposure to the entire telecom lifecycle: You won{"'"}t be
                siloed into just one task. You{"'"}ll gain valuable,
                well-rounded experience working across multiple revenue-impact
                processes (site acquisition, civil engineering, passive/active
                build, network solutions, BMS & battery banks, and beyond). This
                holistic experience makes you highly marketable.
              </p>
            </div>
          </div>
          {/* 02 */}
          <div>
            <div className="text-sky-600 text-4xl font-semibold mb-2">02</div>
            <div>
              <span className="font-bold text-black">
                Innovative Solutions for Modern Challenges
              </span>
              <p className="text-gray-700 text-sm mt-1">
                Our team leverages cutting-edge technology and creative
                problem-solving to address today{"'"}s most pressing telecom
                issues. You will be part of a dynamic environment that
                encourages innovation and the pursuit of excellence, ensuring
                that your ideas can flourish and make a real impact.
              </p>
            </div>
          </div>
          {/* 03 */}
          <div>
            <div className="text-sky-600 text-4xl font-semibold mb-2">03</div>
            <div>
              <span className="font-bold text-black">
                Commitment to Professional Development
              </span>
              <p className="text-gray-700 text-sm mt-1">
                We believe in investing in our talent. Through continuous
                training, mentorship, and support, we empower you to advance
                your skills and career. Join workshops, pursue certifications,
                and develop leadership qualities as part of a team dedicated to
                helping you reach your potential.
              </p>
            </div>
          </div>
          {/* 04 */}
          <div>
            <div className="text-sky-600 text-4xl font-semibold mb-2">04</div>
            <div>
              <span className="font-bold text-black">
                Collaborative Team Culture
              </span>
              <p className="text-gray-700 text-sm mt-1">
                Our inclusive and collaborative work culture fosters teamwork
                and open communication. You{"'"}ll routinely engage with peers
                and senior managers, feel welcomed, and belong to a supportive
                environment where every contribution is valued and everyone
                contributes to the success of the project.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
