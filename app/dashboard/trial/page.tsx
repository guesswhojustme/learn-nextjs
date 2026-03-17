import Link from "next/link";

export default function Trial() {
    return (
        <div>
            <img className="w-full h-[300]" src="https://img.olympics.com/images/image/private/t_social_share_thumb/f_auto/primary/momhllweruehw0ud2m2r" alt="" />
            <h1 className="font-bold mt-4">Blog Header</h1>

            <div className="flex justify-center items-center gap-4">
                <div className="w-full bg-red-500 h-[75] flex justify-center items-center cursor-pointer">
                    <Link href="/invoices">Majo</Link>
                </div>
                <div className="w-full bg-red-500 h-[75] flex justify-center items-center cursor-pointer">
                    <p>Right page</p>
                </div>
            </div>
        </div>
    );
}