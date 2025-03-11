
import React from "react";
import { getUserById } from "@/lib/actions/user.actions";
import { currentUser } from "@clerk/nextjs/server";
import Image from "next/image";
import { pricingPlans } from "@/constants";
const ProfilePage =async () => {
    const user = await currentUser();
    if(!user){
        return 'user not found'
    }
    const userData = await getUserById(user.id)
    const getPlanImageSrc = (planId: number | string) => {
        if(planId === 1){
            return pricingPlans[0].icon
        }else if(planId === 2){
            return pricingPlans[1].icon
        }else{
            return pricingPlans[2].icon
        }
    }
    return(
        <>
            <div className="profile">
                <h1 className="text-3xl font-bold mb-5">Profile page</h1>

                <div className="flex gap-3 flex-wrap">
                    <div className="credit-card grow p-3 rounded shadow-md flex justify-between">
                        <div className="flex flex-col">
                            <span className="text-meduim mb-3 font-semibold text-gray-500">number of credits</span>
                            <span className="font-bold text-xl text-blue-900 ">{userData.creditsBalance}</span>
                        </div>
                        <Image src = "/assets/coins.png" width={30} height={30} alt ="credits"/>
                    </div>
                    <div className="paln-card grow p-3 rounded shadow-md flex justify-between">
                        <div className="flex flex-col">
                            <span className="text-meduim mb-3 font-semibold text-gray-500">your plan</span>
                            <span className="font-bold text-xl text-blue-900 ">{userData.planId === 1 ? 'Free plan' :userData.planId === 2 ? "Basic plan" : "Premium Plan"}</span>
                        </div>
                        <Image src={getPlanImageSrc(userData.planId)} width={30} height = {30} alt= 'plan'/>
                    </div>
                    <div className="transformations_number-card grow p-3 rounded shadow-md flex justify-between">
                        <div className="flex flex-col">
                            <span className="text-meduim mb-3 font-semibold text-gray-500">number of transformations</span>
                            <span className="font-bold text-xl text-blue-900 ">3</span>
                        </div>
                        <Image src = "/assets/transformation_gear.png" width={30} height = {30} alt= 'transformation'/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProfilePage