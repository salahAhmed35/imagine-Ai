"use-client"
import React from "react";
import { toast } from "sonner"
import { CldUploadWidget, CldImage } from 'next-cloudinary';
import Image from "next/image";
import { PlaceholderValue } from "next/dist/shared/lib/get-img-props";
type MediaUploaderProps = {
  onChangeValue: (value: string) => void;
  setImage: React.Dispatch<any>;
  publicId : string;
  image: any;
  type: string;
}

const MediaUploader = ({onChangeValue, setImage, image, type, publicId} : MediaUploaderProps) => {
    const onUploadSuccessHandler = (result: any) => {
      setImage((prevState: any) => ({
        ...prevState,
        publicId: result?.info?.public_id,
        width: result?.info?.width,
        height: result?.info?.height,
        secureUrl: result?.info?.secure_url
      }))

      onChangeValue(result?.info?.public_id)

      toast.success('Image uploaded successfully', {
        duration: 5000,
         description: "1 credit was deducted from your acount",
         className: "success-toast"
      })
    }
    const onUploadErrorHandler = () => {
        toast.error('something went wrong', {
          duration: 5000,
          description: "please try again",
          className: "error-toast"
        })
    }
    return(
        <CldUploadWidget 
          uploadPreset="imagine_ai"
          options={{
            multiple: false,
            resourceType: 'image'
          }}
          onSuccess={onUploadSuccessHandler}
          onError={onUploadErrorHandler}
        >
          {({open}) => {
            return(
              <div className="flex flex-col gap-4">
              <h3 className="font-bold text-3xl text-blue-500 ">Original</h3>
              {publicId ? (
                <>
                  <div className="cursor-pointer rounded-[10px]">
                    <CldImage 
                      width={250}
                      height={250}
                      src={publicId}
                      alt="image"
                      className="cld-image" />
                  </div>
                </>
              ) : (
                <div className="media-uploader_cta" onClick={() => open()}>
                  <div className="media-uploader_cta-image w-48 h-48 cursor-pointer flex justify-center items-center flex-col wrap-3 shadow-lg rounded">
                    <Image src = "/assets/add.svg" width={35} height={35} alt="upload image" className="bg-blue-500"/>
                    <p className="text-gray-500 font-semibold">Upload image</p>
                  </div>
                </div>
              )}
            </div>
            )
          }}
        </CldUploadWidget>
    )
}

export default MediaUploader