import {
    Group,
    Burger,
    Title,
    Button,
    Indicator,
    ActionIcon,
    Avatar,
    Flex,
} from "@mantine/core";
import { IconBread, IconShoppingCart } from "@tabler/icons-react";
import { useCart } from "../../../common/customHooks";
import { useLogout } from "../customHooks";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../../views/home/customHooks";

interface Props {
    opened: boolean;
    toggle: () => void;
}

const Header = ({ opened, toggle }: Props) => {
    const { getTotalCartItems } = useCart();
    const { logout } = useLogout();
    const { user } = useUser();
    const navigate = useNavigate();

    const goToCheckout = () => {
        navigate("/checkout");
    };

    const goToHome = () => {
        navigate("/");
    };

    const goToUser = () => {
        navigate("/user");
    };

    return (
        <Group h="100%" px="md">
            <Burger
                opened={opened}
                onClick={toggle}
                hiddenFrom="sm"
                size="sm"
            />
            <ActionIcon
                variant="transparent"
                w="fit-content"
                color="black"
                onClick={goToHome}
            >
                <Title
                    order={1}
                    className="flex justify-center items-center gap-2"
                >
                    My Normal Bakery
                    <IconBread size={35}></IconBread>
                </Title>
            </ActionIcon>
            <Flex ml={"auto"} gap={30}>
                <Indicator
                    position="bottom-end"
                    color="red"
                    label={getTotalCartItems()}
                    size={15}
                >
                    <ActionIcon onClick={goToCheckout} variant="transparent">
                        <IconShoppingCart />
                    </ActionIcon>
                </Indicator>
                <ActionIcon onClick={() => goToUser()} variant="transparent">
                    <Avatar src={user?.image.url}></Avatar>
                </ActionIcon>
                <Button onClick={() => logout()} variant="transparent" px={0}>
                    Logout
                </Button>
            </Flex>
        </Group>
    );
};

export default Header;
