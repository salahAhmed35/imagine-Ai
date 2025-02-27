import { aspectRatioOptions } from "@/constants";
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export type AspectRatioKey = keyof typeof aspectRatioOptions;
export const getImageSize = (
  type: string,
  image: any,
  dimension: "width" | "height"
): number => {
  if (type === "fill") {
    return (
      aspectRatioOptions[image.aspectRatio as AspectRatioKey]?.[dimension] ||
      1000
    );
  }
  return image?.[dimension] || 1000;
};
export const handleError = (error:unknown) => {
  if(error instanceof Error){
    throw new Error(error.message)
  }else if(typeof error === "string"){
    throw new Error(`Error ${error}`)
  }else{
    throw new Error(`Unknown error: ${JSON.stringify(error)}`)
  }
}