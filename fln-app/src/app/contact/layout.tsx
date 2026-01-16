import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact Us | Female Lawyers Network",
    description: "Get in touch with the Female Lawyers Network (FLN). We are here to answer your questions and provide more information about our network.",
    keywords: ["Contact FLN", "Female Lawyers Network Uganda Address", "Legal Network Phone Number"],
};

export default function ContactLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
