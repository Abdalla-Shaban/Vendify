import Sidebar from "@/components/layouts/Sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex-1 flex gap-5">
      <Sidebar />
      {children}
    </div>
  );
}
