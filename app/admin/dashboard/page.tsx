import Link from "next/link";

export default function AdminDashboard() {
  return (
    <div className="w-full min-h-screen flex bg-white rounded-[70px] p-[50px]">
      <div className="w-full h-[500px] bg-[url(/img/bgdashboard.png)] bg-no-repeat bg-cover bg-center rounded-[20px] shadow-xl shadow-black/50">
        <div className="bg-black/40 w-full h-full text-white rounded-[20px] p-[50px] flex justify-between">
          <div className="h-full">
            <p className="text-[60px] font-semibold">Welcome back,</p>
            <p className="text-[90px] font-bold mt-[-30px]">Zulif.</p>
          </div>
          <div className="h-full flex flex-col justify-end gap-y-[20px]">
            <Link href={"/admin/games"} className="p-[10px] text-[20px] font-bold bg-[#10a7ff] border-[#017aff] border-[1px] rounded-[25px] text-center hover:bg-[#017aff] transition-all">View Games</Link>
            <Link href={"/admin/console"} className="p-[10px] text-[20px] font-bold bg-[#10a7ff] border-[#017aff] border-[1px] rounded-[25px] text-center hover:bg-[#017aff] transition-all">View Consoles</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
