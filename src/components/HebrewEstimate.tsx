"use client";
import { useState } from "react";
import { ArrowLeft, MessageCircle } from "lucide-react";
const types = ["דירה / בית", "משרד", "רהיטים / מכשירי חשמל", "כמה פריטים"];
export default function HebrewEstimate() {
  const [type, setType] = useState(types[0]);
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [floorFrom, setFloorFrom] = useState("");
  const [floorTo, setFloorTo] = useState("");
  const params = new URLSearchParams({ lang: "he", cta: "quick-estimate", type });
  if(from.trim()) params.set("from",from.trim());
  if(to.trim()) params.set("to",to.trim());
  if(floorFrom.trim()) params.set("floorFrom",floorFrom.trim());
  if(floorTo.trim()) params.set("floorTo",floorTo.trim());
  const field = (label:string,value:string,set:(val:string)=>void,placeholder:string) => <label className="block min-w-0"><span className="mb-1.5 block text-xs font-medium text-[#536174]">{label}</span><input dir="auto" className="h-12 w-full min-w-0 rounded-xl border border-[#10213F]/15 bg-white/80 px-3 text-sm outline-none focus:border-[#2B5D8C]" placeholder={placeholder} value={value} onChange={e=>set(e.target.value)}/></label>;
  return <section id="quick-estimate" className="mx-auto max-w-7xl px-5 py-6 sm:py-10"><div className="grid gap-6 rounded-[28px] border border-white/70 bg-white/60 p-5 shadow-lg sm:p-8 lg:grid-cols-[0.8fr_1.2fr]">
    <div><p className="text-sm font-semibold text-[#2B5D8C]">הצעת מחיר</p><h2 className="mt-2 text-3xl font-semibold leading-tight sm:text-4xl">ספרו לנו על ההובלה שלכם</h2><p className="mt-4 text-sm leading-7 text-[#536174]">ממלאים כמה פרטים וממשיכים לשיחה בוואטסאפ. אפשר לצרף תמונות או סרטון קצר של החפצים.</p></div>
    <div><div className="mb-4 grid grid-cols-2 gap-2 sm:grid-cols-4">{types.map(t=><button key={t} type="button" onClick={()=>setType(t)} className={`min-h-12 rounded-xl border px-2 text-xs font-semibold ${type===t?"border-[#2B5D8C] bg-[#EAF3FB] text-[#10213F]":"border-[#10213F]/15 bg-white/70 text-[#536174]"}`}>{t}</button>)}</div>
    <div className="grid grid-cols-2 gap-3">{field("מאיפה?",from,setFrom,"חיפה")}{field("לאן?",to,setTo,"הקריות")}{field("קומה / מעלית בכתובת המוצא",floorFrom,setFloorFrom,"קומה 3, יש מעלית")}{field("קומה / מעלית ביעד",floorTo,setFloorTo,"קומה 1, בלי מעלית")}</div>
    <a href={`/whatsapp?${params.toString()}`} data-cta="he-quick-estimate" className="mt-4 flex min-h-14 items-center justify-center gap-2 rounded-2xl bg-[#10213F] px-4 text-center text-sm font-semibold text-white"><MessageCircle size={19}/> המשך לקבלת הצעה בוואטסאפ <ArrowLeft size={17}/></a>
    </div></div></section>;
}
