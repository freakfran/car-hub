'use client'
import {CarProps} from "@/types";
import {calculateCarRent, generateCarImageUrl} from "@/util";
import Image from "next/image";
import {CarDetails, CustomButton} from "@/components/index";
import {useState} from "react";

interface CarCardProps {
    car: CarProps;
}
function CarCard({car}: CarCardProps) {
    const [isOpen, setIsOpen] = useState(false);
    const {city_mpg, year, make, model, transmission, drive} = car;
    const carRent = calculateCarRent(city_mpg, year);
    return (
        <div className="car-card group">
            <div className="car-card__content">
                <h2 className="car-card__content-title">
                    {make} {model}
                </h2>
            </div>
            <p className="flex mt-6 text-[32px] leading-[38px] font-extrabold">
                <span className="self-start text-[14px] leading-[17px] font-semibold">
                    $
                </span>
                {carRent}
                <span className="self-end text-[14px] leading-[17px] font-medium">
                    /day
                </span>
            </p>

            <div className="w-full relative h-40 my-3 object-contain">
                <Image src={generateCarImageUrl(car)} className="object-contain" alt="car model" fill priority />
            </div>

            <div className="w-full flex relative mt-2">
                <div className="flex group-hover:invisible justify-between w-full text-grey">
                    <div className="flex flex-col justify-center items-center gap-2">
                        <Image src="/steering-wheel.svg" width={20} height={20} alt="steering wheel"/>
                        <p className="text-[14px]">
                            {transmission === 'a' ? 'Automatic' : 'Manual'}
                        </p>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-2">
                        <Image src="/tire.svg" width={20} height={20} alt="tire"/>
                        <p className="text-[14px]">
                            {drive.toUpperCase()}
                        </p>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-2">
                        <Image src="/gas.svg" width={20} height={20} alt="gas"/>
                        <p className="text-[14px]">
                            {city_mpg} MPG
                        </p>
                    </div>
                </div>

                <div className="car-card__btn-container">
                    <CustomButton
                        title="View More"
                        containerStyles="w-full py-[16px] bg-primary-blue rounded-full"
                        textStyles="text-white text-[14px] leading-[17px] font-bold"
                        rightIcon="/right-arrow.svg"
                        handleClick={() => setIsOpen(true)}
                    />
                </div>
            </div>

            <CarDetails car={car} isOpen={isOpen} closeModal={() => setIsOpen(false)}/>
        </div>
    );
}

export default CarCard;