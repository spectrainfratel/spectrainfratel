import services from "@/app/components/data/serviceData";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import ServiceCard from "@/app/components/ServiceCard";

export default function Services() {
    return (
        <>
            <div className="p-5 sm:p-7 lg:p-10">
                <div className="relative w-full service-upper flex flex-col md:flex-row justify-start items-start">
                    <div className="border-l-4 sm:border-l-8 ps-5 sm:ps-7 [border-image:linear-gradient(135deg,_rgba(2,197,253,1),_rgba(13,80,167,1))_1] mb-4 md:mb-0">
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold my-2">Services</h2>
                    </div>
                </div>

                <div className="carousel relative lg:mt-8 sm:mt-10 lg:pe-5">
                    <Carousel className="relative">
                        <CarouselPrevious className="absolute left-3 sm:left-5 z-10 scale-75 sm:scale-100" />
                        <CarouselContent className="flex">
                            {services.map((service) => (
                                <CarouselItem key={service.id} className="basis-full sm:basis-1/2 md:basis-1/2 lg:basis-1/3">
                                    <ServiceCard service={service} />
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselNext className="absolute right-3 sm:right-5 z-10 scale-75 sm:scale-100" />
                    </Carousel>
                </div>
            </div>
            <div className="service-bottom w-full h-[300px] sm:h-[400px] md:h-[500px] text-white bg-[#001020] flex items-end pe-5 sm:pe-7 lg:mt-[250px] ">
                <div className="flex justify-end items-center border-r-4 sm:border-r-8 [border-image:linear-gradient(135deg,_rgba(2,197,253,1),_rgba(13,80,167,1))_1] w-full max-h-fit mb-20 sm:mb-30">
                    <p className='pe-5 sm:pe-7 text-xs sm:text-sm md:text-base lg:text-lg text-gray-600 italic text-right w-2/3 sm:w-1/3'>
                        Spectra Infratel provides end-to-end, Turnkey Telecommunications Infrastructure services, which means they handle the entire process of building and maintaining mobile and fiber optic networks for carriers and large enterprises.
                    </p>
                </div>
            </div>
        </>
    );
}
