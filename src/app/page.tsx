"use client";
import { Avatar, Col, Layout, Row, Tag, Typography } from "antd";
import Image from "next/image";
import { LinkedinFilled, GithubFilled, FileFilled } from "@ant-design/icons";
import { Mansalva } from "next/font/google";
import Link from "next/link";
import { useEffect, useState } from "react";

const mansalva = Mansalva({ subsets: ["latin", "latin-ext"], weight: ["400"], variable: "--font-inder", display: "swap" });

const { Text } = Typography;

const styles = {
    layout: {
        backgroundColor: "#F1DEEE",
        width: "100%",
        minHeight: "150vh",
        overflow: "hidden",
        paddingLeft: 120,
        paddingRight: 120,
        marginTop: 70,
    },
    mobileLayout: {
        backgroundColor: "#F1DEEE",
        width: "100%",
        minHeight: "100vh",
        marginTop: 0,
        padding: 10,
    },
    containerName: {
        width: "100%",
        backgroundColor: "#FADCDC",
        height: 170,
        borderRadius: 20,
        boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
        justifyContent: "center",
    },
    containerMobileName: {
        width: "100",
        backgroundColor: "#FADCDC",
        height: 50,
        borderRadius: 20,
        boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
        justifyContent: "center",
        marginTop: 10,
    },
    containerSurName: {
        width: "100%",
        backgroundColor: "#E0C7EE",
        height: 170,
        borderRadius: 20,
        boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
        justifyContent: "center",
    },
    containerMobileSurName: {
        width: "100",
        backgroundColor: "#E0C7EE",
        height: 50,
        borderRadius: 20,
        boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
        justifyContent: "center",
        marginTop: 10,
    },
    containerBio: {
        width: "100%",
        backgroundColor: "#F8D5F8",
        height: 170,
        borderRadius: 20,
        boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
        justifyContent: "center",
    },
    containerMobileBio: {
        width: "100",
        backgroundColor: "#F8D5F8",
        height: 100,
        borderRadius: 20,
        boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
        justifyContent: "center",
        marginTop: 10,
    },
    containerSocial: {
        width: "100%",
        backgroundColor: "#E6C2BF",
        height: 170,
        borderRadius: 20,
        boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
        justifyContent: "center",
    },
    containerMobileSocial: {
        width: 120,
        backgroundColor: "#E6C2BF",
        height: 50,
        borderRadius: 20,
        boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
        justifyContent: "center",
        marginTop: 10,
    },
    containerPortOne: {
        backgroundColor: "#DBCDE3",
        width: "100%",
        height: "100%",
        borderRadius: 20,
        boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
    },
    containerPortTwo: {
        backgroundColor: "#D4D2F2",
        width: "100%",
        height: "100%",
        borderRadius: 20,
        boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
    },
    containerPortThree: {
        backgroundColor: "#E0E0F3",
        width: "100%",
        height: "100%",
        borderRadius: 20,
        boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
    },
};

