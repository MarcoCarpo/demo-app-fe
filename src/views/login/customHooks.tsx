import { useForm } from "@mantine/form";
import { useMutation } from "@tanstack/react-query";
import { zodResolver } from "mantine-form-zod-resolver";
import { z } from "zod";
import { login, register } from "./api";
import { LoginDto, RegisterDto } from "./types";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../contexts/customHooks";
import { onLoginSuccess, onRegisterSuccess } from "./functions";

export const useLoginForm = (isRegister: boolean) => {
    const passwordSchema = z
        .string()
        .regex(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,
            {
                message:
                    "Password must contain at least one lowercase letter, one uppercase letter, one number and one special character",
            },
        );

    let schema;
    let initialValues;

    if (isRegister) {
        schema = z
            .object({
                name: z
                    .string()
                    .min(2, { message: "Name should have at least 2 letters" }),
                email: z.string().email({ message: "Invalid email" }),
                password: passwordSchema,
                confirmPassword: passwordSchema,
            })
            .refine((data) => data.password === data.confirmPassword, {
                message: "Passwords should match",
                path: ["confirmPassword"],
            });

        initialValues = {
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
        };
    } else {
        schema = z.object({
            email: z.string().email({ message: "Invalid email" }),
            password: passwordSchema,
        });

        initialValues = {
            email: "",
            password: "",
        };
    }

    const form = useForm({
        initialValues,
        validate: zodResolver(schema),
    });

    return form;
};

export const useHandleLogin = () => {
    const navigate = useNavigate();
    const { setAuthenticated } = useAuthContext()!;

    const mutation = useMutation({
        mutationFn: login,
        onSuccess: (data) => {
            onLoginSuccess(data, setAuthenticated, navigate);
        },
    });

    const registerMutation = useMutation({
        mutationFn: register,
        onSuccess: () => onRegisterSuccess(navigate),
    });

    const handleLogin = (values: LoginDto) => {
        mutation.mutate(values);
    };

    const handleRegister = (values: RegisterDto) => {
        registerMutation.mutate(values);
    };

    return { handleLogin, handleRegister };
};
