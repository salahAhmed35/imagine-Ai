import React from "react";
import  Image  from "next/image";
import { getImageSize, debounce } from "@/lib/utils";
import { CldImage } from "next-cloudinary";
const TransformedImage = ({image,
    type, title, transformationConfig, 
    isTransforming, setIsTransforming,
    hasDownload= true} : TransformedImageProps) =>{
    
    const downloadHandler = () => {}


    return(
        <div className="flex flex-col gap-4">
            <div className="flex-between">
                <h3 className="font-bold text-3xl text-blue-500">Transformed</h3>
                {hasDownload && (
                    <button className="download-btn" onClick={downloadHandler}>
                        <Image 
                            src = "/assets/download.svg" 
                            alt = "download"
                             width= {24}
                              height={24}/>
                    </button>
                )}
            </div>
            {image?.publicId && transformationConfig ? (
                <div className="relative">
                   <CldImage 
                      width={getImageSize(type, image, "width")}
                      height={getImageSize(type, image, "height")}
                      src={image?.publicId}
                      alt = {image.title}
                      className="cld-image"
                      onLoad = {() => {
                        setIsTransforming && setIsTransforming(false)
                      }}
                      onError = {() => {
                        debounce(() =>{
                            setIsTransforming && setIsTransforming(false)
                        }, 8000)
                      }}
                      {...transformationConfig}
                      />
                      {isTransforming && (
                        <div className="transforming-loader">
                            <Image
                              src ="/assets/spinner.svg"
                              width = {50}  
                              height = {50}  
                              alt = "transforming"
                            />
                        </div>
                      )}
                </div>
            ): (
                <div className="transformed-placeholder">
                    Transformed-Image
                </div>
            )}
        </div>
    )
}

export default TransformedImage