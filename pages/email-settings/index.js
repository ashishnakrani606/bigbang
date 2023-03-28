import React, {useState } from "react";
import Add from "@/assets/images/icon/addb.svg";
import Threedot from "@/assets/images/icon/threedot.svg";
import Image from "next/image";
import Layout from "@/layouts/layout";
import Modal from "@/components/ui/Modal"
import OrserEmail from "@/assets/images/icon/orderemail.svg";
import IputeEmail from "@/components/ui/inputEmail"
import TextEditer from "@/components/ui/TextEditer";
import Button from "@/components/ui/Button"


const InvoiceEmails = [
  {
    id: 1,
    icon: Add,
    title: "Monthly rent",
    discription: "Sent automatically to the customer after they place their order.",
  },
  {
    id: 2,
    icon: Add,
    title: "Other invoices",
    discription: "Sent automatically to the customer after they place their order .",
  },
];
const Customer = [
  {
    id: 1,
    icon: Add,
    title: "Customer account invite",
    discription: "Sent automatically to the customer after they place their order.",
  },
  {
    id: 2,
    icon: Add,
    title: "Customer account welcome",
    discription: "Sent automatically to the customer after they place their order.",
  },
  {
    id: 3,
    icon: Add,
    title: "Customer account password reset",
    discription: "Sent automatically to the customer after they place their order.",
  },
  {
    id: 4,
    icon: Threedot,
    title: "B2B access email",
    discription: "Sent to the customer after their order is edited (if you select this option).",
  },
  {
    id: 5,
    icon: Threedot,
    title: "Contact customer",
    discription: "Sent to the customer after their order is edited (if you select this option).",
  },
];
const EmailMarketing = [
  {
    id: 1,
    icon: Add,
    title: "Customer marketing confirmation ",
    discription: "Sent automatically to the customer after they place their order.",
  },
];
const Returns = [
  {
    id: 1,
    icon: Add,
    title: "Return label/tracking for a return",
    discription: "Sent automatically to the customer after they place their order.",
  },
  {
    id: 2,
    icon: Add,
    title: "Return label for an order",
    discription: "Sent automatically to the customer after they place their order.",
  },
  {
    id: 3,
    icon: Add,
    title: "Return request confirmation",
    discription: "Sent automatically to the customer after they place their order.",
  },
  {
    id: 4,
    icon: Threedot,
    title: "Return request approved",
    discription: "Sent to the customer after their order is edited (if you select this option).",
  },
  {
    id: 5,
    icon: Threedot,
    title: "Return request declined",
    discription: "Sent to the customer after their order is edited (if you select this option).",
  },
];
const EmailSettings = () => {
  const [open, setOpen] = useState(false);

  return (
    <Layout container>
      <div className="w-full max-w-[100%] bg-primary-light dark:bg-white/5 rounded-2xl md:px-4 pt-6 pb-5 mb-4 px-3 lg:px-5 xl:px-6">
        <h3 className="text-lg font-semibold text-blacklight dark:text-white">Invoice emails</h3>
        {InvoiceEmails.map((item, index) => (
          <div
            className="border-b py-4 border-black/10 flex justify-between last:mb-0 dark:border-white/10"
            key={index}>
            <div>
              <h5 className="font-semibold text-sm">{item.title}</h5>
              <p className="text-black/40 text-xs	leading-[18px] dark:text-white/40">{item.discription}</p>
            </div>
            <Image src={item.icon} alt="" className="md:mr-[18px] dark:invert cursor-pointer" onClick={() => setOpen(true)}/>
          </div>
        ))}
      </div>
      <div className="w-full max-w-[100%] bg-primary-light dark:bg-white/5 rounded-2xl md:px-4 pt-6 pb-5 mb-4 px-3 lg:px-5 xl:px-6">
        <h3 className="text-lg font-semibold text-blacklight dark:text-white">Customer</h3>
        {Customer.map((item, index) => (
          <div
            className="border-b py-4 border-black/10 flex justify-between last:mb-0 dark:border-white/10"
            key={index}>
            <div>
              <h5 className="font-semibold text-sm">{item.title}</h5>
              <p className="text-black/40 text-xs	leading-[18px] dark:text-white/40">{item.discription}</p>
            </div>
            <Image src={item.icon} alt="" className="md:mr-[18px] dark:invert cursor-pointer" onClick={() => setOpen(true)}/>
          </div>
        ))}
      </div>
      <div className="w-full max-w-[100%] bg-primary-light dark:bg-white/5 rounded-2xl md:px-4 pt-6 pb-5 mb-4 px-3 lg:px-5 xl:px-6">
        <h3 className="text-lg font-semibold text-blacklight dark:text-white">Email marketing </h3>
        {EmailMarketing.map((item, index) => (
          <div
            className="border-b py-4 border-black/10 flex justify-between last:mb-0 dark:border-white/10"
            key={index}
          >
            <div>
              <h5 className="font-semibold text-sm">{item.title}</h5>
              <p className="text-black/40 text-xs	leading-[18px] dark:text-white/40">{item.discription}</p>
            </div>
            <Image src={item.icon} alt="" className="md:mr-[18px] dark:invert cursor-pointer" onClick={() => setOpen(true)} />
          </div>
        ))}
      </div>
      <div className="w-full max-w-[100%] bg-primary-light dark:bg-white/5 rounded-2xl md:px-4 pt-6 pb-5 mb-4 px-3 lg:px-5 xl:px-6">
        <h3 className="text-lg font-semibold text-blacklight dark:text-white">Returns</h3>
        {Returns.map((item, index) => (
          <div
            className="border-b py-4 border-black/10 flex justify-between last:mb-0 dark:border-white/10"
            key={index}
          >
            <div>
              <h5 className="font-semibold text-sm">{item.title}</h5>
              <p className="text-black/40 text-xs	leading-[18px] dark:text-white/40">{item.discription}</p>
            </div>
            <Image src={item.icon} alt="" className="md:mr-[18px] dark:invert cursor-pointer" onClick={() => setOpen(true)} />
          </div>
        ))}
      </div>
      {/* modal */}
      <Modal
        open={open}
        setOpen={setOpen}
        className="!max-w-[972px] w-full px-6 mx-auto sm:px-4">
        <div className="sm:p-2">
          <Image src={OrserEmail} className={"mx-auto"} />
          <div className="text-center md:py-8 py-5 max-w-[972px] w-full">
            <h2 className="text-black/80 dark:text-white/80 font-semibold md:text-2xl text-lg">
              Order confirmation Email
            </h2>
            <p className="font-semibold text-sm text-left mt-8 mb-6">
              Email Subject
            </p>
            <IputeEmail
              className={
                "!py-2.5 dark:bg-black/40 mb-3 bg-transparent border-2 "
              }
              placeholder="Email"
              inputStyle={
                " dark:bg-transparent dark:text-white dark:placeholder:text-white/20  placeholder:text-black/20 w-full text-graydark"
              }
            />
            <p className="font-semibold text-sm text-left mt-6 mb-8">
              Email Content
            </p>
            <TextEditer className="my-4 email-content" />
          </div>
          <div className="flex justify-center gap-4">
            <Button
              color="lightgrey"
              onClick={() => setOpen(false)}
              secondary="true"
              name={"Cancel"}
              className={
                "!text-sm sm:!py-[18px] !py-3 max-w-[232px] w-full rounded-[15px] font-semibold"
              }
            ></Button>
            <Button
              color="bluedark"
              className={
                "sm:!py-[18px] !py-3 !text-sm font-semibold max-w-[232px] rounded-[15px] w-full"
              }
              name={"Save"}
            ></Button>
          </div>
        </div>
      </Modal>
    </Layout>
  );
};

export default EmailSettings;
