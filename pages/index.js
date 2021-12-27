import Center from "../src/components/Center";
import Sidebar from "../src/components/Sidebar";

export default function Home() {
  return (
    <div className="bg-black h-screen overflow-hidden">
      <main className="flex">
        {/* Sidebar */}
        <Sidebar />
        {/* Center */}
        <Center />
      </main>
      <div>{/* Player */}</div>
    </div>
  );
}
