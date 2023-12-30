import {
    Group,
    Burger,
    Title,
    Button,
    Indicator,
    ActionIcon,
    Avatar,
} from "@mantine/core";
import { IconBread, IconShoppingCart } from "@tabler/icons-react";
import { useCart } from "../../../common/customHooks";
import { useLogout } from "../customHooks";

interface Props {
    opened: boolean;
    toggle: () => void;
}

const Header = ({ opened, toggle }: Props) => {
    const { getTotalCartItems } = useCart();
    const { logout } = useLogout();

    return (
        <Group h="100%" px="md">
            <Burger
                opened={opened}
                onClick={toggle}
                hiddenFrom="sm"
                size="sm"
            />
            <Title order={1} className="flex justify-center items-center gap-2">
                My Normal Bakery
                <IconBread size={35}></IconBread>
            </Title>
            <Group ml={"auto"}>
                <Indicator
                    position="bottom-end"
                    color="red"
                    label={getTotalCartItems()}
                    size={15}
                >
                    <Avatar radius="xl"></Avatar>
                </Indicator>
                <Button onClick={() => logout()} variant="transparent">
                    Logout
                </Button>
            </Group>
        </Group>
    );
};

export default Header;
