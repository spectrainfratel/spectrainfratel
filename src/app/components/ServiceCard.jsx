import Image from "next/image";

export default function ServiceCard({ service }) {
  return (
    <div className="shadow-sm hover:shadow-md transition [border-image:linear-gradient(135deg,_rgba(2,197,253,1),_rgba(13,80,167,1))_1] border-2 w-full h-[500px] sm:h-[500px] lg:h-[550px] flex flex-col">
      <Image
        src={service.image}
        alt={service.title}
        width={200}
        height={150}
        className="w-full h-80 sm:h-80 md:h-80 object-cover"
      />
      <div className="card-content p-4 border flex flex-col items-start justify-between bg-accent h-full">
        <h3 className="text-lg sm:text-xl font-semibold mb-2">
          {service.title}
        </h3>
        <div className="text-sm sm:text-base text-gray-600 mb-2 space-y-1">
          {Array.isArray(service.description) ? (
            service.description.map((line, index) => <p key={index}>{line}</p>)
          ) : (
            <p>{service.description}</p>
          )}
        </div>
      </div>
    </div>
  );
}
