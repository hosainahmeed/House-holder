import { NavigationMenuBar } from "@/components/common/NavigationMenuBar";
import Footer from "@/components/common/Footer";

export default function AppLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="flex flex-col min-h-screen">
            <NavigationMenuBar />
            <main className="grow">
                {children}
            </main>
            <Footer />
        </div>
    );
}
