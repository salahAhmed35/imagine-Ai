import React from "react";
import Header from "@/components/shared/Header";
import { transformationTypes } from "@/constants";
import TransformationForm from "@/components/shared/transformationForm";
import { auth } from "@clerk/nextjs/server";
import { getUserById } from "@/lib/actions/user.actions";
import { redirect } from "next/navigation";

const AddTransformationTypePage = async ({ params: { type } }: SearchParamProps) => {
  const { userId } = await auth();
  const transformation =  transformationTypes[type];

  if (!userId) redirect('/sign-in')

  const user = await getUserById(userId);

  return (
    <>
      <div className="p-3 md:w-[950px] mx-auto">
        <Header
          title={transformation.title}
          subtitle={transformation.subTitle}
        />

        <section className="mt-10">
          <TransformationForm
            action="Add"
            userId={user._id}
            type={transformation.type as TransformationTypeKey}
            creditBalance={user.creditBalance}
          />
        </section>
      </div>
    </>
  )
}
export default AddTransformationTypePage