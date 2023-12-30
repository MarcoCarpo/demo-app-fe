import { Flex, Pagination, Select, Title } from "@mantine/core";
import { Loader } from "../../components";
import { ProductCard } from "./components";

import { useCart, useProducts } from "../../common/customHooks";
import { useFiltersContext } from "../../contexts/filters/customHooks";
import { OrderByEnum, getNameFromOrderByEnum } from "./enums";

const HomeView = () => {
    const { products, isLoading, totalPages, currentPage } = useProducts();
    const { addToCart, cart } = useCart();
    const { orderBy, setFilters } = useFiltersContext()!;

    if (isLoading) {
        return <Loader />;
    }

    const selectData = Object.values(OrderByEnum).map((value) => ({
        label: getNameFromOrderByEnum(value),
        value,
    }));

    return (
        <Flex direction="column" gap={20} w={"100%"}>
            <Flex justify="space-between" align="center" mx={20}>
                <Title>Products</Title>
                <Select
                    label="Order by"
                    defaultValue="auto"
                    data={selectData}
                    value={orderBy}
                    onChange={(value) => {
                        setFilters({
                            orderBy: (value as OrderByEnum) || OrderByEnum.Auto,
                        });
                    }}
                />
            </Flex>
            <Pagination
                mx="auto"
                total={totalPages}
                onChange={(e) => {
                    setFilters({ page: e });
                }}
                value={currentPage}
            />
            <Flex justify="center" wrap={"wrap"} gap={20}>
                {products?.data?.map((product) => (
                    <ProductCard
                        {...product}
                        key={product.id}
                        addToCart={addToCart}
                        cart={cart!}
                    />
                ))}
            </Flex>
            <Pagination
                mx="auto"
                total={totalPages}
                onChange={(e) => {
                    setFilters({ page: e });
                }}
                value={currentPage}
            />
        </Flex>
    );
};

export default HomeView;