export default function Home() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        window.addEventListener("resize", handleResize);
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    return (
        <>
            <Layout style={isMobile ? styles.mobileLayout : styles.layout}>
                {isMobile ? (
                    <>
                        <Row justify={"center"}>
                            <Col span={24}>
                                <Avatar size={100} icon={<Image src={"./images/Rynlapat_Khongsirikul_Profile.png"} alt="" width={100} height={100} />} />
                            </Col>
                            <Col span={16}>
                                <Layout style={styles.containerMobileName}>
                                    <Text className={mansalva.variable} style={{ textAlign: "center", fontSize: 20 }}>
                                        RYNLAPAT
                                    </Text>
                                </Layout>
                            </Col>
                            <Col span={16}>
                                <Layout style={styles.containerMobileSurName}>
                                    <Text className={mansalva.variable} style={{ textAlign: "center", fontSize: 20 }}>
                                        KHONGSIRIKUL
                                    </Text>
                                </Layout>
                            </Col>
                            <Col span={22}>
                                <Layout style={styles.containerMobileBio}>
                                    <Text style={{ textAlign: "center", fontSize: 12, padding: 10 }}>
                                        I am a qualified software engineer with two years of experience in developing and maintaining <br />
                                        web applications, mobile applications, <br />
                                        backend systems, and web design.
                                    </Text>
                                </Layout>
                            </Col>
                            <Col span={8}>
                                <Layout style={styles.containerMobileSocial}>
                                    <Row justify={"space-between"} style={{ padding: 10 }}>
                                        <Link href={"https://www.linkedin.com/in/rynlapat-khongsirikul-17584b2b5/"} target="_blank">
                                            <LinkedinFilled style={{ fontSize: 20, color: "black" }} />
                                        </Link>
                                        <Link href={"https://github.com/rynlapat"} target="_blank">
                                            <GithubFilled style={{ fontSize: 20, color: "black" }} />
                                        </Link>
                                        <Link href={"/files/Rynlapat_Khongsirikul_Resume.pdf"} target="_blank">
                                            <FileFilled style={{ fontSize: 20, color: "black" }} />
                                        </Link>
                                    </Row>
                                </Layout>
                            </Col>
                        </Row>
                        <Row style={{ marginTop: 20 }} gutter={8}>
                            <Col span={24} style={{ marginBottom: 10 }}>
                                <Layout style={styles.containerPortOne}>
                                    <Row style={{ padding: 20, height: "100%" }}>
                                        <Col span={24}>
                                            <Text style={{ fontSize: 16, fontWeight: "bold" }}>Human Resource System for Faculty of Humanities Kasetsart University</Text>
                                        </Col>
                                        <Col span={24}>
                                            <Text style={{ fontSize: 12 }}>
                                                This system is designed for staff members at the Faculty of Humanities, Kasetsart University. It can handle personnel data, department management, position management, work time logging, shift scheduling, remaining leave calculation, and leave approval
                                                requests. The system incorporates a Workflow Engine to streamline processes and utilize Auth0 for IAM.
                                            </Text>
                                        </Col>
                                        <Row align={"bottom"}>
                                            <Tag color="#73608B" bordered style={{ padding: 2, fontSize: 10 }}>
                                                Next.js , TypeScript , Ant Design , .NET , Auth0
                                            </Tag>
                                        </Row>
                                    </Row>
                                </Layout>
                            </Col>
                            <Col span={24} style={{ marginBottom: 10 }}>
                                <Layout style={styles.containerPortTwo}>
                                    <Row style={{ padding: 20, height: "100%" }}>
                                        <Col span={24}>
                                            <Text style={{ fontSize: 16, fontWeight: "bold" }}>BaanTU Mobile Application for Thammasat University</Text>
                                        </Col>
                                        <Col span={24}>
                                            <Text style={{ fontSize: 12 }}>
                                                This system is designed for Thammasat University as a mobile application. It features maintenance requests, cleaning requests, dormitory check-ins, sports booking, mailing, and university news notifications. Additionally, it displays daily PM 2.5
                                                levels.
                                            </Text>
                                        </Col>
                                        <Row align={"bottom"}>
                                            <Tag color="#60628B" bordered style={{ padding: 2, fontSize: 10 }}>
                                                Flutter , Dart
                                            </Tag>
                                        </Row>
                                    </Row>
                                </Layout>
                            </Col>
                            <Col span={24}>
                                <Layout style={styles.containerPortThree}>
                                    <Row style={{ padding: 20, height: "100%" }}>
                                        <Col span={24}>
                                            <Text style={{ fontSize: 16, fontWeight: "bold" }}>Classification Species of Betta Fish in Thailand Application using Artificial Intelligence</Text>
                                        </Col>
                                        <Col span={24}>
                                            <Text style={{ fontSize: 12 }}>
                                                This system is designed to classify Betta fish species in Thailand using advanced machine learning and deep learning techniques. Users can upload an image of a Betta fish, and the system will analyze it to identify the species accurately. The platform
                                                is accessible on both web and mobile applications.
                                            </Text>
                                        </Col>
                                        <Row align={"bottom"}>
                                            <Tag color="#A8BECA" bordered style={{ padding: 2, fontSize: 10 }}>
                                                Python , Flutter , Dart , Flask , MySQL
                                            </Tag>
                                        </Row>
                                    </Row>
                                </Layout>
                            </Col>
                        </Row>
                    </>
                ) : (
                    <>
                        <Row justify={"center"}>
                            <Col span={8}>
                                <Layout style={styles.containerName}>
                                    <Text className={mansalva.variable} style={{ textAlign: "center", fontSize: 45 }}>
                                        RYNLAPAT
                                    </Text>
                                </Layout>
                            </Col>
                            <Col span={8} style={{ display: "relative" }}>
                                <Avatar style={{ display: "absolute", top: "75%", left: "50%", transform: "translate(-50%, -50%) scale(1.25)" }} size={250} icon={<Image src={"./images/Rynlapat_Khongsirikul_Profile.png"} alt="" width={100} height={100} />} />
                            </Col>
                            <Col span={8}>
                                <Layout style={styles.containerSurName}>
                                    <Text className={mansalva.variable} style={{ textAlign: "center", fontSize: 45 }}>
                                        KHONGSIRIKUL
                                    </Text>
                                </Layout>
                            </Col>
                            <Col span={8}>
                                <Layout style={styles.containerBio}>
                                    <Text style={{ textAlign: "center", fontSize: 16, padding: 20 }}>
                                        I am a qualified software engineer with two years of experience in developing and maintaining <br />
                                        web applications, mobile applications, <br />
                                        backend systems, and web design.
                                    </Text>
                                </Layout>
                            </Col>
                            <Col span={8} />
                            <Col span={8}>
                                <Layout style={styles.containerSocial}>
                                    <Row justify={"space-between"} style={{ padding: 70 }}>
                                        <Link href={"https://www.linkedin.com/in/rynlapat-khongsirikul-17584b2b5/"} target="_blank">
                                            <LinkedinFilled style={{ fontSize: 60, color: "black" }} />
                                        </Link>
                                        <Link href={"https://github.com/rynlapat"} target="_blank">
                                            <GithubFilled style={{ fontSize: 60, color: "black" }} />
                                        </Link>
                                        <Link href={"/files/Rynlapat_Khongsirikul_Resume.pdf"} target="_blank">
                                            <FileFilled style={{ fontSize: 60, color: "black" }} />
                                        </Link>
                                    </Row>
                                </Layout>
                            </Col>
                        </Row>
                        <Row style={{ marginTop: 50 }} gutter={120}>
                            <Col span={8}>
                                <Layout style={styles.containerPortOne}>
                                    <Row style={{ padding: 20, height: "100%" }}>
                                        <Col span={24}>
                                            <Text style={{ fontSize: 20, fontWeight: "bold" }}>Human Resource System for Faculty of Humanities Kasetsart University</Text>
                                        </Col>
                                        <Col span={24}>
                                            <Text style={{ fontSize: 16 }}>
                                                This system is designed for staff members at the Faculty of Humanities, Kasetsart University. It can handle personnel data, department management, position management, work time logging, shift scheduling, remaining leave calculation, and leave approval
                                                requests. The system incorporates a Workflow Engine to streamline processes and utilize Auth0 for IAM.
                                            </Text>
                                        </Col>
                                        <Row align={"bottom"}>
                                            <Tag color="#73608B" bordered style={{ padding: 5, fontSize: 12 }}>
                                                Next.js , TypeScript , Ant Design , .NET , Auth0
                                            </Tag>
                                        </Row>
                                    </Row>
                                </Layout>
                            </Col>
                            <Col span={8}>
                                <Layout style={styles.containerPortTwo}>
                                    <Row style={{ padding: 20, height: "100%" }}>
                                        <Col span={24}>
                                            <Text style={{ fontSize: 20, fontWeight: "bold" }}>BaanTU Mobile Application for Thammasat University</Text>
                                        </Col>
                                        <Col span={24}>
                                            <Text style={{ fontSize: 16 }}>
                                                This system is designed for Thammasat University as a mobile application. It features maintenance requests, cleaning requests, dormitory check-ins, sports booking, mailing, and university news notifications. Additionally, it displays daily PM 2.5
                                                levels.
                                            </Text>
                                        </Col>
                                        <Row align={"bottom"}>
                                            <Tag color="#60628B" bordered style={{ padding: 5, fontSize: 12 }}>
                                                Flutter , Dart
                                            </Tag>
                                        </Row>
                                    </Row>
                                </Layout>
                            </Col>
                            <Col span={8}>
                                <Layout style={styles.containerPortThree}>
                                    <Row style={{ padding: 20, height: "100%" }}>
                                        <Col span={24}>
                                            <Text style={{ fontSize: 20, fontWeight: "bold" }}>Classification Species of Betta Fish in Thailand Application using Artificial Intelligence</Text>
                                        </Col>
                                        <Col span={24}>
                                            <Text style={{ fontSize: 16 }}>
                                                This system is designed to classify Betta fish species in Thailand using advanced machine learning and deep learning techniques. Users can upload an image of a Betta fish, and the system will analyze it to identify the species accurately. The platform
                                                is accessible on both web and mobile applications.
                                            </Text>
                                        </Col>
                                        <Row align={"bottom"}>
                                            <Tag color="#A8BECA" bordered style={{ padding: 5, fontSize: 12 }}>
                                                Python , Flutter , Dart , Flask , MySQL
                                            </Tag>
                                        </Row>
                                    </Row>
                                </Layout>
                            </Col>
                        </Row>
                    </>
                )}
            </Layout>
        </>
    );
}
