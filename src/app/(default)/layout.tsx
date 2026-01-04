import { NavigationMenuBar } from "@/components/common/NavigationMenuBar";

export default function AppLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <NavigationMenuBar />
            {children}
        </>
    );
}
