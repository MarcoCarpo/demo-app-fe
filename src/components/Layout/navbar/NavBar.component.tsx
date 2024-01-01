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
import {
    handleChangeCategory,
    onPriceChange,
    toggleAllProducts,
} from "./functions";
import {
    matchRoutes,
    useLocation,
    useNavigate,
    useNavigation,
} from "react-router-dom";

const NavBar = () => {
    const {
        categoryIds,
        minPrice = 0,
        maxPrice = 20,
        setFilters,
        resetFilters,
    } = useFiltersContext()!;
    const { categories, isLoading } = useCategories();
    const { pathname } = useLocation();

    const marks = Array.from({ length: 10 }, (_, index) => (index + 1) * 2).map(
        (i) => ({ value: i, label: i % 4 === 0 ? "€" + i.toString() : "" }),
    );

    const showFilters =
        (matchRoutes([{ path: "/" }], pathname) || [])?.length > 0;

    return (
        <Flex direction="column" gap={20}>
            {showFilters ? (
                <>
                    <Flex direction="column" gap={10}>
                        <Flex justify={"space-between"}>
                            <Text size="xl">Categories</Text>
                            <Button onClick={() => resetFilters()}>
                                Clear
                            </Button>
                        </Flex>
                        <Flex direction="column" gap={20}>
                            <Skeleton visible={isLoading}>
                                <Flex direction="column" gap={5}>
                                    <Checkbox
                                        label="All"
                                        value="all"
                                        checked={
                                            categoryIds.length ===
                                            categories?.length
                                        }
                                        indeterminate={
                                            categories &&
                                            categoryIds.length > 0 &&
                                            categoryIds.length <
                                                categories?.length
                                        }
                                        onChange={() =>
                                            toggleAllProducts(
                                                categoryIds,
                                                categories || [],
                                                setFilters,
                                            )
                                        }
                                    />
                                    <CheckboxGroup
                                        value={categoryIds.map((id) =>
                                            id.toString(),
                                        )}
                                        onChange={(e) =>
                                            handleChangeCategory(e, setFilters)
                                        }
                                    >
                                        <Flex
                                            gap={5}
                                            ml={10}
                                            direction="column"
                                        >
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
                            value={[minPrice, maxPrice]}
                            marks={marks}
                            max={20}
                            onChangeEnd={(e) => onPriceChange(e, setFilters)}
                            minRange={1}
                        />
                    </Flex>
                </>
            ) : (
                ""
            )}
        </Flex>
    );
};

export default NavBar;
