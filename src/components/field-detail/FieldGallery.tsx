import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

const images = [
  'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
  'https://images.unsplash.com/photo-1595434091143-b375ced5fe5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
  'https://images.unsplash.com/photo-1524015368236-cf67f6b6f1f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
  'https://images.unsplash.com/photo-1551958219-acbc608c6377?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80'
];

export default function FieldGallery() {
  const [showModal, setShowModal] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const previousImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <>
      <div className="grid grid-cols-4 gap-2 h-96">
        <div className="col-span-2 row-span-2">
          <img
            src={images[0]}
            alt="Main field view"
            className="w-full h-full object-cover rounded-l-lg cursor-pointer"
            onClick={() => {
              setCurrentImage(0);
              setShowModal(true);
            }}
          />
        </div>
        <div className="col-span-2 grid grid-cols-2 gap-2">
          {images.slice(1).map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Field view ${index + 2}`}
              className={`w-full h-[11.75rem] object-cover cursor-pointer ${
                index === 1 ? 'rounded-tr-lg' : index === 3 ? 'rounded-br-lg' : ''
              }`}
              onClick={() => {
                setCurrentImage(index + 1);
                setShowModal(true);
              }}
            />
          ))}
        </div>
      </div>

      {/* Full-screen Gallery Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center">
          <button
            onClick={() => setShowModal(false)}
            className="absolute top-4 right-4 text-white p-2 hover:bg-white/10 rounded-full"
          >
            <X className="w-6 h-6" />
          </button>
          
          <button
            onClick={previousImage}
            className="absolute left-4 text-white p-2 hover:bg-white/10 rounded-full"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <img
            src={images[currentImage]}
            alt={`Field view ${currentImage + 1}`}
            className="max-h-[90vh] max-w-[90vw] object-contain"
          />
          
          <button
            onClick={nextImage}
            className="absolute right-4 text-white p-2 hover:bg-white/10 rounded-full"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      )}
    </>
  );
}