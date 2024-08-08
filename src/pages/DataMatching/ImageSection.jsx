import { REACT_APP_IP } from "../../services/common";

const ImageSection = ({
  imageContainerRef,
  currentImageIndex,
  imageUrls,
  imageRef,
  zoomLevel,
  selectedCoordintes,
  templateHeaders,
}) => {
  return (
    <div
      ref={imageContainerRef}
      className="mx-auto bg-white rounded-lg shadow-lg"
      style={{
        position: "relative",
        border: "2px solid #007bff",
        width: "55rem",
        height: "23rem",
        overflow: "auto",
        scrollbarWidth: "thin",
      }}
    >
      <img
        // src={`data:image/jpeg;base64,${imageUrls[currentImageIndex]?.base64Image}`}
        src={`http://${REACT_APP_IP}:4000/images/${imageUrls[currentImageIndex]}`}
        alt="Selected"
        ref={imageRef}
        style={{
          width: "48rem",
          transform: `scale(${zoomLevel})`,
          transformOrigin: "center center",
          borderRadius: "0.5rem",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.8)",
        }}
        draggable={false}
      />

      {!selectedCoordintes &&
        templateHeaders?.templetedata?.map(
          (data, index) =>
            data.pageNo === currentImageIndex && (
              <div
                key={index}
                style={{
                  border: "2px solid rgba(0, 123, 255, 0.8)",
                  position: "absolute",
                  backgroundColor: "rgba(0, 123, 255, 0.2)",
                  left: `${data.coordinateX}px`,
                  top: `${data.coordinateY}px`,
                  width: `${data.width}px`,
                  height: `${data.height}px`,
                  transform: `scale(${zoomLevel})`,
                  transformOrigin: "center center",
                  borderRadius: "0.25rem",
                  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                }}
              ></div>
            )
        )}
    </div>
  );
};

export default ImageSection;
