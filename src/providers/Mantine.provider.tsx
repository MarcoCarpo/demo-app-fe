import "@mantine/core/styles.css";

import { MantineProvider as MProvider } from "@mantine/core";
import { PropsWithChildren } from "react";

export default function MantineProvider({ children }: PropsWithChildren) {
    return <MProvider>{children}</MProvider>;
}
