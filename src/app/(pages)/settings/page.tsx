"use client";

import Form from "@/components/Form";
import { HeaderContent, HeaderContentProps } from "@/components/HeaderContent";
import SidebarWithHeader from "@/components/Sidebar";
import { Box, Card, CardBody, CardHeader, Heading } from "@chakra-ui/react";

const HeaderDataContent: HeaderContentProps = {
  titleName: "Setting",
  breadCrumb: ["Home", "Setting", "Profile"],
};

export default function Settings() {
  return (
    <div>
      <SidebarWithHeader>
        <HeaderContent
          titleName={HeaderDataContent.titleName}
          breadCrumb={HeaderDataContent.breadCrumb}
        />
        <Card>
          <CardHeader>
            <Heading fontSize={"xl"}>Profile</Heading>
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
