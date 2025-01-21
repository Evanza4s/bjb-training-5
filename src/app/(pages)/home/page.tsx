import { HeaderContent, HeaderContentProps } from "@/components/HeaderContent";
import SidebarWithHeader from "@/components/Sidebar";
import { Box, Card, CardBody, CardHeader } from "@chakra-ui/react";

const HeaderDataContent: HeaderContentProps = {
  titleName: "Home",
  breadCrumb: ["Home"],
};

export default function HomePage() {
  return (
    <SidebarWithHeader>
      <HeaderContent
        titleName={HeaderDataContent.titleName}
        breadCrumb={HeaderDataContent.breadCrumb}
      />
      <Card>
        <CardHeader>Home</CardHeader>
        <CardBody>
          <Box>
            <p>test</p>
          </Box>
        </CardBody>
      </Card>
    </SidebarWithHeader>
  );
}
