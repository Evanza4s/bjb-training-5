"use client";

import SidebarWithHeader from "@/components/Sidebar";
import { Card, CardBody, CardHeader } from "@chakra-ui/react";

export default function Home() {
  return (
    <section>
      <SidebarWithHeader>
        <Card>
          <CardHeader>Home</CardHeader>
          <CardBody>
            <p>Test123</p>
          </CardBody>
        </Card>
      </SidebarWithHeader>
    </section>
  );
}
