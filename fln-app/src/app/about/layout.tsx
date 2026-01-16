import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Us | Female Lawyers Network",
    description: "Learn about the mission, vision, and the dedicated team behind the Female Lawyers Network (FLN) in Uganda and across Africa.",
    keywords: ["FLN About", "Female Lawyers Network Team", "Legal Empowerment Mission", "Women in Law Uganda"],
};

export default function AboutLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
