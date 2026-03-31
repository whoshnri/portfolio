import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Writing | Henry Bassey",
    description: "Articles on software engineering, building in public, and the intersection of technology and culture.",
};

export default function BlogLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
