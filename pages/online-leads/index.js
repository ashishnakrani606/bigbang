import React, { useState } from "react";
import Image from "next/image";
import Pagetitle from "@/components/ui/Pagetitle";
import Button from "@/components/ui/Button";
import FunnelSimple from "@/assets/images/icon/FunnelSimple.svg";
import ArrowsDownUp from "@/assets/images/icon/ArrowsDownUp.svg";
import Searchicon from "@/assets/images/icon/searchico.svg";
import Threedots from "@/assets/images/icon/Dots-three-outline.svg";
import ArrowLineLeft from "@/assets/images/icon/ArrowLineLeft.svg";
import Add from "@/assets/images/icon/Add.svg";
import TheeDotsRed from "@/assets/images/icon/threedotsred.svg";
import customer1 from "@/assets/images/users/customersimg-1.png";
import Link from "next/link";
import CheckBox from "@/components/ui/CheckBox";
import Layout from "@/layouts/layout";
import OnlineLeadsTable from "@/components/online-leads/online-leads-tabel";
import Dropdown from "@/components/ui/Dropdown";
import Calender from "@/assets/images/icon/CalendarBlank.svg";
import Modal from "@/components/ui/Modal";
import Dleleteico from "@/assets/images/icon/deletered.svg";
import closeico from "@/assets/images/icon/close-circle.svg";
import Fileico from "@/assets/images/icon/file-icon.svg";
import Filechoose from "@/assets/images/icon/filechoose.svg";

