import React, { useState } from "react";
import FunnelSimple from "@/assets/images/icon/FunnelSimple.svg";
import ArrowsDownUp from "@/assets/images/icon/ArrowsDownUp.svg";
import Searchicon from "@/assets/images/icon/searchico.svg";
import ArrowLineLeft from "@/assets/images/icon/ArrowLineLeft.svg";
import Button from "@/components/ui/Button";
import Pagetitle from "@/components/ui/Pagetitle";
import OfficeTabel from "@/components/Offices/officetabel";
import Dots from "@/assets/images/icon/Union.svg";
import Image from "next/image";
import Link from "next/link";
import Layout from "@/layouts/layout";
import CheckBox from "@/components/ui/CheckBox";
import Dropdown from "@/components/ui/Dropdown";
import Calender from "@/assets/images/icon/CalendarBlank.svg";
import Modal from "@/components/ui/Modal";
import closeico from "@/assets/images/icon/close-circle.svg";
import Fileico from "@/assets/images/icon/file-icon.svg";
import Filechoose from "@/assets/images/icon/filechoose.svg";

const TableData = [
  {
    id: 1,
    floor: "5th Floor",
    officeName: "Right side first",
    seats: "28",
    currentRent: "₹ 1,40,000 + GST",
    usualRent: "₹ 1,68,000 + GST",
    currentCompany: "Rage Coffee LLC",
    type: "Account with GST",
    icon: Calender,
    nextInvoiceDate: "15 Mar 2023",
    lockInTill: "15 Mar 2024",
    typeDot: "darkgreen",
    rentStyle: "!text-[#070707]",
    name: "rage",
  },
  {
    id: 2,
    floor: "5th Floor",
    officeName: " Right side 2nd",
    seats: "15",
    currentRent: "₹ 50,000",
    usualRent: "₹ 75,000 + GST",
    currentCompany: "Kuku FM",
    type: "Personal Account",
    icon: Calender,
    nextInvoiceDate: "15 Mar 2023",
    lockInTill: "",
    typeDot: "blueb",
    rentStyle: "!text-[#070707] ",
    name: "rage2",
  },
  {
    id: 3,
    floor: "5th Floor",
    officeName: "Right side 3rd",
    seats: "7",
    currentRent: "₹ 26000",
    usualRent: "₹ 37,500 + GST",
    currentCompany: "Mr Angad",
    type: "Cash",
    icon: Calender,
    nextInvoiceDate: "15 Mar 2023",
    lockInTill: "17 Oct 2023",
    typeDot: "purple",
    rentStyle: "!text-[#070707] !bg-secondary-purpleb",
    name: "rage3",
  },
  {
    id: 4,
    floor: "5th Floor",
    officeName: "Right side 4th",
    seats: "7",
    currentRent: "-",
    usualRent: "₹ 37,500 + GST",
    currentCompany: "-",
    type: "Vacant Office",
    icon: Calender,
    nextInvoiceDate: "-",
    lockInTill: "-",
    typeDot: "darkred",
    name: "rage4",
    rentStyle: "bg-secondary-red",
  },
];

