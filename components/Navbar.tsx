import React from 'react';
import Link from "next/link";
import Image from "next/image";
import {CustomButton} from "@/components/index";

function Navbar() {
    return (
        <header className="w-full absolute z-10">
            <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4">
                <Link href="/" className="flex items-center justify-center">
                    <Image src="/logo.svg" alt="Car hub logo" width="118" height="18" className="object-contain"/>
                </Link>
                
                <CustomButton
                    title="log in"
                    containerStyles="text-primary-blue rounded-full bg-white min-w-[130px]"
                    btnType="button"/>
            </nav>
        </header>
    );
}

export default Navbar;