import services from "@/app/components/data/serviceData";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import ServiceCard from "@/app/components/ServiceCard";

export default function Services() {
    return (
        <>
            <div className="p-7">
                <div className="relative w-full service-upper flex flex-col md:flex-row justify-start items-start">
                    <div className="border-l-8 ps-7 [border-image:linear-gradient(135deg,_rgba(2,197,253,1),_rgba(13,80,167,1))_1] mb-4 md:mb-0">
                        <h2 className="text-2xl md:text-3xl font-semibold my-2">Services</h2>
                    </div>
                </div>

                <div className="carousel absolute pe-7">
                    <Carousel className="relative mt-10">
                        <CarouselPrevious className="absolute left-5 z-10" />
                        <CarouselContent className="flex">
                            {services.map((service) => (
                                <CarouselItem key={service.id} className="basis-full sm:basis-1/2 md:basis-1/3">
                                    <ServiceCard service={service} />
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselNext className="absolute right-5 z-10" />
                    </Carousel>
                </div>


            </div>
            <div className="service-bottom w-full h-[600px] text-white bg-[#001020] flex items-end pe-7 mt-[350px]">
                {/* Additional content can go here */}
                <div className="flex justify-end items-center border-r-8 [border-image:linear-gradient(135deg,_rgba(2,197,253,1),_rgba(13,80,167,1))_1] w-full max-h-fit mb-30">
                    <p className='pe-7 text-sm md:text-base lg:text-lg text-gray-600 italic text-right w-1/3'>
                        Spectra Infratel provides end-to-end, Turnkey Telecommunications Infrastructure services, which means they handle the entire process of building and maintaining mobile and fiber optic networks for carriers and large enterprises.
                    </p>
                </div>
            </div>
        </>
    );
}
