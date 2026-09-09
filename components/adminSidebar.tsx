// "use client"
// import Link from "next/link";

// interface AdminSidebarProps {
//     title?: string
//     children?: React.ReactNode;
// }

// export function AdminSidebar({ title, children }: AdminSidebarProps) {
//     return (
//         <div className="fixed flex">
//             <div className="w-[200px] flex justify-center min-h-screen">
//                 <div className="flex flex-col">
//                     <div className="p-[10px]">
//                         <Link href={"/admin/dashboard"} className="">Dashboard</Link>
//                     </div>
//                 </div>
//             </div>
//             <div>
//                 <p className="text-[35px] font-bold">{title}</p>
//                 <div className="">
//                     {children}
//                 </div>
//             </div>
//         </div>
//     )
// }

"use client"
import { ReactNode, useState } from "react"
import Link from "next/link";

type sidebarProps = {
    children: ReactNode;
    title: String;
};

export default function AdminSidebar({ children, title }: sidebarProps) {
    const [show, setShow] = useState(false)

    return (
        <>
            {show == false &&
                <div className="fixed flex flex-row items-center ml-[30px] mt-[30px] z-999">
                    <button onClick={() => setShow(true)} className="border-[3px] border-red-900 rounded-[5px] mr-[15px]">
                        <img src={"../img/menu.png"} className="w-[30px] mx-[7px] my-[3px]" />
                    </button>

                </div>}



            <div className={`transition-all fixed top-0 inline-flex h-screen z-999 ${show ? "translate-x-0" : "-translate-x-full"} duration-400`}>
                <div className="self-start bg-black/35 backdrop-blur-3xl h-full shadow-[0px_0px_15px_rgb(150,150,150)]">
                    <button onClick={() => setShow(false)} className="border-[3px] border-red-900 rounded-[5px] ml-[30px] mt-[30px]">
                        <img src={"../img/cancelw.png"} className="w-[30px] mx-[7px] my-[3px]" />
                    </button>
                    <div className="flex flex-col mx-[30px] my-[30px] font-bold text-[30px] text-center text-white">
                        <Link href={"/"} onClick={() => setShow(false)} className="my-[5px] px-[10px] p-[5px] rounded-[15px] hover:bg-red-900 transition-all duration-300">Home</Link>
                        <Link href={"/competencies"} onClick={() => setShow(false)} className="my-[5px] p-[5px] px-[10px] rounded-[15px] hover:bg-red-900 transition-all duration-300">Competencies</Link>
                        <Link href={"/profession"} onClick={() => setShow(false)} className="my-[5px] p-[5px] px-[10px] rounded-[15px] hover:bg-red-900 transition-all duration-300">Profession</Link>
                    </div>
                </div>
            </div>

            <div className="px-[50px] pb-[50px] pt-0">
                <p className="font-bold text-[30px] text-center my-[25px]">{title}</p>
                {children}
            </div>
        </>
    )
}