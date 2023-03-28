import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/ui/PageHeader";
import Button from "@/components/ui/Button";
import Dropdown from "@/components/ui/Dropdown";
import Alert from "@/components/ui/Alert";
import UnsavedChanges from "@/components/ui/UnsavedChanges";
import MultiselectDropdown from "@/components/ui/MultiselectDropdown";
import InputContent from "@/components/ui/InputContent";
import pillows from "@/assets/images/users/brown-throw-pillows.png";
import infoicon from "@/assets/images/icon/info-icon.svg";
import closeico from "@/assets/images/icon/close-circle.svg";
import Layout from "@/layouts/layout";
import Modal from "@/components/ui/Modal";
import VarientDropdown from "@/components/ui/SelectOption";
import RegionDropdown from "@/components/ui/CountryStateDropdown/RegionDropdown";
import { COUNTRY_CODE } from "@/../appConstants";
import CountryDropdown from "@/components/ui/CountryStateDropdown/CountryDropdown";
import IputeEmail from "@/components/ui/inputEmail";
import DAtePicker from "@/components/ui/DAtePicker";

const Invoices = () => {
  const [selectedCountry, setSelectedCountry] = useState("India");
  const [selectedState, setSelectedState] = useState("");

  const [information, setInformation] = useState(false);
  const [customerData, setCustomerData] = useState(true);
  const [address, setAddress] = useState(false);
  const [open, setOpen] = useState(false);

  const InvoiceDetails = [
    {
      id: 1,
      productImg: pillows,
      product: "Monthly rent",
      productItem: "40 Seater, Office 2 Ground Floor",
      price: "₹3,00,000.00",
      totlePrice: "₹54,000.00",
      totleAmount: "₹3,54,000.00",
    },
    {
      id: 2,
      productImg: pillows,
      product: "Housekeeping",
      productItem: "12 Hours",
      price: "₹20,000.00",
      totlePrice: "₹3,600.00",
      totleAmount: "₹23,600.00",
    },
  ];

  const customer = [
    {
      id: 1,
      companyname: "Rage Coffee INC",
      name: "First name Last name",
      phone: "",
      email: "",
      address:
        "Baalkrishan Lal Sani Exploit Cross-Platform Mindshare 52, Ekbal Society, ShwetaPur Pilani 459501 Pilani Rajasthan India",
      mobile: "+91 80735 89105",
    },
  ];
  return (
    <Layout container>
      <PageHeader
        arrow={true}
        className={"mb-[28px] gap-y-3"}
        orderid={"#BB1302"}
        Badgesdata={[
          { color: "yellow", name: "Payment pending" },
          { color: "dot", name: "Monthly Rent + 1" },
        ]}
      >
        <Button
          name={"Download PDF"}
          outline={"true"}
          color={"grey"}
          size={"small"}
          className="!text-black/80 !leading-4"
        />
        <Button name={"Edit invoice"} secondary={"true"} />
        <Dropdown
          className="right-0 left-[unset] text-xs"
          itemsclass="left-2 top-[28px] 
        overflow-hidden inline-table sm:!w-full mt-2 origin-top-right divide-y divide-black/5 dark:divide-white/10 rounded-md bg-white dark:bg-black shadow-lg ring-1 ring-black/5 focus:outline-none md:!w-[240px] p-2 [&>a:nth-child(2)]:!border-0 [&>a:nth-child(3)]:!border-t [&>a:nth-child(4)]:!border-0 [&>a:nth-child(5)]:!border-0 !w-full sm:!w-[180px] left-0 transform opacity-100 scale-100"
          button={
            <div className="flex gap-2 items-center py-3 px-2 justify-end">
              More actions
              <svg
                width="10"
                height="6"
                viewBox="0 0 10 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0.646447 0.659675C0.841709 0.446775 1.15829 0.446775 1.35355 0.659675L4.64645 4.25C4.84171 4.4629 5.15829 4.4629 5.35355 4.25L8.64645 0.659676C8.84171 0.446776 9.15829 0.446776 9.35355 0.659676C9.54882 0.872575 9.54882 1.21775 9.35355 1.43065L6.06066 5.02098C5.47487 5.65967 4.52513 5.65968 3.93934 5.02098L0.646447 1.43065C0.451184 1.21775 0.451184 0.872574 0.646447 0.659675Z"
                  fill="black"
                  className="fill-black dark:fill-white"
                ></path>
              </svg>
            </div>
          }
          dropdownitem={[
            { id: 1, title: "Duplicate", link: "/" },
            { id: 2, title: "Unarchive", link: "/" },
            { id: 3, title: "Print order page", link: "/" },
            { id: 4, title: "Print packing slips", link: "/" },
          ]}
        />
      </PageHeader>
      <UnsavedChanges>
        <Button
          color={"white"}
          outline={"true"}
          size={"small"}
          name={"Discard"}
          className={"mr-5 dark:!border-blacklight dark:!text-blacklight !py-1"}
        />
        <Button
          color={"primarygreen"}
          name={"Save Changes"}
          className={"!py-[5px]"}
        />
      </UnsavedChanges>
      <div className="my-7">
        <Alert
          color={"green"}
          className={""}
          title={"Client added"}
          description={
            "Rage Coffee INC has been added as a client for this invoice."
          }
          alertStyle={
            "pb-3.5 outline-primary-greenb outline outline-1 border-0"
          }
        />
        <div className="mt-7">
          <Alert
            color={"red"}
            title={"Unable to save invoice"}
            description={"Kindly add a client to save the invoice."}
            alertStyle={
              "pb-3.5 outline-secondary-red outline outline-1 border-0"
            }
          />
        </div>
        <div className="flex justify-between md:flex-row flex-col items-start xl:mt-9 mt-6 gap-y-8">
          <div className="bg-primary-light dark:bg-white/5 md:px-6 md:py-4 p-3 rounded-2xl w-full md:max-w-[52%]">
            <h2 className="text-blacklight dark:text-white font-semibold text-sm leading-5 pb-4">
              {" "}
              Invoice details
            </h2>
            <div className="bg-white dark:bg-black/40">
              <div className="overflow-x-auto">
                <table className="w-[640px] lg:w-[600px] md:w-[590px] xl:w-full sm:w-full">
                  <thead>
                    <tr className="border-b border-black/5 dark:border-white/5 text-xs">
                      <th className="text-left pl-4 py-3 leading-[18px]">
                        Type
                      </th>
                      <th className="text-left pl-4 py-3 leading-[18px]">
                        Details
                      </th>
                      <th className="text-left pl-4 py-3 leading-[18px]">
                        Amount
                      </th>
                      <th className="text-left pl-4 py-3 leading-[18px]">
                        GST (18%)
                      </th>
                      <th className="text-left pl-4 py-3 leading-[18px]">
                        Total Amount
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {InvoiceDetails.map((item, index) => (
                      <tr
                        className="text-blacklight dark:text-white border-b border-black/5 dark:border-white/5"
                        key={index}
                      >
                        <td className="py-2 pl-4 text-xs leading-[18px] font-normal whitespace-nowrap">
                          {item.product}
                        </td>
                        <td className="py-2 pl-4 text-xs leading-[18px] font-normal">
                          {item.productItem}
                        </td>
                        <td className="py-2 pl-4 text-xs leading-[18px] font-normal whitespace-nowrap">
                          {item.price}
                        </td>
                        <td className="py-2 pl-4 text-xs leading-[18px] font-normal">
                          {item.totlePrice}
                        </td>
                        <td className="py-2 px-4 text-xs leading-[18px] font-normal">
                          {item.totleAmount}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="flex items-center justify-end gap-4 w-full py-4 pr-7 border-b border-black/10 dark:border-white/10">
                <Button
                  color={"primarygreen"}
                  name={"Add service"}
                  className="!text-sm !leading-5"
                  size={"medium"}
                />
              </div>
            </div>
            <h2 className="text-blacklight dark:text-white font-semibold text-sm leading-5 pt-4 pb-3.5">
              Pending
            </h2>
            <div className="bg-white dark:bg-black/40">
              <div className="overflow-x-auto">
                <table className="w-[640px] sm:w-full">
                  <tbody className="w-full">
                    <tr className="text-blacklight border-b dark:text-white border-black/5 dark:border-white/5 w-full">
                      <td className="font-normal text-xs leading-[18px] max-w-[33.33%] w-full py-[11px] pl-4">
                        Subtotal
                      </td>
                      <td className="font-normal text-xs leading-[18px] max-w-[33.33%] w-full py-[11px] px-4">
                        2 services
                      </td>
                      <td className="font-normal text-xs leading-[18px] max-w-[33.33%] w-full py-[11px] text-right pr-4">
                        ₹3,20,000.00
                      </td>
                    </tr>
                    <tr className="text-blacklight dark:text-white border-b border-black/5 dark:border-white/5 w-full">
                      <td className="font-normal text-xs leading-[18px] max-w-[33.33%] w-full py-[11px] pl-4">
                        Tax
                      </td>
                      <td className="font-normal text-xs leading-[18px] text-green2 max-w-[33.33%] w-full py-[11px] px-4">
                        <Link
                          className="flex whitespace-nowrap text-primary-greenb"
                          href={"/"}
                        >
                          18% GST
                          <Image src={infoicon} alt="" className="ml-[5px]" />
                        </Link>
                      </td>
                      <td className="font-normal text-xs leading-[18px] max-w-[33.33%] w-full py-[11px] text-right pr-4">
                        ₹57,600.00
                      </td>
                    </tr>
                    <tr className="text-blacklight dark:text-white border-b border-black/5 dark:border-white/5 w-full">
                      <td className="font-semibold text-sm max-w-[33.33%] w-full py-2.5 pl-4">
                        Total
                      </td>
                      <td className="max-w-[33.33%] w-full py-2.5	px-4"></td>
                      <td className="font-semibold text-sm max-w-[33.33%] w-full py-2.5	pr-4 text-right">
                        ₹3,77,600.00
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="bg-white dark:bg-black/40 mt-4">
              <table className="w-full">
                <tbody className="w-full">
                  <tr className="text-blacklight dark:text-white border-b border-black/5 dark:border-white/5 w-full">
                    <td className="w-full max-w-[50%] pl-4 py-[11px] text-xs leading-[18px]">
                      Paid by customer
                    </td>
                    <td className="w-full max-w-[50%] pr-4 py-[11px] text-xs leading-[18px] text-right">
                      ₹0.00
                    </td>
                  </tr>
                  <tr className="text-blacklight dark:text-white border-b border-black/5 dark:border-white/5 w-full">
                    <td className="w-full max-w-[50%] pl-4 py-[11px] text-xs leading-[18px]">
                      No payment due date
                    </td>
                    <td className="w-full max-w-[50%] pr-4 py-[11px] font-normal text-xs leading-[18px] text-green2">
                        <div className="flex justify-end text-primary-greenb">
                        <DAtePicker
                          placeholder={"Add due date"}
                          className=""
                        ></DAtePicker>
                      </div>
                    </td>
                  </tr>
                  <tr className="text-blacklight dark:text-white border-b border-black/5 dark:border-white/5 w-full">
                    <td className="w-full max-w-[50%] pl-4 py-2.5 text-sm font-semibold">
                      Balance (owed by client)
                    </td>
                    <td className="w-full max-w-[50%] pr-4 py-2.5 text-sm font-semibold text-right">
                      ₹3,77,600.00
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="py-4 px-4 flex gap-4 justify-end border-b items-center border-black/10 dark:border-white/10 sm:flex-nowrap flex-wrap">
                <Button
                  outline={"true"}
                  secondary={"true"}
                  color={"grey"}
                  name={"Send invoice"}
                  className="!text-sm !leading-[18px]"
                  size={"medium"}
                />
                <Dropdown
                  className="right-0 left-[unset] flex justify-end"
                  itemsclass="p-2 z-[1]"
                  button={
                    <div className="flex gap-2 items-center px-4 justify-end py-2 text-sm lg:text-lg font-semibold transition-all duration-500 rounded-lg text-white bg-primary-greenb">
                      Collect payment
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M4.55806 7.07459C4.80214 6.80847 5.19786 6.80847 5.44194 7.07459L9.55806 11.5625C9.80214 11.8286 10.1979 11.8286 10.4419 11.5625L14.5581 7.07459C14.8021 6.80847 15.1979 6.80847 15.4419 7.07459C15.686 7.34072 15.686 7.77219 15.4419 8.03832L11.3258 12.5262C10.5936 13.3246 9.40641 13.3246 8.67418 12.5262L4.55806 8.03831C4.31398 7.77219 4.31398 7.34072 4.55806 7.07459Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                  }
                  dropdownitem={[
                    { id: 1, title: "Enter credit card", link: "/" },
                    { id: 2, title: "Mark as paid", link: "/" },
                    { id: 3, title: "Mark as COD", link: "/" },
                  ]}
                />
              </div>
            </div>
            <InputContent
              title={"Add tags"}
              className={"mt-4 w-full max-w-[400px] cursor-pointer"}
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
            <div className="max-w-[400px] w-full mt-4"></div>
          </div>
          <div className="bg-primary-light dark:bg-white/5 py-5 px-4 rounded-2xl w-full md:max-w-[46%]">
            <div>
              <div className="flex justify-between items-center gap-2 mb-[15px]">
                <h3 className="font-semibold text-sm">Customer Details</h3>
                <div className="flex gap-1">
                  <Button
                    color={"blacklight"}
                    name={"Remove Client"}
                    className="!py-2 px-[12px] leading-[18px]"
                  />
                  <Button
                    color={"blacklight"}
                    name={"Add Client"}
                    className="!py-2 px-[12px] leading-[18px]"
                    onClick={() => setOpen(true)}
                  />
                </div>
              </div>
              {customerData ? (
                <>
                  {customer.map((item, index) => (
                    <div key={index}>
                      <div className="flex w-full mb-4 flex-wrap sm:flex-nowrap">
                        <p className="text-black/40 dark:text-white/40 text-xs leading-[18px] font-normal  sm:max-w-[44%] w-full">
                          Company Name
                        </p>
                        <p className="text-blacklight dark:text-white text-sm leading-5 font-medium">
                          {item.name ? (
                            item.companyname
                          ) : (
                            <>
                              No name provided
                              <Button
                                secondary={"true"}
                                name={"Add Name"}
                                outline={"true"}
                                color={"grey"}
                                className="text-sm leading-[18px] ml-2"
                                size={"medium"}
                              />
                            </>
                          )}
                        </p>
                      </div>
                      <div className="flex mb-3 w-full flex-wrap sm:flex-nowrap">
                        <p className="text-black/40 dark:text-white/40 text-xs leading-[18px] sm:max-w-[44%] w-full">
                          Name
                        </p>
                        <p className="text-blacklight dark:text-white text-sm leading-5 font-medium">
                          {item.name ? (
                            item.name
                          ) : (
                            <>
                              No name provided
                              <Button
                                secondary={"true"}
                                name={"Add Name"}
                                outline={"true"}
                                color={"grey"}
                                className="text-sm leading-[18px] ml-2"
                                size={"medium"}
                              />
                            </>
                          )}
                        </p>
                      </div>
                      <div className="flex mb-3 w-full flex-wrap sm:flex-nowrap items-center">
                        <p className="text-black/40 dark:text-white/40 text-xs leading-[18px] font-normal sm:max-w-[44%] w-full">
                          Phone
                        </p>
                        <p className="text-blacklight dark:text-white text-sm leading-5 font-normal ">
                          {item.phone ? (
                            item.phone
                          ) : (
                            <>
                              No phone provided
                              <Button
                                secondary={"true"}
                                name={"Add Phone"}
                                outline={"true"}
                                color={"grey"}
                                className="!text-sm !leading-[18px] ml-2"
                                size={"medium"}
                                onClick={() => setInformation(true)}
                              />
                            </>
                          )}
                        </p>
                      </div>
                      <div className="flex mb-6 w-full flex-wrap sm:flex-nowrap items-center">
                        <p className="text-black/40 dark:text-white/40 text-xs leading-[18px] font-normal sm:max-w-[44%] w-full">
                          Email
                        </p>
                        <p className="text-blacklight dark:text-white text-sm leading-5 font-normal ">
                          {item.email ? (
                            item.email
                          ) : (
                            <>
                              No email provided
                              <Button
                                secondary={"true"}
                                name={"Add email"}
                                outline={"true"}
                                color={"grey"}
                                className="!text-sm !leading-[18px] ml-2"
                                size={"medium"}
                                onClick={() => setInformation(true)}
                              />
                            </>
                          )}
                        </p>
                      </div>
                      <div className="flex w-full flex-wrap sm:flex-nowrap">
                        <p className="text-black/40 dark:text-white/40 text-xs leading-[18px] font-normal sm:max-w-[44%] w-full">
                          Address
                        </p>
                        {item.address ? (
                          <div className="text-blacklight dark:text-white text-sm leading-5 font-normal lg:max-w-[55%] w-full flex items-center ">
                            <p>
                              {item.address}
                              <Link className="block" href={"#0"}>
                                {item.mobile}
                              </Link>
                            </p>
                            <Button
                              secondary={"true"}
                              size={"medium"}
                              color={"grey"}
                              outline={"true"}
                              name={"Edit"}
                              className="!text-sm md:ml-2 !leading-[18px]"
                              onClick={() => setAddress(true)}
                            />
                          </div>
                        ) : (
                          <>
                            No address provided
                            <Button
                              secondary={"true"}
                              name={"Add address"}
                              outline={"true"}
                              color={"grey"}
                              className="text-sm leading-[18px] ml-2"
                              size={"medium"}
                            />
                          </>
                        )}
                      </div>
                    </div>
                  ))}
                </>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>
      <Modal
        open={open}
        setOpen={setOpen}
        className={"max-w-[544px] w-full mx-auto sm:px-6 px-3"}
      >
        <div className="sm:px-2">
          <div className="flex items-center justify-between md:pb-8 pb-5">
            <h2 className="text-black/80 dark:text-white/80 font-semibold md:text-2xl text-lg">
              Add Client to order
            </h2>
            <Image
              src={closeico}
              alt=""
              onClick={() => setOpen(false)}
              className={"cursor-pointer dark:invert"}
            />
          </div>
          <p className="text-black/80  dark:text-white/80 font-semibold">
            Select Client
          </p>
          <InputContent className={"mt-4 cursor-pointer py-3 px-4"}>
            <MultiselectDropdown
              className={"itemselect select-customer"}
              roundClose
              options={[
                {
                  cat: "tag 1",
                  key: "Kathryn Murphy",
                },
                {
                  cat: "tag 2",
                  key: "Kathryn Murphy2",
                },
                {
                  cat: "tag 3",
                  key: "Kathryn Murphy3",
                },
              ]}
              selectedValues={[
                {
                  cat: "heena09887@gmail.com",
                  key: "Kathryn Murphy",
                },
              ]}
            />
          </InputContent>
          <div className="flex justify-end items-center gap-4 md:pt-6 pt-2 mx-auto">
            <Button
              color="lightgrey"
              secondary="true"
              name={"Cancel"}
              className={
                "sm:!py-[18px] !py-3 !text-sm !px-3 w-full rounded-[15px] font-semibold"
              }
              onClick={() => setOpen(false)}
            ></Button>
            <Button
              color="bluedark"
              secondary="true"
              name={"Add Client"}
              className={
                "sm:!py-[18px] !py-3 !text-sm !px-3 w-full rounded-[15px] font-semibold"
              }
            ></Button>
          </div>
        </div>
      </Modal>
      <Modal
        open={information}
        setOpen={setInformation}
        className={"max-w-[544px] w-full mx-auto "}
      >
        <div className="sm:px-2 pb-2">
          <div className="flex items-center justify-between md:pb-8 pb-5">
            <h2 className="text-black/80 dark:text-white/80 font-semibold md:text-2xl !leading-9 text-lg">
              Edit Client information
            </h2>
            <Image
              src={closeico}
              alt=""
              onClick={() => setInformation(false)}
              className={"cursor-pointer dark:invert"}
            />
          </div>
          <p className="mb-[15px] text-black/80 dark:text-white/40 text-sm	font-semibold">
            Email
          </p>
          <IputeEmail
            className={"!py-2.5 dark:bg-black/40 mb-3"}
            placeholder="Email"
            inputStyle={
              " dark:text-white dark:placeholder:text-white/20 placeholder:text-black/20 "
            }
            defaultValue={"abc2235@yahoo.co.in"}
          />
          <p className="mb-[15px] text-black/80 dark:text-white/40 text-sm	font-semibold">
            Phone number
          </p>
          <div className="grid sm:grid-cols-2 sm:gap-6">
            <InputContent
              title={"Country code"}
              className="dark:bg-black/40 relative"
            >
              <VarientDropdown
                selectitem={COUNTRY_CODE}
                className="dark:!text-white/80 !text-black/80  -right-5"
              />
            </InputContent>
            <InputContent title={"Phone number"} className="dark:bg-black/40">
              <input
                type="number"
                name=""
                defaultValue="8073589105"
                className="w-full dark:bg-transparent"
              />
            </InputContent>
          </div>
          <div className="flex justify-end sm:flex-nowrap flex-wrap items-center gap-4 mx-auto sm:mt-6   mt-5">
            <Button
              color="lightgrey"
              secondary="true"
              name={"Cancel"}
              className={
                "sm:!py-[18px] !py-3 !text-sm !px-3 w-full rounded-[15px] font-semibold"
              }
              onClick={() => setInformation(false)}
            ></Button>
            <Button
              color="bluedark"
              secondary="true"
              name={"Save"}
              className={
                "sm:!py-[18px] !py-3 !text-sm !px-3 w-full rounded-[15px] font-semibold"
              }
            ></Button>
          </div>
        </div>
      </Modal>
      <Modal
        open={address}
        setOpen={setAddress}
        className={"max-w-[544px] w-full mx-auto "}
      >
        <div className="sm:px-2 pb-2">
          <div className="flex items-center justify-between md:pb-8 pb-5">
            <h2 className="text-black/80 dark:text-white/80 font-semibold md:text-2xl text-lg">
              Edit shipping address
            </h2>
            <Image
              src={closeico}
              alt=""
              onClick={() => setAddress(false)}
              className={"cursor-pointer dark:invert"}
            />
          </div>
          <InputContent
            className={
              "!py-[10px] dark:bg-black/40 dark:text-white/40 mb-3 mt-4"
            }
          >
            <CountryDropdown
              defaultCountry={selectedCountry}
              onChange={setSelectedCountry}
            />
          </InputContent>
          <div className="grid sm:grid-cols-2 sm:gap-6 ">
            <InputContent
              ontent
              title={"First name"}
              className="dark:bg-black/40 mb-3"
            >
              <input
                type="text"
                name=""
                defaultValue="Baalkrishans"
                className="w-full dark:bg-transparent"
              />
            </InputContent>
            <InputContent title={"Last name"} className="dark:bg-black/40 mb-3">
              <input
                type="text"
                name=""
                defaultValue="Lal Sani"
                className="w-full dark:bg-transparent"
              />
            </InputContent>
          </div>
          <InputContent title={"Company"} className="dark:bg-black/40 mb-3">
            <input
              type="text"
              name=""
              defaultValue="Company name"
              className="w-full dark:bg-transparent"
            />
          </InputContent>
          <InputContent title={"Address"} className="dark:bg-black/40 mb-3">
            <input
              type="text"
              name=""
              defaultValue="Exploit Cross-Platform Mindshare 52, Ekbal Society, ShwetaPur Pilani"
              className="w-full dark:bg-transparent"
            />
          </InputContent>
          <InputContent
            title={"Apartment etc."}
            className="dark:bg-black/40 mb-3"
          >
            <input
              type="text"
              name=""
              defaultValue="Apartment, suite, etc"
              className="w-full dark:bg-transparent"
            />
          </InputContent>
          <div className="grid sm:grid-cols-2 sm:gap-6">
            <InputContent
              title={"State"}
              className="dark:bg-black/40 dark:text-white/40 mb-3"
            >
              <RegionDropdown
                onChange={setSelectedState}
                country={selectedCountry}
                className="dark:bg-transparent dark:!text-white"
              />
            </InputContent>
            <InputContent title={"City"} className="dark:bg-black/40 mb-3">
              <input
                type="text"
                name=""
                defaultValue="Pilani"
                className="w-full dark:bg-transparent"
              />
            </InputContent>
          </div>
          <div className="grid sm:grid-cols-2 sm:gap-6 mb-[42px]">
            <InputContent title={"Country code"} className="dark:bg-black/40">
              <VarientDropdown
                selectitem={COUNTRY_CODE}
                className="dark:!text-white/80 !text-black/80"
              />
            </InputContent>
            <InputContent title={"Phone number"} className="dark:bg-black/40">
              <input
                type="number"
                name=""
                defaultValue="8073589105"
                className="w-full dark:bg-transparent"
              />
            </InputContent>
          </div>
          <div className="flex justify-end sm:flex-nowrap flex-wrap items-center gap-4 mx-auto sm:mt-8 mt-5">
            <Button
              color="lightgrey"
              secondary="true"
              name={"Cancel"}
              className={
                "sm:!py-[18px] !py-3 !text-sm !px-3 w-full rounded-[15px] font-semibold "
              }
              onClick={() => setAddress(false)}
            ></Button>
            <Button
              color="bluedark"
              secondary="true"
              name={"Save"}
              className={
                "sm:!py-[18px] !py-3 !text-sm !px-3 w-full rounded-[15px] font-semibold"
              }
            ></Button>
          </div>
        </div>
      </Modal>
    </Layout>
  );
};

export default Invoices;
