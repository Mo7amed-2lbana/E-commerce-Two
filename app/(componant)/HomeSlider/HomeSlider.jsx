"use client";
import React, { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import "./sliderStyle.css";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";


const HomeSlider = () => {
  const imagesLinks = [
    "black.jpg",
    "cyber-monday-shopping-sales.jpg",
    "limited-time-shopping-cart-with-retro-alarm-clock-isolated-yellow-3d-render-background.jpg",
  ];
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider(
    {
      // loop: true,
      initial: 0,
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel);
      },
      created() {
        setLoaded(true);
      },
    },
    [
      (slider) => {
        let timeout;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 5000);
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );

  return (
    <>
      <div className="navigation-wrapper">
        <div ref={sliderRef} className="keen-slider">
          {/* slide  */}
          {imagesLinks.map((img, idx) => (
            <>
              <div className={`keen-slider__slide number-slide${idx + 1}`}>
                <img
                  src={`./assets/images/${img}`}
                  className=" h-[300px] md:h-[500px] w-full"
                  alt={`slide${idx + 1}`}
                />
                
              </div>
            </>
          ))}
          {/* slide  */}
        </div>

        {loaded && instanceRef.current && (
          <>
            <Arrow
              left
              onClick={(e) =>
                e.stopPropagation() || instanceRef.current?.prev()
              }
              disabled={currentSlide === 0}
            />

            <Arrow
              onClick={(e) =>
                e.stopPropagation() || instanceRef.current?.next()
              }
              disabled={
                currentSlide ===
                instanceRef.current.track.details.slides.length - 1
              }
            />
          </>
        )}
      </div>
    </>
  );
};


  // Arrow function
  function Arrow(props) {
    const disabeld = props.disabled ? " arrow--disabled" : "";
    return (
      <>
        <span onClick={props.onClick} className={`arrow ${props.left ? "arrow--left" : "arrow--right"} ${disabeld}`}>
          {props.left ? (
            <IoIosArrowBack className="mt-1" size={50} color="#c6c6c6" />
          ) : (
            <IoIosArrowForward className="mt-1" size={50} color="#c6c6c6" />
          )}
        </span>
      </>
    );
  }


export default HomeSlider;
