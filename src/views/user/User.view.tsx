import { Container, Flex, Title } from "@mantine/core";
import { useUser } from "../home/customHooks";

const UserView = () => {
    const { isLoading, user } = useUser();
    return (
        <Container fluid>
            <Title>{user?.name}</Title>
        </Container>
    );
};

export default UserView;
