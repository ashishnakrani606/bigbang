import React, {useState} from "react";
import ArrowLeft from "@/assets/images/icon/ArrowLeft.svg";
import Image from "next/image";
import Badges from "./Badges";
import Link from "next/link";
import ArrowLineLeft from "@/assets/images/icon/ArrowLineLeft.svg";
import Button from "@/components/ui/Button";
import Modal from "@/components/ui/Modal";

const PageHeader = ({ children, orderid, className, Badgesdata, arrow, orderidcopy }) => {
  const [open, setOpen] = useState(false); 

  return (
    <>
      <div className={`flex items-center justify-between flex-wrap ${className}`}>
        <div className="flex items-center flex-wrap">
          <Link href={"#0"} onClick={() => setOpen(true)}>
            <Image src={ArrowLeft} alt="" className="dark:invert fgbfhb" />
          </Link>
          <h3 className="px-2 py-1 mr-[6px] font-semibold leading-5">{orderid}</h3>          
          {Badgesdata.map((item,index) => (
            <div key={index} >
              <Badges color={item.color} name={item.name} className={"mr-2"} />
            </div>
          ))}
        </div>
        <div className="flex items-center sm:gap-1 gap-2 sm:flex-nowrap flex-wrap">
          {children}
          {arrow == true ? (
            <>
              <Link
                href={"#0"}
                className="rounded-lg hover:bg-black/5 dark:hover:bg-white/5 transition-all duration-300 w-7 h-7 flex items-center justify-center sm:mx-2"
              >
                <Image src={ArrowLineLeft} alt="" className="dark:invert" />
              </Link>
              <Link
                href={"#0"}
                className="rounded-lg hover:bg-black/5 dark:hover:bg-white/5 transition-all duration-300 w-7 h-7 flex items-center justify-center"
              >
                <Image src={ArrowLineLeft} alt="" className="dark:invert rotate-180" />
              </Link>
            </>
          ) : (
            ""
          )}
        </div>
      </div>
      <Modal open={open} setOpen={setOpen} className={"max-w-[544px] w-full mx-auto sm:px-8 px-3"}>
        <div className="">
          <div className="flex items-center justify-between md:pb-2 pb-5">
            <h2 className="text-black/80 dark:text-white/80 font-semibold md:text-2xl !leading-9 text-lg mx-auto text-center">
            Leave page with unsaved changes?
            </h2>
          </div>
          <p className="text-black/40 dark:text-white/40 mb-8">
          Are you sure you want to leave this page? You have unsaved changes that will be lost if you leave this page without saving. Please confirm if you want to proceed with leaving the page and discarding your changes.
          </p>
          <div className="flex justify-end sm:flex-nowrap flex-wrap items-center gap-4 mx-auto">            
            <Button
              color="winered"
              name={"Leave page"}
              className={"sm:!py-[18px] !py-3 !text-sm sm:!px-4 w-full rounded-[15px]  font-semibold"}
            ></Button>
            <Button
              color="lightgrey"
              secondary="true"
              name={"Cancel"}
              className={"sm:!py-[18px] !py-3 !text-sm sm:!px-4 w-full rounded-[15px] font-semibold"}
              onClick={() => setOpen(false)}
            ></Button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default PageHeader;
