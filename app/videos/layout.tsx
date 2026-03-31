import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Videos | Henry Bassey",
    description: "Technical deep dives, building in public, and software engineering insights from Henry Bassey.",
};

export default function VideosLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
