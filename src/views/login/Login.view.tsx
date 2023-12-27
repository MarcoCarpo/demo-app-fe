import {
    Box,
    Button,
    Container,
    Group,
    PasswordInput,
    TextInput,
    Title,
} from "@mantine/core";
import { useHandleLogin, useLoginForm } from "./customHooks";
import { LoginDto, RegisterDto } from "./types";
import { useEffect } from "react";
import { useAuthContext } from "../../contexts/customHooks";
import { useNavigate } from "react-router-dom";

const LoginView = ({ isRegister = false }) => {
    const form = useLoginForm(isRegister);
    const { handleLogin, handleRegister } = useHandleLogin();
    const navigate = useNavigate();
    const { isAuthenticated } = useAuthContext()!;

    const onSubmit = (values: RegisterDto | LoginDto) => {
        if (isRegister) {
            handleRegister(values as RegisterDto);
        } else {
            handleLogin(values);
        }
    };

    const goToRegisterOrLogin = () => {
        if (isRegister) {
            navigate("/login");
        } else {
            navigate("/register");
        }
    };

    useEffect(() => {
        if (isAuthenticated) {
            navigate("/");
        }
    }, [isAuthenticated]);

    return (
        <Container className="min-h-screen flex flex-col items-center justify-center">
            <Title>{isRegister ? "Register" : "Login"}</Title>
            <Box mx="auto" mt={20} maw={400} w={"100%"}>
                <form onSubmit={form.onSubmit((values) => onSubmit(values))}>
                    <TextInput
                        withAsterisk
                        label="Email"
                        placeholder="your@email.com"
                        {...form.getInputProps("email")}
                    />
                    {isRegister ? (
                        <TextInput
                            withAsterisk
                            label="Name"
                            placeholder="John Doe"
                            {...form.getInputProps("name")}
                        />
                    ) : null}
                    <PasswordInput
                        withAsterisk
                        label="Password"
                        placeholder="Your password"
                        {...form.getInputProps("password")}
                    />
                    {isRegister ? (
                        <PasswordInput
                            withAsterisk
                            label="Repeat password"
                            placeholder="Repeat your password"
                            {...form.getInputProps("confirmPassword")}
                        />
                    ) : null}
                    <Group mt="md" justify="center">
                        <Button type="submit">Submit</Button>
                    </Group>
                </form>
            </Box>
            <Button variant="transparent" onClick={goToRegisterOrLogin} mt={10}>
                {isRegister ? "Login" : "Register"}
            </Button>
        </Container>
    );
};

export default LoginView;
