'use client'
import React, {MouseEventHandler} from 'react';

import Image from "next/image";


interface CustomButtonProps {
    title: string;
    containerStyles?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
    btnType?: "button" | "submit";
    textStyles?: string;
    rightIcon?: string;
}
function CustomButton({title, containerStyles, handleClick,btnType, textStyles, rightIcon}: CustomButtonProps) {
    return (
        <button
            disabled={false}
            type={btnType || 'button'}
            className={`custom-btn ${containerStyles}`}
            onClick={handleClick}>
            <span className={`flex-1 ${textStyles}`}>
                {title}
            </span>
            {rightIcon && (
                <div className="relative w-6 h-6">
                    <Image fill src={rightIcon} alt="right icon" className="object-contain"/>
                </div>
            )}
        </button>
    );
}

export default CustomButton;