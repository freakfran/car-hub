'use client'
import React, {Fragment, useState} from 'react';
import {Listbox, ListboxButton, ListboxOption, ListboxOptions, Transition} from "@headlessui/react";
import Image from "next/image";
import {useRouter} from "next/navigation";
import {updateSearchParams} from "@/util";

interface CustomFilterProps {
    title: string;
    options: { title: string, value: string }[];
}

function CustomFilter({title, options}: CustomFilterProps) {
    const [selected, setSelected] = useState(options[0]);
    const router = useRouter();

    const handleUpdateParameters = (e:{ title: string, value: string}) => {
        const newPathname = updateSearchParams(title, e.value.toLowerCase())
        router.push(newPathname, {scroll: false});
    }

    return (
        <div className="w-fit">
            <Listbox
                value={selected}
                onChange={(e) => {
                    setSelected(e);
                    handleUpdateParameters(e);
                }}
            >
                <div className="relative w-fit z-10">
                    <ListboxButton className="custom-filter__btn">
                        <span className="block truncate">{selected.title}</span>
                        <Image
                            src="/chevron-up-down.svg"
                            alt="chevron up down"
                            width={20}
                            height={20}
                            className="ml-4 object-contain"/>
                    </ListboxButton>
                    <Transition
                        as={Fragment}
                        leave="transition duration-100 ease-in"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <ListboxOptions className="custom-filter__options">
                            {options.map((option) => (
                                <ListboxOption
                                    key={option.title}
                                    className={({focus}) =>
                                        `relative cursor-default select-none py-2 px-4 
                                        ${focus ? 'bg-primary-blue text-white' : 'text-gray-900'}`
                                    }
                                    value={option}
                                >
                                    {({selected}) => (
                                        <span
                                            className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}>
                                           {option.title}
                                            </span>
                                    )}
                                </ListboxOption>
                            ))}
                        </ListboxOptions>

                    </Transition>
                </div>
            </Listbox>
        </div>
    );
}

export default CustomFilter;