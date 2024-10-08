import type { Metadata } from "next";
import { Inder } from "next/font/google";
import "./globals.css";
import StyledComponentsRegistry from "@/lib/AntdRegistry";
import { ConfigProvider } from "antd";

const inder = Inder({ subsets: ["latin", "latin-ext"], weight: ["400"], variable: "--font-inder", display: "swap" });

export const metadata: Metadata = {
    title: "Rynlapat Khongsirikul",
    description: "Rynlapat Khongsirikul's personal website",
};

const RootLayout = ({ children }: React.PropsWithChildren) => {
    return (
        <html lang="en" style={{ backgroundColor: "#F1DEEE" }} className={inder.variable}>
            <body>
                <StyledComponentsRegistry>
                    <ConfigProvider
                        theme={{
                            token: {
                                fontFamily: "var(--font-inder)",
                            },
                        }}>
                        {children}
                    </ConfigProvider>
                </StyledComponentsRegistry>
            </body>
        </html>
    );
};
export default RootLayout;
