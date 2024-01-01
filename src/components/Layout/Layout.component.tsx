import { AppShell } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Outlet } from "react-router-dom";
import { useCategories } from "../../common/customHooks";
import Header from "./header/Header.component";
import NavBar from "./navbar/NavBar.component";

const Layout = () => {
    const [opened, { toggle }] = useDisclosure();

    return (
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
                <Header opened={opened} toggle={toggle} />
            </AppShell.Header>

            <AppShell.Navbar p="md">
                <NavBar />
            </AppShell.Navbar>

            <AppShell.Main>
                <Outlet />
            </AppShell.Main>

            <AppShell.Footer>Footer</AppShell.Footer>
        </AppShell>
    );
};

export default Layout;
