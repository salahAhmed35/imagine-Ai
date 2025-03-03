import React from "react";


const TransformedImage = ({image,
    type, title, transformationConfig, 
    isTransforming, setIsTransforming,
    hasDownload= false} : TransformedImageProps) =>{
    
    const downloadHandler = () => {}


    return(
        <div className="flex flex-col gap-4">
            <div className="flex-between">
                <h3 className="font-bold text-3xl text-blue-500">Transformed</h3>
                {hasDownload && (
                    <button className="download-btn" onClick={downloadHandler}>
                        download
                    </button>
                )}
            </div>
            {image?.publicId && transformationConfig ? (
                <div className="relative"></div>
            ): (
                <div className="transformed-placeholder">
                    Transformed-Image
                </div>
            )}
        </div>
    )
}

export default TransformedImage