const Office = () => {
  const [active, setActive] = useState(false);
  const [selected, setSelected] = useState([]);
  const [selectAll, setSelectAll] = useState([]);
  const [opentablepage, setopentablepage] = useState(false);
  const opentableHandler = () => {
    setopentablepage(true);
  };
  const [openmodel, setOpenmodel] = useState(false);
  const [open, setOpen] = useState(false);

  const selectOfficeItem = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setSelected([...selected, parseInt(value)]);
    } else {
      setSelected(selected.filter((e) => e != parseInt(value)));
    }
  };

  const selectAllCheckboxes = (e) => {
    let tempSelectAll = [];

    if (e.target.checked) {
      TableData.forEach((el, index) => {
        tempSelectAll.push(index);
      });
    }
    setSelected(tempSelectAll);
  };
  return (
    <Layout>
      <>
        <div className="flex items-center justify-between">
          <Pagetitle title={"Offices"} />
          <div className="text-black/40 dark:text-white/40">
            <Button
              className="py-[5px] px-2 mr-2 text-xs"
              secondary={"true"}
              name={"Export"}
              onClick={() => setOpenmodel(true)}
            />
            <Button
              className="py-[5px] px-2 mr-2 text-xs"
              secondary={"true"}
              name={"Import"}
              onClick={() => setOpen(true)}
            />
            <Button color={"green"} name={"Add office"} size={"small"}  className={""}/>
          </div>
        </div>
        <div className="mb-8">
          <div className="bg-primary-light dark:bg-white/5 rounded-lg p-2 mb-2 flex items-center justify-between flex-wrap gap-5 mt-4">
            <div className="flex items-center">
              <div className="flex items-center mr-4">
                <Dropdown
                  className="left-0"
                  itemsclass="w-[240px] left-0 p-2 !divide-y-0"
                  button={
                    <div className="flex  items-center w-7 h-7 p-1 justify-center hover:bg-black/5 hover:dark:bg-white/5 cursor-pointer rounded-lg">
                      <Image
                        src={FunnelSimple}
                        alt=""
                        className="dark:invert"
                      />
                    </div>
                  }
                  dropdownitem={[
                    { id: 1, title: "Date", link: "/" },
                    { id: 2, title: "Order number", link: "/" },
                    { id: 3, title: "Payment status", link: "/" },
                    {
                      id: 4,
                      title: "Mark as paid (or Mark as Unpaid if already paid)",
                      link: "/",
                    },
                    { id: 5, title: "Fulfilment status", link: "/" },
                    { id: 6, title: "Amount", link: "/" },
                  ]}
                />
                <Dropdown
                  className="left-0"
                  itemsclass="left-0 p-2 !divide-y-0 whitespace-nowrap"
                  button={
                    <div className="flex  items-center w-7 h-7 p-1 justify-center hover:bg-black/5 dark:hover:bg-white/5 cursor-pointer rounded-lg">
                      <Image
                        src={ArrowsDownUp}
                        alt=""
                        className="dark:invert"
                      />
                    </div>
                  }
                  dropdownitem={[
                    { id: 1, title: "Lowest to highest", link: "/" },
                    { id: 2, title: "Highest to lowest", link: "/" },
                  ]}
                />
                <Dropdown
                  className="left-0"
                  itemsclass="w-[240px] -left-[72px] sm:left-0 p-2 [&>a:nth-child(2)]:!border-0 [&>a:nth-child(3)]:border-t [&>a:nth-child(4)]:!border-0 [&>a:nth-child(5)]:!border-0 [&>a:nth-child(6)]:!border-t [&>a:nth-child(7)]:!border-0"
                  button={
                    <div className="flex  items-center w-7 h-7 p-1 justify-center hover:bg-black/5  dark:hover:bg-white/5 cursor-pointer rounded-lg">
                      <Image src={Dots} alt="" className="dark:invert" />
                    </div>
                  }
                  dropdownitem={[
                    { id: 1, title: "Print packing slips", link: "/" },
                    { id: 2, title: "Archive orders", link: "/" },
                    {
                      id: 3,
                      title: "Put on Hold (or Unhold orders)",
                      link: "/",
                    },
                    {
                      id: 4,
                      title: "Mark as paid (or Mark as Unpaid if already paid)",
                      link: "/",
                    },
                    {
                      id: 5,
                      title: "Fulfil orders (or Mark as Unfulfilled)",
                      link: "/",
                    },
                    { id: 6, title: "Add tags", link: "/" },
                    { id: 7, title: "Remove tags", link: "/" },
                  ]}
                />
              </div>
              <div className="flex items-center">
                <span className="bg-black/20 w-[1px] h-5 mr-4 dark:bg-white/20"></span>
                <span className="mr-4 text-xs leading-[18px]">
                  {selected.length} Selected
                </span>
                <Button
                  color={"lightgrey"}
                  secondary={"true"}
                  name={"Edit Selected"}
                  className={"!text-sm leading-5 !py-1"}
                />
              </div>
            </div>
            <div className="relative">
              <input
                placeholder="Search"
                className="rounded-lg max-w-[160px] w-full pl-[26px] placeholder:text-black/20 dark:placeholder:text-white/20 text-sm border border-black/10 dark:border-white/10 bg-white/80 dark:bg-black/5 p-[3px] pr-3 focus-visible:outline-none"
              />
              <Image
                src={Searchicon}
                alt=""
                className="absolute top-1/2 -translate-y-[50%] left-[7px] dark:invert"
              />
            </div>
          </div>
          <div className="overflow-x-auto min-h-[470px] custom-scrollbar">
            <table className="Fxl:w-[1300px] 2xl:w-[1600px] lgm:w-[1200px] w-[1090px]">
              <thead>
                <tr className="text-black/40 dark:text-white/40 border-b text-xs">
                  <th className="whitespace-nowrap font-normal w-6 pl-[5px]  py-[11px]  before:top-0 before:right-0 before:h-full before:absolute relative h-full text-start heading-border">
                    <CheckBox
                      name={"select all"}
                      onChange={selectAllCheckboxes}
                    />
                  </th>
                  <th className="font-normal p-3 pr-[10px] before:top-0 before:right-0 before:h-full before:absolute text-start relative h-full heading-border leading-[18px]">
                    Floor
                  </th>
                  <th className="font-normal p-3 pr-[10px] before:top-0 before:right-0 before:h-full before:absolute text-start relative h-full heading-border leading-[18px]">
                    Office Name
                  </th>
                  <th className="font-normal p-3 pr-[10px] before:top-0 before:right-0 before:h-full before:absolute text-start relative h-full heading-border leading-[18px] whitespace-nowrap">
                    # of Seats
                  </th>
                  <th className="font-normal p-3 pr-[10px] before:top-0 before:right-0 before:h-full before:absolute text-start relative h-full heading-border leading-[18px] whitespace-nowrap">
                    <div className="w-24">Current Rent</div>
                  </th>
                  <th className="font-normal p-3 pr-[10px] before:top-0 before:right-0 before:h-full before:absolute text-start relative h-full heading-border leading-[18px]">
                    Usual Rent
                  </th>
                  <th className="font-normal p-3 pr-[10px] before:top-0 before:right-0 before:h-full before:absolute text-start relative h-full heading-border leading-[18px]">
                    Current Company
                  </th>
                  <th className="font-normal p-3 pr-[10px] before:top-0 before:right-0 before:h-full before:absolute text-start whitespace-nowrap">
                    Rent Type
                  </th>
                  <th className="font-normal p-3 pr-[10px] before:top-0 before:right-0 before:h-full before:absolute text-start relative h-full heading-border leading-[18px]">
                    Next Invoice Date
                  </th>
                  <th className="font-normal p-3 pr-[10px]  text-start relative ">
                    Lock-in Till
                  </th>
                </tr>
              </thead>
              <tbody>
                <OfficeTabel
                  selectAll={selectAll}
                  handleChange={selectOfficeItem}
                  opentableHandler={opentableHandler}
                  tableRow={TableData}
                  selected={selected}
                />
              </tbody>
            </table>
          </div>
          <div className="flex justify-end mt-5">
            <ul className="flex">
              <li className="mr-2">
                <Link
                  href={"#0"}
                  className="rounded-lg hover:bg-black/5 dark:hover:bg-white/5 transition-all duration-300 w-7 h-7 flex items-center justify-center"
                >
                  <Image src={ArrowLineLeft} alt="" className="dark:invert" />
                </Link>
              </li>
              <li className="mr-2">
                <Link
                  href={"#0"}
                  onClick={setActive}
                  className={`rounded-lg hover:bg-black/5 dark:hover:bg-white/5 transition-all duration-300 w-7 h-7 flex items-center justify-center ${
                    !active ? "bg-black/5 dark:bg-white/5" : ""
                  }`}
                >
                  1
                </Link>
              </li>
              <li className="mr-2">
                <Link
                  href={"#0"}
                  className="rounded-lg hover:bg-black/5 dark:hover:bg-white/5 transition-all duration-300 w-7 h-7 flex items-center justify-center"
                >
                  2
                </Link>
              </li>
              <li className="mr-2">
                <Link
                  href={"#0"}
                  className="rounded-lg hover:bg-black/5 dark:hover:bg-white/5 transition-all duration-300 w-7 h-7 flex items-center justify-center"
                >
                  3
                </Link>
              </li>
              <li className="mr-2">
                <Link
                  href={"#0"}
                  className="rounded-lg hover:bg-black/5 dark:hover:bg-white/5 transition-all duration-300 w-7 h-7 flex items-center justify-center"
                >
                  4
                </Link>
              </li>
              <li className="mr-2">
                <Link
                  href={"#0"}
                  className="rounded-lg hover:bg-black/5 dark:hover:bg-white/5 transition-all duration-300 w-7 h-7 flex items-center justify-center"
                >
                  5
                </Link>
              </li>
              <li>
                <Link
                  href={"#0"}
                  className="rounded-lg hover:bg-black/5 dark:hover:bg-white/5 transition-all duration-300 w-7 h-7 flex items-center justify-center"
                >
                  <Image
                    src={ArrowLineLeft}
                    alt=""
                    className="dark:invert rotate-180"
                  />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </>
      <Modal open={openmodel} setOpen={setOpenmodel}>
        <div className="px-2 text-center">
          <h2 className="text-black/80 dark:text-white/80 font-semibold md:text-2xl text-lg">
            Exported successfully
          </h2>
          <p className="text-black/40 dark:text-white/40 text-center md:pt-8 pt-5">
            Selected rows have been exported in the downloaded file.
          </p>
          <div className="flex justify-end items-center gap-4 pt-6">
            <Button
              color="bluedark"
              size="large"
              secondary="true"
              name={"Got it"}
              className={
                "md:!py-[18px] !py-4 !text-sm md:!px-4 rounded-[15px] w-full"
              }
              onClick={() => setOpenmodel(false)}
            ></Button>
          </div>
        </div>
      </Modal>
      <Modal
        open={open}
        setOpen={setOpen}
        className={"max-w-[544px] w-full mx-auto pt-6 px-8"}
      >
        <div className="flex items-center justify-between pb-8">
          <h2 className="text-black/80 dark:text-white/80 font-semibold md:text-2xl text-lg">
            Import
          </h2>
          <Image
            src={closeico}
            alt=""
            onClick={() => setOpen(false)}
            className={"cursor-pointer dark:invert"}
          />
        </div>
        <input type="file" id="filebox" className="block w-8 h-8" />
        <label htmlFor="filebox" className="w-full cursor-pointer">
          <div className="border border-dashed border-black/40 dark:border-white/40 py-6 px-2 rounded-[4px] ">
            <div className="px-2 mx-auto max-w-[232px] w-full">
              <div className="bg-primary-blue border-transparent rounded-full border w-[100px] h-[100px] mx-auto ">
                <Image src={Filechoose} alt="" className="h-full mx-auto" />
              </div>
              <p className="text-black/40 dark:text-white/40 text-center pt-2">
                Drop your file here to upload or select from storage{" "}
              </p>
            </div>
          </div>
          <div className="pt-6 mx-auto max-w-[232px] w-full pb-6 cursor-pointer">
            <Button
              color="bluedark"
              size="large"
              secondary="true"
              name={"Browse"}
              className={
                "md:!py-[18px] !py-4 !text-sm !px-4 w-full rounded-[15px] pointer-events-none"
              }
            ></Button>
          </div>
        </label>
        <div className="border-t border-black/5 dark:border-white/5">
          <div className="border border-black/20 dark:border-white/20 rounded-xl mt-8 p-4">
            <div className="flex justify-between items-center">
              <Image src={Fileico} alt="" />
              <div className="w-full">
                <div className="flex justify-between px-2">
                  <h3 className="pb-2 sm:text-sm text-xs">File_Name.zip</h3>
                  <span className="pl-1 pb-2 sm:text-sm text-xs">52%</span>
                </div>
                <div className="relative max-w-[322px] sm:mx-auto mx-2 w-full h-1 bg-black/20 dark:bg-white/20 border-transparent rounded-xl">
                  <span className="absolute bg-blue-1 w-[52%] h-1 border-transparent rounded-xl"></span>
                </div>
              </div>
              <Link href={""}>
                <Image
                  src={closeico}
                  alt=""
                  className={"cursor-pointer dark:invert"}
                />
              </Link>
            </div>
          </div>
        </div>
      </Modal>
      <Modal open={false} setOpen={setOpen}>
        <div className="px-2 text-center">
          <h2 className="text-black/80 dark:text-white/80 font-semibold md:text-2xl text-lg">
            Imported successfully
          </h2>
          <p className="text-black/40 dark:text-white/40 text-center md:pt-8 pt-5">
            23 items have been imported successfully.
          </p>
          <div className="flex justify-end items-center gap-4 pt-6">
            <Button
              color="bluedark"
              size="large"
              secondary="true"
              name={"Got it"}
              className={
                "md:!py-[18px] !py-4 text-sm md:!px-4 rounded-2xl w-full"
              }
              onClick={() => setOpen(false)}
            ></Button>
          </div>
        </div>
      </Modal>
    </Layout>
  );
};

export default Office;
