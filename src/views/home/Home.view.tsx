import { Title } from "@mantine/core";
import { useUser } from "./customHooks";
import { Loader } from "../../components";

const HomeView = () => {
    const { user, isLoading } = useUser();

    if (isLoading) {
        return <Loader />;
    }

    return (
        <div>
            <Title order={1}>
                <span>
                    Welcome,{" "}
                    <span className="text-[#50d71e]">{user?.name}</span>!
                </span>
            </Title>
        </div>
    );
};

export default HomeView;
