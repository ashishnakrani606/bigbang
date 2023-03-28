
import React from "react";
import Layout from "@/layouts/layout";
import FullCalendar from "@/components/FullCalendar/fullcalendar";

export default function Example() {
  return (
    <Layout>
      rent celander
      <FullCalendar initialView='dayGridMonth' editable />
    </Layout>
  )
}
