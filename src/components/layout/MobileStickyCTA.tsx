import { MessageCircle, Phone } from "lucide-react";

export default function MobileStickyCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-white/55 bg-[#F4EFE7]/78 px-4 pb-[calc(env(safe-area-inset-bottom)+10px)] pt-3 shadow-[0_-18px_44px_rgba(16,33,63,0.12)] backdrop-blur-2xl lg:hidden">
      <div className="mx-auto grid max-w-md grid-cols-[1.25fr_0.85fr] gap-2.5">
        <a
          href="https://wa.me/972000000000?text=Здравствуйте! Хочу обсудить переезд и получить расчёт."
          className="flex items-center justify-center gap-2 rounded-full bg-[#10213F] px-4 py-3 text-[14px] font-semibold text-white shadow-[0_12px_28px_rgba(16,33,63,0.18)]"
        >
          <MessageCircle size={17} />
          Расчёт
        </a>

        <a
          href="tel:+972000000000"
          className="flex items-center justify-center gap-2 rounded-full border border-white/75 bg-white/72 px-4 py-3 text-[14px] font-semibold text-[#10213F] shadow-[0_10px_24px_rgba(16,33,63,0.06)]"
        >
          <Phone size={17} />
          Звонок
        </a>
      </div>
    </div>
  );
}