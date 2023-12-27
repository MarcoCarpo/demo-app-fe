import { AppShell, Burger, Button, Container, Flex } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Outlet } from "react-router-dom";
import { useLogout } from "./customHooks";

const Layout = () => {
    const [opened, { toggle }] = useDisclosure();
    const { logout } = useLogout();

    return (
        <>
            <AppShell
                header={{ height: 60 }}
                navbar={{
                    width: 300,
                    breakpoint: "sm",
                    collapsed: { mobile: !opened },
                }}
                padding="md"
            >
                <AppShell.Header>
                    <Container h={"100%"} fluid>
                        <Flex align="center" h="100%">
                            <Button ml={"auto"} onClick={() => logout()}>
                                Logout
                            </Button>
                        </Flex>
                    </Container>
                </AppShell.Header>

                <AppShell.Navbar p="md">Navbar</AppShell.Navbar>

                <AppShell.Main>
                    <Outlet />
                </AppShell.Main>
            </AppShell>
        </>
    );
};

export default Layout;
