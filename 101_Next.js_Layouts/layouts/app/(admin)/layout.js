import localFont from "next/font/local";

export const metadata = {
    title: "Admin hehe",
    description: "admin hehe page",
};

export default function AdminLayout({ children }) {
    return (
        <>
            <span>Admin Navbar</span>
            {children}
        </>
    );
}
