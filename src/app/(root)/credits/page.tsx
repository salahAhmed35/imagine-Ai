import React from "react";
import { pricingPlans } from "@/constants";
import Image from "next/image";
const CreditPage = () => {
    return (
        <>
            <div className="but-credits">
                <div className=" text-content text-center mb-8">
                    <h1 className="text-3xl  my-5 font-semibold text-gray-900 dark:text-white">
                    Chosse your rihgt plan!
                    </h1>
                    <p className="text-lg  mb-4 text-gray-500 dark:text-gray-400">
                    Choose the right plan for your needs. You can always upgrade or downgrade your plan later.
                    </p>
                </div>
                <div className="pricing-plans flex flex-wrap items-center justify-center items-center gap-2">
                    {pricingPlans.map((plan) => (
                        <div className="w-full h-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                            <div className="card-header flex flex-col justify-center items-center gap-3">
                                <Image src={plan.icon} alt={plan.name} width={55} height={55} className="my-3 " />
                                <h5 className="mb-4 text-xl font-semibold uppercase text-dark-400 dark:text-gray-400">{plan.name}</h5>
                            </div>
                            <button type="button" className="text-white my-4 bg-blue-500 transation duration-300 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-900 font-semibold rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center">Choose plan</button>

                            <div className="flex items-baseline text-gray-900 dark:text-white">
                                <span className="text-3xl font-semibold">$</span>
                                <span className="text-5xl font-extrabold tracking-tight">{plan.price}</span>
                                <span className="ms-1 text-xl font-normal text-gray-500 dark:text-gray-400">/month</span>
                            </div>
                            <ul role="list" className="space-y-5 my-7">
                                {Object.keys(plan.features).map((key) => (
                                    <li className="flex items-center" id={key}>
                                        {plan.features[key] ? <svg className="shrink-0 w-4 h-4 text-blue-700 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                        </svg> : <svg className="shrink-0 w-4 h-4 text-gray-400 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                        </svg>}
                                        <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">{key}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                    ))}
                </div>
            </div>
        </>
    )
}
export default CreditPage
