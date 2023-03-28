import React from "react";
import Multiselect from "multiselect-react-dropdown";
import CloseIcon from "@/assets/images/icon/closebtn.svg";
import Image from "next/image";
import selecticonarrow from "@/assets/images/icon/selecticon.svg";
import RoundClose from "@/assets/images/icon/closeround.svg";

const MultiselectDropdown = ({ options, title, selectedValues, image,roundClose }) => {
  return (
    <>
      <div className="relative multiselectitem">
        <Multiselect
          customCloseIcon={
            <>
               {roundClose ?
                <Image src={RoundClose} alt="" className="" />
                :
                <Image src={CloseIcon} alt="" className="" />
              }
            </>
          }
          title={title}
          className="placeholder:text-0"
          displayValue="key"
          onKeyPressFn={function noRefCheck() {}}
          onRemove={function noRefCheck() {}}
          onSearch={function noRefCheck() {}}
          onSelect={function noRefCheck() {}}
          options={options}
          image={image}
          selectedValues={selectedValues}
          placeholder={""}
        />
        <Image
          src={selecticonarrow} alt=""
          className="absolute right-0 top-[50%] -translate-y-[50%] pointer-events-none dark:invert"
        />
      </div>
    </>
  );
};

export default MultiselectDropdown;
