import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import styles from "./style.css";

const MyCarousel = ({ isEditable }) => {
  const [content, setContent] = useState("Initial content");

  const handleContentChange = (event) => {
    setContent(event.target.value);
  };

  const handleEditClick = () => {};

  const handleSaveClick = () => {
    isEditable(false);
    // Perform any save/update logic here
  };

  return (
    <div>
      {isEditable ? (
        <input type="text" value={content} onChange={handleContentChange} />
      ) : (
        <Carousel
          showThumbs={false}
          renderArrowPrev={(onClickHandler, hasPrev, label) =>
            hasPrev && (
              <button
                type="button"
                onClick={onClickHandler}
                title={label}
                style={{
                  position: "absolute",
                  zIndex: 2,
                  left: 15,
                  top: "50%",
                  color: "white",
                  transform: "translateY(-50%)",
                  background: "red",
                  borderRadius: "50%",
                  border: "none",
                  width: 30,
                  height: 30,
                  cursor: "pointer",
                }}
              >
                <FiArrowLeft />
              </button>
            )
          }
          renderArrowNext={(onClickHandler, hasNext, label) =>
            hasNext && (
              <button
                type="button"
                onClick={onClickHandler}
                title={label}
                style={{
                  position: "absolute",
                  zIndex: 2,
                  right: 15,
                  top: "50%",
                  color: "white",
                  transform: "translateY(-50%)",
                  background: "red",
                  borderRadius: "50%",
                  border: "none",
                  width: 30,
                  height: 30,
                  cursor: "pointer",
                }}
              >
                <FiArrowRight />
              </button>
            )
          }
        >
          <div>
            <img
              src="https://www.turibus.com.mx/documents/1085398/1086140/bannerchigna_desk.jpg"
              alt="Image 1"
              style={{ width: "100%", height: "50%" }}
            />
          </div>
          <div>
            <img
              src="https://www.turibus.com.mx/documents/1085398/1086053/bannerpuebla_desk.jpg"
              alt="Image 2"
              style={{ width: "100%", height: "50%" }}
            />
          </div>
          <div>
            <img
              src="https://www.turibus.com.mx/documents/1085398/1086053/bannerpuebla_desk.jpg"
              alt="Image 3"
              style={{ width: "100%", height: "50%" }}
            />
          </div>
        </Carousel>
      )}
      {isEditable ? (
        <button onClick={handleSaveClick}>Save</button>
      ) : (
        <button onClick={handleEditClick}>Edit</button>
      )}
    </div>
  );
};

export default MyCarousel;
