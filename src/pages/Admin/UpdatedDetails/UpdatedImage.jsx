import React, { useState, useCallback } from 'react';
import Draggable from 'react-draggable';
import { REACT_APP_IP } from '../../../services/common';

const Modal = ({ setOpenImage, openImage, updatedImages, setUpdatedImages }) => {
    const [zoom, setZoom] = useState(1);

    const handleClose = () => {
        setOpenImage(false);
        setUpdatedImages([]);
    };

    const handleVerify = () => {
        handleClose();
    };

    const handleWheel = useCallback((e) => {
        e.preventDefault();
        const zoomAmount = e.deltaY > 0 ? -0.1 : 0.1;
        setZoom(prevZoom => {
            const newZoom = Math.max(1, Math.min(prevZoom + zoomAmount, 3));
            return newZoom;
        });
    }, []);

    if (!openImage) return null;

    return (
        <div
            className="absolute inset-0 flex items-center justify-center z-50"
            onWheel={handleWheel}
        >
            <Draggable
                handle=".handle"
                cancel="button"
            >
                <div className="bg-white rounded-lg shadow-lg w-full max-w-xs md:max-w-sm lg:max-w-md p-4 mx-4 sm:mx-6 md:mx-8 lg:mx-10 relative overflow-hidden">
                    <div className="handle cursor-move p-2 bg-gray-100 rounded-t-lg flex justify-between items-center">
                        <h3 className="text-lg font-semibold">Drag me</h3>
                        <button
                            className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
                            onClick={handleVerify}
                        >
                            Verify
                        </button>
                    </div>
                    <div className="relative overflow-auto" style={{ maxHeight: '60vh', maxWidth: '100%' }}>
                        <img
                            src={`http://${REACT_APP_IP}:4000/images/${updatedImages}`}
                            alt="Modal Content"
                            className="w-full h-auto"
                            style={{ transform: `scale(${zoom})`, transformOrigin: 'center center' }}
                        />
                    </div>
                    <div className="flex justify-between mt-4">
                        <button
                            className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400"
                            onClick={handleClose}
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            </Draggable>
        </div>
    );
};

export default Modal;