const TableRow = [
  {
    id: 1,
    name: "active",
    clientImage: customer1,
    clientsName: "Rage Coffee LLC",
    type: "40 Seater (2) ",
    floor: "5th Floor",
    rent: "₹ 3,50,000.00",
    calenderIcon: Calender,
    startDate: "15 Mar 2023",
    endDate: "15 Mar 2024",
    addIcon: Add,
    noticePeriod: "Add Notice",
    agreement: "Download",
    buttonOutline:
      "!text-black dark:!text-white !border-black/10 dark:!border-white/10",
    imageStyle: "dark:invert",
    buttonColor: "blacklight",
  },
  {
    id: 2,
    name: "draft",
    clientImage: customer1,
    clientsName: "Rage Coffee LLC",
    type: "10 Seater (4)",
    floor: "G Floor",
    rent: "₹ 3,50,000.00",
    calenderIcon: Calender,
    startDate: "15 Mar 2023",
    endDate: "15 Mar 2024",
    addIcon: TheeDotsRed,
    noticePeriod: "Edit Notice",
    buttonOutline: "",
    agreement: "Download",
    buttonColor: "red",
  },
  {
    id: 3,
    name: "activeside",
    clientImage: customer1,
    clientsName: "Rage Coffee LLC",
    type: "10 Seater (4)",
    floor: "G Floor",
    rent: "₹ 3,50,000.00",
    calenderIcon: Calender,
    startDate: "15 Mar 2023",
    endDate: "15 Mar 2024",
    addIcon: TheeDotsRed,
    noticePeriod: "Edit Notice",
    buttonOutline: "",
    agreement: "Download",
    buttonColor: "red",
  },
];
const Offers = () => {
  const [selectPlanOpen, setSelectPlanOpen] = useState(false);
  const [active, setActive] = useState(false);
  const [selected, setSelected] = useState([]);
  const [selectAll, setSelectAll] = useState([]);
  const SelectPlanHandler = () => {
    setSelectPlanOpen(true);
  };

  const [deleteProduct, setDeleteProduct] = useState(false);
  const [openmodel, setOpenmodel] = useState(false);
  const [open, setOpen] = useState(false);

  const [opentablepage, setopentablepage] = useState(false);
  const opentableHandler = () => {
    setopentablepage(true);
  };
  // checkbox
  const selectOnlineLeadsItem = (e) => {
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
      TableRow.forEach((el, index) => {
        tempSelectAll.push(index);
      });
    }

    setSelected(tempSelectAll);
  };
  return (
    <Layout>
      <>
        <div className="flex justify-between items-center text mb-5 flex-wrap gap-5">
          <Pagetitle title={"Online Leads"} />
          <div>
            <Button
              className="py-[5px] sm:px-2 px-[1px] sm:mr-2 text-xs"
              secondary={"true"}
              name={"Export"}
              onClick={() => setOpenmodel(true)}
            />
            <Button
              className="py-[5px] sm:px-2 px-[1px] sm:mr-2 text-xs"
              secondary={"true"}
              name={"Import"}
              onClick={() => setOpen(true)}
            />
            <Button
              color={"green"}
              name={"Add client"}
              className={""}
              size={"small"}
            />
          </div>
        </div>
        <>
          <div className="bg-primary-light dark:bg-white/5 rounded-lg p-2 mb-2 flex items-center justify-between flex-wrap gap-5">
            <div className="flex items-center flex-wrap">
              <div className="flex items-center mr-4">
                <Dropdown
                  className="left-0"
                  itemsclass="w-[240px] left-0 p-2 !divide-y-0"
                  button={
                    <div className="flex  items-center mr-2 w-7 h-7 p-1 justify-center hover:bg-black/5 hover:dark:bg-white/5 cursor-pointer rounded-lg transition-all duration-300">
                      <Image
                        src={FunnelSimple}
                        alt=""
                        className="dark:invert"
                      />
                    </div>
                  }
                  dropdownitem={[
                    { id: 1, title: "Created date", link: "/" },
                    { id: 2, title: "Start date", link: "/" },
                    { id: 3, title: "End date", link: "/" },
                    { id: 4, title: "Title", link: "/" },
                    { id: 5, title: "Updated date", link: "/" },
                    { id: 6, title: "Used", link: "/" },
                  ]}
                />
                <Dropdown
                  className="left-0"
                  itemsclass="left-0 p-2 !divide-y-0 whitespace-nowrap"
                  button={
                    <div className="flex  items-center w-7 h-7 p-1 mr-2 justify-center hover:bg-black/5 hover:dark:bg-white/5 cursor-pointer rounded-lg">
                      <Image
                        src={ArrowsDownUp}
                        alt=""
                        className="dark:invert"
                      />
                    </div>
                  }
                  dropdownitem={[
                    { id: 1, title: "Earliest", link: "/" },
                    { id: 2, title: "Latest", link: "/" },
                  ]}
                />
                <Dropdown
                  className="left-0"
                  itemsclass="w-[240px] left-0 p-2 [&>a:nth-child(2)]:!border-0 [&>a:nth-child(3)]:!border-t"
                  button={
                    <div className="flex  items-center w-7 h-7 p-1 justify-center hover:bg-black/5 hover:dark:bg-white/5 cursor-pointer rounded-lg transition-all duration-300">
                      <Image src={Threedots} alt="" className="dark:invert" />
                    </div>
                  }
                  dropdownitem={[
                    { id: 1, title: "Activate offers", link: "/" },
                    { id: 2, title: "Deactivate offers", link: "/" },
                    { id: 3, title: "Delete offers", link: "/" },
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
                  name={"Delete Selected"}
                  secondary={"true"}
                  className={`!text-sm ${selected.length ? "block" : "hidden"}`}
                  onClick={() => setDeleteProduct(true)}
                />
              </div>
            </div>
            <div className="flex items-center">
              <div className="relative">
                <input
                  placeholder="Search"
                  className="rounded-lg max-w-[160px] w-full pl-[26px] placeholder:text-black/20 dark:placeholder:text-white/20 text-sm border border-black/10 dark:border-white/10 bg-white/80 dark:bg-black/5 p-[3px] pr-3 focus-visible:outline-none"
                />
                <Image
                  src={Searchicon}
                  alt=""
                  className="absolute top-1/2 -translate-y-[50%] left-[7px] dark:invert mr-5"
                />
              </div>
            </div>
          </div>
          <div className="overflow-x-auto min-h-[470px]">
            <table className="xl:w-[1280px] 2xl:w-full lgm:w-[1000px] lg:w-full w-[1020px]">
              <thead>
                <tr className="text-black/40 dark:text-white/40 border-b text-xs ">
                  <th className="font-normal pl-0 py-3 before:top-0 before:right-0 w-6 before:h-full before:absolute relative h-full text-start heading-border leading-[18px]">
                    <CheckBox
                      name={"select all"}
                      onChange={selectAllCheckboxes}
                      className={"pl-[5px]"}
                    />
                  </th>
                  <th className="font-normal p-3 pr-[10px] before:top-0 before:right-0 before:h-full before:absolute text-start relative h-full heading-border leading-[18px]">
                    Client name
                  </th>
                  <th className="font-normal p-3 pr-[10px] before:top-0 before:right-0 before:h-full before:absolute text-start relative h-full heading-border leading-[18px]">
                    Office Assigned
                  </th>
                  <th className="font-normal p-3 pr-[10px] before:top-0 before:right-0 before:h-full before:absolute text-start relative h-full heading-border leading-[18px]">
                    Floor
                  </th>
                  <th className="font-normal p-3 pr-[10px] before:top-0 before:right-0 before:h-full before:absolute text-start relative h-full heading-border leading-[18px]">
                    Rent
                  </th>
                  <th className="font-normal p-3 pr-[10px] before:top-0 before:right-0 before:h-full before:absolute text-start relative h-full heading-border leading-[18px]">
                    Start Date
                  </th>
                  <th className="font-normal p-3 pr-[10px] before:top-0 before:right-0 before:h-full before:absolute text-start relative h-full heading-border leading-[18px]">
                    End Date
                  </th>
                  <th className="font-normal p-3 pr-[10px] before:top-0 before:right-0 before:h-full before:absolute text-start relative h-full heading-border leading-[18px]">
                    Notice Period
                  </th>
                  <th className="font-normal p-3 pr-[10px]  text-start relative h-full heading-border">
                    Agreement
                  </th>
                </tr>
              </thead>
              <tbody>
                <OnlineLeadsTable
                  selectAll={selectAll}
                  handleChange={selectOnlineLeadsItem}
                  opentableHandler={opentableHandler}
                  TableRow={TableRow}
                  selected={selected}
                />
              </tbody>
            </table>
          </div>
          <div className="flex justify-end mt-10">
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
        </>
        <Modal
          open={deleteProduct}
          setOpen={setDeleteProduct}
          className={"max-w-[544px] w-full mx-auto"}
        >
          <div className="px-2 ">
            <div className="bg-[#f9cdce] rounded-full border w-20 h-20 mx-auto">
              <Image src={Dleleteico} className="h-full mx-auto " />
            </div>
            <h2 className="md:text-2xl text-lg text-black/80 dark:text-white/80 font-semibold text-center pt-4">
              Do you want to delete this item?
            </h2>
            <p className="text-black/40 dark:text-white/40 text-center pt-2">
              This action can’t be undone
            </p>
            <div className="flex justify-end items-center gap-4 pt-8">
              <Button
                color="winered"
                className={
                  "sm:!py-[18px] !py-3 !text-sm rounded-[15px] font-semibold w-full"
                }
                name={"Delete"}
              ></Button>
              <Button
                color="lightgrey"
                onClick={() => setDeleteProduct(false)}
                secondary="true"
                name={"Cancel"}
                className={
                  "sm:!py-[18px] !py-3 !text-sm rounded-[15px] !px-4 w-full"
                }
              ></Button>
            </div>
          </div>
        </Modal>
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

export default Offers;
