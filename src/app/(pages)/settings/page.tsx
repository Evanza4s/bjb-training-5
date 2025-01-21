"use client";

import Form from "@/components/Form";
import SidebarWithHeader from "@/components/Sidebar";
import { Box, Card, CardBody, CardHeader, Heading } from "@chakra-ui/react";

export default function Settings() {
  return (
    <div>
      <SidebarWithHeader>
        <Card>
          <CardHeader>
            <Heading fontSize={"4xl"}>Setting</Heading>
          </CardHeader>
          <CardBody>
            <Box>
              <Form />
            </Box>
          </CardBody>
        </Card>
      </SidebarWithHeader>
    </div>
  );
}
