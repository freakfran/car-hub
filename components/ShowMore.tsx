'use client'

import {useRouter} from "next/navigation";
import {CustomButton} from "@/components/index";
import {updateSearchParams} from "@/util";

interface ShowMoreProps {
    pageNumber: number;
    isNext: boolean;
}

function ShowMore({pageNumber, isNext}: ShowMoreProps) {
    const router = useRouter();
    const handleNavigation = () => {
        const newLimit = (pageNumber + 1) * 12;
        const newPathName = updateSearchParams("limit", `${newLimit}`);
        router.push(newPathName,{ scroll: false});
    }

    return (
        <div className="w-full flex-center gap-5 mt-10">
            {
                !isNext && (
                    <CustomButton
                        title="Show More"
                        btnType="button"
                        containerStyles="bg-primary-blue rounded-full text-white"
                        handleClick={handleNavigation}
                    />
                )
            }
        </div>
    );
}

export default ShowMore;