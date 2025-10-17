import services from "@/app/components/data/serviceData";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import ServiceCard from "@/app/components/ServiceCard";

export default function Services() {
    return (
        <div className="p-7">
            <div className="w-full service-upper flex flex-col md:flex-row justify-start items-start">
                <div className="border-l-8 ps-7 [border-image:linear-gradient(135deg,_rgba(2,197,253,1),_rgba(13,80,167,1))_1] mb-4 md:mb-0">
                    <h2 className="text-2xl md:text-3xl font-semibold my-2">Services</h2>
                </div>
            </div>

            {/* Wrap everything inside Carousel */}
            <Carousel className="relative mt-10">
                <CarouselPrevious className="absolute left-5 z-10" />
                <CarouselContent className="flex gap-4">
                    {services.map((service) => (
                        <CarouselItem key={service.id} className="basis-full sm:basis-1/2 md:basis-1/3">
                            <ServiceCard service={service} />
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselNext className="absolute right-5 z-10" />
            </Carousel>
        </div>
    );
}
