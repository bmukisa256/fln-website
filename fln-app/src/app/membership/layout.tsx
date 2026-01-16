import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Join the Network | Female Lawyers Network",
    description: "Become a member of the Female Lawyers Network (FLN) and gain access to exclusive networking, mentorship, and professional development opportunities.",
    keywords: ["Join FLN", "Legal Membership Uganda", "Women Lawyers Community", "Mentorship for Lawyers"],
};

export default function MembershipLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
