import Image from "next/image";

export default function ServiceCard({ service }) {
  return (
    <div className="shadow-sm hover:shadow-md transition-all duration-300 border-2 [border-image:linear-gradient(135deg,_rgba(2,197,253,1),_rgba(13,80,167,1))_1] w-full h-[550px] sm:h-[560px] flex flex-col bg-accent rounded-xl overflow-hidden">
      
     
      <div className="h-[220px] sm:h-[230px] overflow-hidden">
        <Image
          src={service.image}
          alt={service.title}
          width={400}
          height={300}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>

     
      <div className="p-5 flex flex-col justify-between flex-1 text-gray-800">
        
        <h3 className="text-lg sm:text-xl font-semibold text-gray-900 border-b pb-2">
          {service.title}
        </h3>
        <div className="mt-2 flex-1 overflow-hidden">
          {Array.isArray(service.description) ? (
            service.description.map((line, index) => (
              <p key={index} className="text-sm sm:text-base leading-relaxed">
                {line}
              </p>
            ))
          ) : (
            <p className="text-sm sm:text-base leading-relaxed">
              {service.description}
            </p>
          )}
        </div>

        {service.features && service.features.length > 0 && (
          <div className="mt-3 overflow-y-auto max-h-[180px] pr-2 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-transparent">
            <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
            <ul className="list-disc list-inside text-sm sm:text-base text-gray-700 space-y-1">
              {service.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
