import { AppShell, Burger, Button, Group, Skeleton } from "@mantine/core";
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
                    <Group h="100%" px="md">
                        <Burger
                            opened={opened}
                            onClick={toggle}
                            hiddenFrom="sm"
                            size="sm"
                        />
                        <Button ml={"auto"} onClick={() => logout()}>
                            Logout
                        </Button>
                    </Group>
                </AppShell.Header>

                <AppShell.Navbar p="md">
                    Navbar
                    {Array(15)
                        .fill(0)
                        .map((_, index) => (
                            <Skeleton
                                key={index}
                                h={28}
                                mt="sm"
                                animate={false}
                            />
                        ))}
                </AppShell.Navbar>

                <AppShell.Main className="flex">
                    <Outlet />
                </AppShell.Main>
            </AppShell>
        </>
    );
};

export default Layout;
