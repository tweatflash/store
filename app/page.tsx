import { Bricolage_Grotesque } from "next/font/google";
const bricolageGrotesque = Bricolage_Grotesque({
  subsets: ["latin"], 
  weight: ["400", "700"], // Choose your weights
});
export default function Home() {
  return (
    <main className={`${bricolageGrotesque.className} w-full h-[100%] `}>
    </main>
  )
}
