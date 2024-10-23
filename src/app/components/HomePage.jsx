"use client";
import { TrendCard } from "./TrendCard";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
    const { className, onClick } = props;
    return (
      <div
        className={"cursor-pointer hover:opacity-50 absolute -bottom-12 right-0 w-10 h-10 rounded-md"}
        onClick={onClick}
    >
        <img src="./forward.png" alt="" className="w-10 h-10"/>
    </div>
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, onClick } = props;
    return (
      <div
        className={"cursor-pointer hover:opacity-50 absolute -bottom-12 right-12 w-10 h-10 rounded-md"}
        onClick={onClick}
      > 
      <img src="./back.png" alt="" className="w-10 h-10"/>
      </div>
    );
  }

export const HomeP = () => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
      };

    return (
        <div className="mt-24">
            <section className="w-screen max-w-[1216px]">
                <Slider {...settings}>
                <section className="relative">
                <img src="https://via.placeholder.com/1210x650" alt="" className="w-[1210px] h-[650px] rounded-xl" />
                <div className="bg-white border rounded-[15px] w-[600px] h-[250px] absolute bottom-0 left-0 mb-4 ml-4 p-[40px]">
                    <p className="text-white border rounded-[6px] bg-[#4B6BFB] w-[100px] px-[10px] py-[4px] text-[14px] font-[500] text-center">Technology</p>
                    <h1 className="text-[36px] font-sans leading-[40px] font-[600] pr-[70px] pt-[20px]">Grid System For Better Design User Interface</h1>
                    <p className="text-[#97989F] pt-[20px]">August 20, 2022</p>
                </div>
            </section>
            <section className="relative">
                <img src="./largeImg.webp" alt="" className="w-[1210px] h-[650px] rounded-xl" />
                <div className="bg-white border rounded-[15px] w-[600px] h-[250px] absolute bottom-0 left-0 mb-4 ml-4 p-[40px]">
                    <p className="text-white border rounded-[6px] bg-[#4B6BFB] w-[100px] px-[10px] py-[4px] text-[14px] font-[500] text-center">Technology</p>
                    <h1 className="text-[36px] font-sans leading-[40px] font-[600] pr-[70px] pt-[20px]">Grid System For Better Design User Interface</h1>
                    <p className="text-[#97989F] pt-[20px]">August 20, 2022</p>
                </div>
            </section>
            <section className="relative">
                <img src="https://via.placeholder.com/1210x650" alt="" className="w-[1210px] h-[650px] rounded-xl" />
                <div className="bg-white border rounded-[15px] w-[600px] h-[250px] absolute bottom-0 left-0 mb-4 ml-4 p-[40px]">
                    <p className="text-white border rounded-[6px] bg-[#4B6BFB] w-[100px] px-[10px] py-[4px] text-[14px] font-[500] text-center">Technology</p>
                    <h1 className="text-[36px] font-sans leading-[40px] font-[600] pr-[70px] pt-[20px]">Grid System For Better Design User Interface</h1>
                    <p className="text-[#97989F] pt-[20px]">August 20, 2022</p>
                </div>
            </section>
                </Slider>
            </section>

            <section className="mt-24">
                <h1 className="text-[24px] font-bold mb-6 font-sans">Trending</h1>
                <div className="grid grid-cols-4 gap-4 relative">
                    <TrendCard/>
                    <TrendCard/>
                    <TrendCard/>
                    <TrendCard/>
                </div>
            </section>
            
        </div>
    
    );
}
