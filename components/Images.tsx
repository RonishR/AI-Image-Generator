'use client'  //as we will use swr

import React, { useState } from 'react';
import Modal from "react-modal";
import Image from "next/image";
import useSWR from "swr";
import fetchImages from "../lib/fetchImages"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';
import { faDownload } from '@fortawesome/free-solid-svg-icons';



const closeButtonBlack = <FontAwesomeIcon icon={faCircleXmark} size = "2xl" style={{color: "#000000",}} />;
const closeButtonRed = <FontAwesomeIcon icon={faCircleXmark} size = "2xl" style={{color: "#ff0000",}} />;
const downloadBtn = <FontAwesomeIcon icon={faDownload} size = "xl" style={{color: "#000000",}} />;



type ImageType = {
    name: string;
    url: string;
  };

function Images() {
    const [selectedImage, setSelectedImage] = useState<ImageType | null>(null);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
      setIsHovered(true);
    };
  
    const handleMouseLeave = () => {
      setIsHovered(false);
    };

    const openModal = (image: ImageType) => {
        setSelectedImage(image);
        setModalIsOpen(true);
      };

    const closeModal = () => {
        setSelectedImage(null);
        setModalIsOpen(false);
        setIsHovered(false);
      };


    const {
        data: images,
        isLoading,
        mutate: refreshImages,
        isValidating,
      } = useSWR("images", fetchImages, {
        revalidateOnFocus: false,
      });
    console.log(images);


    return (
        <div>

          <button onClick={() => refreshImages(images)}
          className="fixed bottom-10 right-10 bg-violet-400/90 text-white px-5 py-3 rounded-md 
          hover:bg-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-400 font-bold z-20">
            {!isLoading && isValidating ? "Refreshing..." : "Refresh Images" }
          </button>



          {isLoading && (
        <p className="animate-pulse text-center font-extralight text-white">
          Loading <span className="text-violet-400">AI</span> Generated
          Images...
        </p>
          )}
            <div className = "grid gap-4 grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 px-0 md:px-10 ">
                {images?.imageUrls?.map((image: ImageType) => (
                  <div key={image.name}>
                    <Image 
                        src={image.url} 
                        alt={image.name} 
                        width={800} 
                        height={800} 
                        className = "w-full rounded-sm shadow-2xl drop-shadow-lg -z-10 transition duration-200 hover:scale-105"
                         onClick={() => openModal(image)}
                    />
                </div>
                ))}
            </div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Image Modal"
                className = "fixed inset-0 flex items-center justify-center bg-gradient-to-b from-black"
            >
                {selectedImage && (
                    <div className = "text-center" >
                     <Image
                        src={selectedImage.url}
                        alt={selectedImage.name}
                        width={800}
                        height={800}

                    />
                    <h1 className = "font-semibold">{selectedImage.name.split("_").shift()?.toString().split(".").shift()}</h1>
                    <button 
                      onClick={closeModal}
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                      className='mt-2'
                    >
                      {isHovered ? closeButtonRed : closeButtonBlack}
                    </button>
                    <a href = {selectedImage.url} download className="download-btn"><button className='pl-2'>{downloadBtn}</button>
                   </a>
                    </div>
                )}
            </Modal>

        </div>
    );
}

export default Images