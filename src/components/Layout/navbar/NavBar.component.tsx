import {
    CheckboxGroup,
    Checkbox,
    Text,
    Skeleton,
    Flex,
    RangeSlider,
    Button,
} from "@mantine/core";
import { useFiltersContext } from "../../../contexts/filters/customHooks";
import { useCategories } from "../../../common/customHooks";

const NavBar = () => {
    const { categoryIds, setFilters, resetFilters } = useFiltersContext()!;
    const { categories, isLoading } = useCategories();

    const handleChangeCategory = (ids: string[]) => {
        setFilters({
            categoryIds: ids.map((id) => parseInt(id)).filter((id) => id),
            page: 1,
        });
    };

    const toggleAllProducts = () => {
        if (categoryIds.length === categories?.length) {
            setFilters({ categoryIds: [], page: 1 });
        } else {
            setFilters({
                categoryIds: categories?.map((category) => category.id) || [],
                page: 1,
            });
        }
    };

    const onPriceChange = (value: number[]) => {
        setFilters({
            page: 1,
            minPrice: value[0],
            maxPrice: value[1],
        });
    };

    const marks = Array.from({ length: 10 }, (_, index) => (index + 1) * 2).map(
        (i) => ({ value: i, label: "€" + i.toString() }),
    );

    return (
        <Flex direction="column" gap={20}>
            <Flex direction="column" gap={10}>
                <Flex justify={"space-between"}>
                    <Text size="xl">Categories</Text>
                    <Button onClick={() => resetFilters()}>Clear</Button>
                </Flex>
                <Flex direction="column" gap={20}>
                    <Skeleton visible={isLoading}>
                        <Flex direction="column" gap={5}>
                            <Checkbox
                                label="All"
                                value="all"
                                checked={
                                    categoryIds.length === categories?.length
                                }
                                indeterminate={
                                    categories &&
                                    categoryIds.length > 0 &&
                                    categoryIds.length < categories?.length
                                }
                                onChange={toggleAllProducts}
                            />
                            <CheckboxGroup
                                value={categoryIds.map((id) => id.toString())}
                                onChange={handleChangeCategory}
                            >
                                <Flex gap={5} ml={10} direction="column">
                                    {categories?.map((category) => (
                                        <Checkbox
                                            key={category.id}
                                            value={category.id.toString()}
                                            label={category.name}
                                        />
                                    ))}
                                </Flex>
                            </CheckboxGroup>
                        </Flex>
                    </Skeleton>
                </Flex>
            </Flex>
            <Flex direction={"column"} gap={20}>
                <Text size="xl">Price</Text>
                <RangeSlider
                    defaultValue={[0, 100]}
                    marks={marks}
                    max={20}
                    onChangeEnd={onPriceChange}
                    minRange={1}
                />
            </Flex>
        </Flex>
    );
};

export default NavBar;
