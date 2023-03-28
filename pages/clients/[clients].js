import React, { useState } from "react";
import Button from "@/components/ui/Button";
import PageHeader from "@/components/ui/PageHeader";
import InputContent from "@/components/ui/InputContent";
import VarientDropdown from "@/components/ui/SelectOption";
import UnsavedChanges from "@/components/ui/UnsavedChanges";
import Layout from "@/layouts/layout";
import RadioCircle from "@/assets/images/icon/radio-circle.svg";
import Image from "next/image";
import MultiselectDropdown from "@/components/ui/MultiselectDropdown";
import Squarelogo from "@/assets/images/img/square-logo.png";
import closeico from "@/assets/images/icon/close-circle.svg";
import Camera from "@/assets/images/icon/camera.svg";
import RegionDropdown from "@/components/ui/CountryStateDropdown/RegionDropdown";
import CountryDropdown from "@/components/ui/CountryStateDropdown/CountryDropdown";
import Link from "next/link";
import { COUNTRY_CODE } from "@/../appConstants";

const offers = () => {
  const [selectedCountry, setSelectedCountry] = useState("India");
  const [selectedState, setSelectedState] = useState("");

  const [radiioBtn, setRadiioBtn] = useState(true);
  ``;
  const [radiioBtnTwo, setRadiioBtnTwo] = useState(false);
  const radiioBtnHendler = () => {
    setRadiioBtn(true);
    setRadiioBtnTwo(false);
  };
  const radiioBtnTwoHendler = () => {
    setRadiioBtn(false);
    setRadiioBtnTwo(true);
  };
  return (
    <Layout container>
      <UnsavedChanges>
        <Button
          color={"white"}
          name={"Discard"}
          size={"small"}
          outline={"true"}
          className={
            "!text-xs md:mr-5 mr-4 dark:border-blacklight  dark:text-blacklight"
          }
        />
        <Button color={"green"} size={"medium"} name={"Save"} className={""}/>
      </UnsavedChanges>
      <PageHeader
        size={"small"}
        className={"!text-sm mb-5 flex-wrap gap-5 bg-opacity-5 "}
        orderid={"New client"}
        orderidcopy={"Copy of EKHKSS3S266H"}
        Badgesdata={[
          {
            color: "darkred",
            name: "In Notice Period - 59 days left",
            className: "text-red-100",
          },
        ]}
      />
      <div className="flex justify-between  flex-wrap gap-y-4">
        <div className="w-full md:max-w-[63%] max-w-[100%] bg-primary-light dark:bg-white/5 rounded-2xl py-4 lg:pl-6 lg:pr-[46px] sm:px-5 px-3">
          <div>
            <InputContent
              title={"Company name"}
              className="mb-3 "
              titlestyle={"mb-1"}
            >
              <input
                type="text"
                name=""
                defaultValue="Company name"
                className="bg-transparent w-full text-blacklight dark:text-white text-sm"
              />
            </InputContent>
            <div className="grid sm:grid-cols-2 sm:gap-6 sm:mb-3">
              <InputContent
                title={"First name"}
                className="dark:bg-black/40 sm:mb-0"
                titlestyle={"mb-1"}
              >
                <input
                  type="text"
                  name=""
                  defaultValue="Baalkrishan"
                  className="w-full dark:bg-transparent text-blacklight dark:text-white text-sm"
                />
              </InputContent>
              <InputContent
                title={"Last name"}
                className="dark:bg-black/40 sm:mb-0"
                titlestyle={"mb-1"}
              >
                <input
                  type="text"
                  name=""
                  defaultValue="Lal Sani"
                  className="w-full dark:bg-transparent text-blacklight dark:text-white text-sm"
                />
              </InputContent>
            </div>
            <InputContent
              title={"Email address"}
              className="dark:bg-black/40 mb-3"
              titlestyle={"mb-1"}
            >
              <input
                type="email"
                name=""
                defaultValue="abccompany@gmail.com"
                className="w-full dark:bg-transparent text-blacklight dark:text-white text-sm"
              />
            </InputContent>
            <div className="grid sm:grid-cols-2 sm:gap-6 sm:mb-3">
              <InputContent
                title={"Country code"}
                className="dark:bg-black/40 relative !mb-0"
              >
                <VarientDropdown
                  selectitem={COUNTRY_CODE}
                  className="dark:!text-white/80 !text-black/80 -right-5"
                />
              </InputContent>
              <InputContent
                title={"Phone number"}
                className="dark:bg-black/40 sm:mb-0"
                titlestyle={"mb-1"}
              >
                <input
                  type="number"
                  name=""
                  defaultValue="8073589105"
                  className="w-full dark:bg-transparent text-blacklight dark:text-white text-sm"
                />
              </InputContent>
            </div>
            <InputContent
              className={"!py-[10px] dark:bg-black/40 dark:text-white/40 mb-3"}
              titlestyle={"mb-1"}
            >
              <VarientDropdown
                selectitem={[
                  { id: 1, name: "Agreement duration" },
                  { id: 2, name: "Select 1" },
                  { id: 3, name: "Select 2" },
                ]}
                className="text-black/20 dark:text-white/20 text-sm"
              />
            </InputContent>
            <div className="product-type-radio grid">
              <div className="grid justify-center product-type-radio">
                <div className="grid sm:grid-cols-2 sm:gap-6 gap-[28px]">
                  <div className=" inline-block min-h-[1.5rem]">
                    <div
                      onClick={() => radiioBtnHendler()}
                      className={`cursor-pointer bg-white h-full dark:bg-black/40 dark:border-white/10 border border-black/10 rounded-lg py-6 px-5 pr-9 relative ${
                        radiioBtn
                          ? "dark:border-secondary-purpleb border-black"
                          : "border-black/10"
                      }`}
                    >
                      {radiioBtn ? (
                        <svg
                          width="26"
                          height="26"
                          className="absolute right-[15px] top-[15px]"
                          viewBox="0 0 26 26"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M8.19089 12.777C8.00482 12.5992 7.75736 12.5 7.5 12.5C7.49979 12.5 7.47732 12.5003 7.47732 12.5003C7.21217 12.5063 6.96027 12.6174 6.77704 12.8091C6.59923 12.9952 6.5 13.2426 6.5 13.5L6.50026 13.5227C6.50627 13.7878 6.61737 14.0397 6.80911 14.223L10.4716 17.723C10.8579 18.0921 11.4662 18.0924 11.8528 17.7236L19.19 10.7238C19.3819 10.5407 19.4935 10.2887 19.4997 10.0235C19.5001 10.0075 19.5001 9.9915 19.4997 9.97548C19.4936 9.72695 19.3952 9.48961 19.2236 9.30973C19.0348 9.11192 18.7734 9 18.5 9L18.4718 9.0004C18.2245 9.00738 17.9887 9.10573 17.8097 9.27645L11.1631 15.6174L8.19089 12.777Z"
                            fill="black"
                            className="dark:fill-secondary-purpleb"
                            fillOpacity="0.8"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M13 0C13 0 15.6442 0 18.0605 1.02201C18.0605 1.02201 20.3936 2.00884 22.1924 3.80761C22.1924 3.80761 23.9912 5.60638 24.978 7.93951C24.978 7.93951 26 10.3558 26 13C26 13 26 15.6442 24.978 18.0605C24.978 18.0605 23.9912 20.3936 22.1924 22.1924C22.1924 22.1924 20.3936 23.9912 18.0605 24.978C18.0605 24.978 15.6442 26 13 26C13 26 10.3558 26 7.93951 24.978C7.93951 24.978 5.60638 23.9912 3.80761 22.1924C3.80761 22.1924 2.00884 20.3936 1.02202 18.0605C1.02202 18.0605 0 15.6442 0 13C0 13 0 10.3558 1.02202 7.93951C1.02202 7.93951 2.00885 5.60638 3.80761 3.80761C3.80761 3.80761 5.60638 2.00884 7.93951 1.02201C7.93951 1.02201 10.3558 0 13 0ZM13 2C13 2 10.7614 2 8.71861 2.86402C8.71861 2.86402 6.74476 3.69889 5.22183 5.22182C5.22183 5.22182 3.6989 6.74476 2.86402 8.71861C2.86402 8.71861 2 10.7614 2 13C2 13 2 15.2386 2.86402 17.2814C2.86402 17.2814 3.69889 19.2552 5.22183 20.7782C5.22183 20.7782 6.74476 22.3011 8.71861 23.136C8.71861 23.136 10.7614 24 13 24C13 24 15.2386 24 17.2814 23.136C17.2814 23.136 19.2552 22.3011 20.7782 20.7782C20.7782 20.7782 22.3011 19.2552 23.136 17.2814C23.136 17.2814 24 15.2386 24 13C24 13 24 10.7614 23.136 8.71861C23.136 8.71861 22.3011 6.74476 20.7782 5.22183C20.7782 5.22183 19.2552 3.69889 17.2814 2.86402C17.2814 2.86402 15.2386 2 13 2Z"
                            fill="black"
                            className="dark:fill-secondary-purpleb"
                            fillOpacity="0.8"
                          />
                        </svg>
                      ) : (
                        <Image
                          src={RadioCircle}
                          alt=""
                          className="absolute right-3 top-3 dark:invert"
                        />
                      )}
                      <h3
                        className={`mb-1 font-semibold  text-black/80 dark:text-white/80`}
                      >
                        Account Payment
                      </h3>
                      <p
                        className={` text-xs leading-[18px] ${
                          radiioBtn
                            ? " text-black/80 dark:text-white/80"
                            : "text-black/40 dark:text-white/40"
                        }`}
                      >
                        Proper account payment with GST invoice.
                      </p>
                    </div>
                  </div>
                  <div className=" inline-block min-h-[1.5rem]">
                    <div
                      onClick={() => radiioBtnTwoHendler()}
                      className={`cursor-pointer bg-white dark:bg-black/40 h-full border border-black/10 rounded-lg py-6 px-5 pr-9 relative ${
                        radiioBtnTwo
                          ? "dark:border-secondary-purpleb border-black"
                          : "border-black/10 "
                      }`}
                    >
                      {radiioBtnTwo ? (
                        <svg
                          width="26"
                          height="26"
                          className="absolute right-[15px] top-[15px]"
                          viewBox="0 0 26 26"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M8.19089 12.777C8.00482 12.5992 7.75736 12.5 7.5 12.5C7.49979 12.5 7.47732 12.5003 7.47732 12.5003C7.21217 12.5063 6.96027 12.6174 6.77704 12.8091C6.59923 12.9952 6.5 13.2426 6.5 13.5L6.50026 13.5227C6.50627 13.7878 6.61737 14.0397 6.80911 14.223L10.4716 17.723C10.8579 18.0921 11.4662 18.0924 11.8528 17.7236L19.19 10.7238C19.3819 10.5407 19.4935 10.2887 19.4997 10.0235C19.5001 10.0075 19.5001 9.9915 19.4997 9.97548C19.4936 9.72695 19.3952 9.48961 19.2236 9.30973C19.0348 9.11192 18.7734 9 18.5 9L18.4718 9.0004C18.2245 9.00738 17.9887 9.10573 17.8097 9.27645L11.1631 15.6174L8.19089 12.777Z"
                            fill="black"
                            className="dark:fill-secondary-purpleb"
                            fillOpacity="0.8"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M13 0C13 0 15.6442 0 18.0605 1.02201C18.0605 1.02201 20.3936 2.00884 22.1924 3.80761C22.1924 3.80761 23.9912 5.60638 24.978 7.93951C24.978 7.93951 26 10.3558 26 13C26 13 26 15.6442 24.978 18.0605C24.978 18.0605 23.9912 20.3936 22.1924 22.1924C22.1924 22.1924 20.3936 23.9912 18.0605 24.978C18.0605 24.978 15.6442 26 13 26C13 26 10.3558 26 7.93951 24.978C7.93951 24.978 5.60638 23.9912 3.80761 22.1924C3.80761 22.1924 2.00884 20.3936 1.02202 18.0605C1.02202 18.0605 0 15.6442 0 13C0 13 0 10.3558 1.02202 7.93951C1.02202 7.93951 2.00885 5.60638 3.80761 3.80761C3.80761 3.80761 5.60638 2.00884 7.93951 1.02201C7.93951 1.02201 10.3558 0 13 0ZM13 2C13 2 10.7614 2 8.71861 2.86402C8.71861 2.86402 6.74476 3.69889 5.22183 5.22182C5.22183 5.22182 3.6989 6.74476 2.86402 8.71861C2.86402 8.71861 2 10.7614 2 13C2 13 2 15.2386 2.86402 17.2814C2.86402 17.2814 3.69889 19.2552 5.22183 20.7782C5.22183 20.7782 6.74476 22.3011 8.71861 23.136C8.71861 23.136 10.7614 24 13 24C13 24 15.2386 24 17.2814 23.136C17.2814 23.136 19.2552 22.3011 20.7782 20.7782C20.7782 20.7782 22.3011 19.2552 23.136 17.2814C23.136 17.2814 24 15.2386 24 13C24 13 24 10.7614 23.136 8.71861C23.136 8.71861 22.3011 6.74476 20.7782 5.22183C20.7782 5.22183 19.2552 3.69889 17.2814 2.86402C17.2814 2.86402 15.2386 2 13 2Z"
                            fill="black"
                            className="dark:fill-secondary-purpleb"
                            fillOpacity="0.8"
                          />
                        </svg>
                      ) : (
                        <Image
                          src={RadioCircle}
                          alt=""
                          className="absolute right-3 top-3 dark:invert"
                        />
                      )}
                      <h3
                        className={`mb-1 font-semibold text-black/80 dark:text-white/80`}
                      >
                        Cash/Personal Acc
                      </h3>
                      <p
                        className={`text-xs leading-[18px] ${
                          radiioBtnTwo
                            ? "text-black/80 dark:text-white/80"
                            : "text-black/40 dark:text-white/40"
                        }`}
                      >
                        Cash payment or payment in personal account without GST.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <h2 className="text-blacklight font-semibold text-lg leading-5 py-3 dark:text-white">
              Address
            </h2>
            <div className="grid sm:grid-cols-2 sm:gap-6 sm:mb-3">
              <InputContent
                title={"Country code"}
                className="dark:bg-black/40 relative !mb-0"
              >
                <VarientDropdown
                  selectitem={COUNTRY_CODE}
                  className="dark:!text-white/80 !text-black/80 -right-5"
                />
              </InputContent>
              <InputContent
                title={"Phone number"}
                className="dark:bg-black/40 sm:mb-0"
                titlestyle={"mb-1"}
              >
                <input
                  type="number"
                  name=""
                  defaultValue="8073589105"
                  className="w-full dark:bg-transparent text-blacklight dark:text-white text-sm"
                />
              </InputContent>
            </div>           
            <InputContent
              className={"!py-[10px] dark:bg-black/40 dark:text-white/40 mb-3"}
            >
              <CountryDropdown
                defaultCountry={selectedCountry}
                onChange={setSelectedCountry}
              />
            </InputContent>
            <div className="grid sm:grid-cols-2 sm:gap-6 sm:mb-3">
              <InputContent
                title={"First name"}
                className="dark:bg-black/40 sm:mb-0"
                titlestyle={"mb-1"}
              >
                <input
                  type="text"
                  name=""
                  defaultValue="Baalkrishan"
                  className="w-full dark:bg-transparent text-blacklight dark:text-white text-sm"
                />
              </InputContent>
              <InputContent
                title={"Last name"}
                className="dark:bg-black/40 sm:mb-0"
                titlestyle={"mb-1"}
              >
                <input
                  type="text"
                  name=""
                  defaultValue="Lal Sani"
                  className="w-full dark:bg-transparent text-blacklight dark:text-white text-sm"
                />
              </InputContent>
            </div>
            <InputContent
              title={"Company name"}
              titlestyle={"mb-1"}
              className="mb-3"
            >
              <input
                type="text"
                name=""
                defaultValue="Company name"
                className="bg-transparent w-full text-blacklight dark:text-white text-sm"
              />
            </InputContent>
            <InputContent
              title={"Address"}
              titlestyle={"mb-1"}
              className="mb-3"
            >
              <input
                type="text"
                name=""
                defaultValue="Exploit Cross-Platform Mindshare 52, Ekbal Society, ShwetaPur Pilani"
                className="text-sm bg-transparent w-full text-blacklight dark:text-white"
              />
            </InputContent>
            <InputContent
              title={"Apartment etc."}
              titlestyle={"mb-1"}
              className="mb-3"
            >
              <input
                type="text"
                name=""
                defaultValue="Apartment, suite, etc"
                className="text-sm bg-transparent w-full text-blacklight dark:text-white"
              />
            </InputContent>
            <div className="grid sm:grid-cols-2 sm:gap-6 sm:mb-3">
              <InputContent
                title={"State"}
                className="dark:bg-black/40 dark:text-white/40 !mb-0"
              >
                <RegionDropdown
                  onChange={setSelectedState}
                  country={selectedCountry}
                  className="dark:bg-transparent dark:!text-white"
                />
              </InputContent>
              <InputContent
                title={"City"}
                className="dark:bg-black/40 sm:mb-0"
                titlestyle={"mb-1"}
              >
                <input
                  type="text"
                  name=""
                  defaultValue="Pilani"
                  className="text-sm w-full dark:bg-transparent text-blacklight dark:text-white"
                />
              </InputContent>
            </div>
            <div className="grid sm:grid-cols-2 sm:gap-6">
              <InputContent
                title={"Country code"}
                className="dark:bg-black/40 relative !mb-0"
              >
                <VarientDropdown
                  selectitem={COUNTRY_CODE}
                  className="dark:!text-white/80 !text-black/80  -right-5"
                />
              </InputContent>
              <InputContent
                title={"Phone number"}
                className="dark:bg-black/40 sm:mb-0"
                titlestyle={"mb-1"}
              >
                <input
                  type="number"
                  name=""
                  defaultValue="8073589105"
                  className="text-sm w-full dark:bg-transparent text-blacklight dark:text-white"
                />
              </InputContent>
            </div>
            <p className="py-3 text-black/40 dark:text-white/40">
              Other options
            </p>
            <InputContent
              title={"Notes"}
              className="dark:bg-black/40 mb-3"
              titlestyle={"mb-1"}
            >
              <input
                type="text"
                name=""
                defaultValue="Text"
                className="text-sm w-full dark:bg-transparent text-blacklight dark:text-white"
              />
            </InputContent>
            <InputContent
              title={"Add tags"}
              className={" w-full cursor-pointer"}
              titlestyle={"mb-1"}
            >
              <MultiselectDropdown
                options={[
                  {
                    cat: "Tag 1",
                    key: "Tag 1",
                  },
                  {
                    cat: "Tag 2",
                    key: "Tag 2",
                  },
                  {
                    cat: "Tag 3",
                    key: "Tag 3",
                  },
                  {
                    cat: "Tag 4",
                    key: "Tag 4",
                  },
                ]}
                selectedValues={[
                  {
                    cat: "Tag",
                    key: "Tag",
                  },
                  {
                    cat: "Tag",
                    key: "Tag",
                  },
                ]}
              />
            </InputContent>
            <div className="py-[18px] flex justify-end items-center">
              <Button
                color="green"
                name={"Save"}
                className={"!text-sm !px-4"}
              />
            </div>
          </div>
        </div>
        <div className="w-full md:max-w-[35%]">
          <div className="bg-primary-light dark:bg-white/5 rounded-2xl lg:pt-4 lg:pb-3 lg:pl-[23px] lg:pr-[15px] sm:px-5 py-5 px-3 mb-[34px]">
            <div className="flex items-end justify-between mb-2.5 flex-wrap gap-5">
              <h3 className="text-lg font-semibold">Logo</h3>
              <label className="bg-primary-blue hover:bg-[#d5e9f5] transition-all duration-300 text-blacklight text-xs font-semibold rounded-lg px-2 py-[5px] leading-[18px] cursor-pointer">
                Add
                <input className="font-semibold" type="file" id="fileopen" />
              </label>
            </div>
            <div>
              <label
                htmlFor="fileopen"
                className="relative group max-w-[158px] w-full"
              >
                <Image
                  src={closeico}
                  alt=""
                  className={
                    "cursor-pointer dark:invert absolute top-[0] right-[47px] bg-white rounded-full"
                  }
                />
                <Image
                  src={Squarelogo}
                  alt=""
                  className="pb-2.5 cursor-pointer"
                />
                <Image
                  src={Camera}
                  alt=""
                  className="absolute top-[50%] translate-y-[-50%] left-[37%] translate-x-[-50%] opacity-0 group-hover:opacity-100 transition-all duration-300 cursor-pointer"
                />
              </label>
              <p className="text-black/40 dark:text-white/40">
                Allowed file types: png, jpg, jpeg.
              </p>
            </div>
          </div>
          <div className="bg-primary-light dark:bg-white/5 rounded-2xl lg:pt-4 lg:pr-[15px] lg:pb-[19px] lg:pl-[23px]  sm:px-5 py-5 px-3 mb-[19px]">
            <div className="flex items-center justify-between flex-wrap gap-5 mb-2.5">
              <h3 className="text-lg font-semibold ">Signed Agreement</h3>
              <label className="bg-primary-blue hover:bg-[#d5e9f5] transition-all duration-300 text-blacklight text-xs font-semibold rounded-lg leading-[18px] px-2 py-[5px] cursor-pointer">
                Upload
                <input className="font-semibold" type="file" />
              </label>
            </div>
            <div>
              <p className="text-black/40 dark:text-white/40">
                Allowed file types: pdf
              </p>
            </div>
          </div>
          <div className="bg-primary-light dark:bg-white/5 rounded-2xl lg:pt-4 lg:pb-6 lg:pl-[23px] lg:pr-[14px] sm:px-5 py-5 px-3 mb-[19px]">
            <div className="flex items-center justify-between mb-2.5 flex-wrap gap-5">
              <h3 className="text-lg font-semibold">Notice Period</h3>
              <Link
                href={"#0"}
                className="bg-primary-blue leading-[18px] hover:bg-[#d5e9f5] transition-all duration-300 text-blacklight text-xs font-semibold rounded-lg px-2 py-[5px]"
              >
                Add Notice
              </Link>
            </div>
            <div>
              <p className="text-black/40 dark:text-white/40">Not active.</p>
            </div>
          </div>
          <div className="bg-secondary-red/50 dark:bg-[#ffc7c7] rounded-2xl lg:pt-4 lg:pl-[23px] lg:pb-6 lg:pr-[15px]  sm:px-5 py-5 px-3">
            <div className="flex items-center justify-between mb-2.5 flex-wrap gap-5">
              <h3 className="text-lg font-semibold dark:text-black">
                Notice Period
              </h3>
              <Link
                href={"#0"}
                className="bg-gray-1 hover:bg-[#4e4848] transition-all duration-300 text-white text-xs font-semibold rounded-lg px-2 py-[5px] cursor-pointer leading-[18px]"
              >
                Edit Notice
              </Link>
            </div>
            <p className="text-black/80 text-xs leading-[18px]">
              Active. 59 Days left until 15 April, 2023
            </p>
          </div>
        </div>
      </div>
      
    </Layout>
  );
};

export default offers;
