import { Center, Loader as MantineLoader } from "@mantine/core";

const Loader = () => {
    return (
        <Center w="100%">
            <MantineLoader color="blue" size={50} />
        </Center>
    );
};

export default Loader;
