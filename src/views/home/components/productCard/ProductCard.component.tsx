import {
    Card,
    Group,
    Button,
    Image,
    Text,
    NumberInput,
    Badge,
    NumberFormatter,
    ActionIcon,
    Flex,
} from "@mantine/core";
import { CartItem, Product } from "../../types";
import { IconMinus, IconPlus } from "@tabler/icons-react";

type Props = Product & {
    addToCart: (productId: number, value?: number) => void;
    cart: CartItem[];
};

const ProductCard = ({
    id,
    name,
    description,
    price,
    categoryName,
    cart,
    addToCart,
}: Props) => {
    const isProductAlreadyInCart = (productId: number) => {
        return cart?.some((product) => product.productId === productId);
    };

    const getCartProduct = (productId: number) => {
        return cart?.find((product) => product.productId === productId);
    };

    return (
        <Card
            shadow="sm"
            padding="lg"
            radius="md"
            withBorder
            w={"100%"}
            maw={300}
            h={400}
        >
            <Card.Section>
                <Image
                    src="https://www.misya.info/wp-content/uploads/2014/04/pane-di-segale1.jpg"
                    height={160}
                    alt="Norway"
                />
            </Card.Section>

            <Group justify="space-between" mt="md" mb="xs">
                <Text fw={500}>{name}</Text>
                <Badge color="pink">
                    <NumberFormatter
                        prefix="€"
                        value={price}
                        decimalScale={2}
                        suffix="/pz"
                    />
                </Badge>
            </Group>

            <Text size="sm" mb="xs" c={"blue"}>
                {categoryName}
            </Text>

            <Text size="sm" c="dimmed" mb={20} lineClamp={5}>
                {description}
            </Text>

            {isProductAlreadyInCart(id) ? (
                <Flex justify="center" align="center" gap="20px" mt={"auto"}>
                    <ActionIcon
                        w={50}
                        h={35}
                        onClick={() =>
                            addToCart(
                                id,
                                (getCartProduct(id)?.quantity || 0) - 1,
                            )
                        }
                    >
                        <IconMinus />
                    </ActionIcon>
                    <NumberInput
                        value={getCartProduct(id)?.quantity}
                        readOnly
                        hideControls
                        w={60}
                        styles={{ input: { textAlign: "center" } }}
                    />
                    <ActionIcon
                        w={50}
                        h={35}
                        onClick={() =>
                            addToCart(
                                id,
                                (getCartProduct(id)?.quantity || 0) + 1,
                            )
                        }
                    >
                        <IconPlus />
                    </ActionIcon>
                </Flex>
            ) : (
                <Button
                    variant="light"
                    onClick={() => addToCart(id)}
                    mt={"auto"}
                >
                    Add to Cart
                </Button>
            )}
        </Card>
    );
};

export default ProductCard;
