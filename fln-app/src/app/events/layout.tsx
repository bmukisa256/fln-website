import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Events & Workshops | Female Lawyers Network",
    description: "Stay updated with upcoming and past events, workshops, and symposiums hosted by the Female Lawyers Network.",
    keywords: ["Legal Events Uganda", "Lawyer Workshops", "FLN Events", "Women in Law Symposium"],
};

export default function EventsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
