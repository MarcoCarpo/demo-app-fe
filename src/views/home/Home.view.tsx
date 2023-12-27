import { Title } from "@mantine/core";
import { useUser } from "./customHooks";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { handleUserNotFound } from "./functions";

const HomeView = () => {
    const { user, error } = useUser();
    const navigate = useNavigate();

    useEffect(() => {
        if (error?.response?.status === 404) {
            handleUserNotFound(navigate);
        }
    }, [error]);

    return (
        <div>
            <Title order={1}>
                Welcome, <span className="text-[#50d71e]">{user?.name}</span>!
            </Title>
        </div>
    );
};

export default HomeView;
