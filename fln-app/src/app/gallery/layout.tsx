import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Our Gallery | Female Lawyers Network",
    description: "Explore our collection of photos and highlights from FLN events, community outreaches, and conferences.",
    keywords: ["FLN Gallery", "Legal Event Photos", "Women in Law Highlights", "FLN Community Outreach"],
};

export default function GalleryLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
