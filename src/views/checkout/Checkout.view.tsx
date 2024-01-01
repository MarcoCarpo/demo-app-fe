import { IconTrash } from "@tabler/icons-react";
import { useCart } from "../../common/customHooks";
import {
    ActionIcon,
    Card,
    Container,
    Flex,
    Group,
    Text,
    Title,
} from "@mantine/core";

const CheckoutView = () => {
    const { cart, getTotalCartPrice, addToCart } = useCart();
    return (
        <Container fluid>
            <Title>Checkout</Title>
            <Flex wrap={"wrap"} w={"100%"} gap={20} mt={30}>
                {cart?.map((product) => (
                    <Card key={product.id} w={"100%"}>
                        <Group justify="space-between" mt="md" mb="xs">
                            <Text fw={500}>{product.name}</Text>
                            <Flex align={"center"} gap={10}>
                                <Text fw={500}>
                                    €
                                    {(product.price * product.quantity).toFixed(
                                        2,
                                    )}
                                </Text>
                                <ActionIcon
                                    variant="transparent"
                                    onClick={() => {
                                        addToCart(product.productId, 0);
                                    }}
                                    color="red"
                                >
                                    <IconTrash />
                                </ActionIcon>
                            </Flex>
                        </Group>
                    </Card>
                ))}
                <Card w={"100%"} c={"blue"}>
                    <Group justify="space-between" mt="md" mb="xs">
                        <Text fw={500}>Total</Text>
                        <Text fw={500}>€{getTotalCartPrice()?.toFixed(2)}</Text>
                    </Group>
                </Card>
            </Flex>
        </Container>
    );
};

export default CheckoutView;
