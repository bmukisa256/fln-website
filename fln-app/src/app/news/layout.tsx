import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Latest News & Insights | Female Lawyers Network",
    description: "Read the latest news, articles, and insights on gender equality, climate justice, and legal practice from the Female Lawyers Network.",
    keywords: ["Legal News Uganda", "Gender Equality Articles", "Climate Justice News", "FLN Insights"],
};

export default function NewsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
