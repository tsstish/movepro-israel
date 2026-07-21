import { MessageCircle, Phone } from "lucide-react";

const PHONE_NUMBER = "+972546745954";
const WHATSAPP_NUMBER = "972546745954";

const WHATSAPP_MESSAGE = encodeURIComponent(
  "Здравствуйте! Хочу обсудить переезд и получить расчёт."
);

export default function MobileStickyCTA() {
  return (
    <>
      <div className="h-[82px] lg:hidden" />

      <div className="fixed inset-x-0 bottom-0 z-50 px-3 pb-[calc(env(safe-area-inset-bottom)+8px)] lg:hidden">
        <div className="mx-auto flex max-w-md items-center gap-2 rounded-[24px] border border-white/70 bg-[#F8F4ED]/90 p-2 shadow-[0_-10px_32px_rgba(16,33,63,0.12)] backdrop-blur-xl">
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
            className="flex h-[52px] flex-1 items-center justify-center gap-2.5 rounded-[18px] bg-[#10213F] px-4 text-[15px] font-semibold text-white shadow-[0_12px_30px_rgba(16,33,63,0.18)] transition duration-300 ease-out active:scale-[0.98]"
          >
            <MessageCircle size={18} strokeWidth={1.8} />
            Написать
          </a>

          <a
            href={`tel:${PHONE_NUMBER}`}
            aria-label="Позвонить в MovePro Israel"
            className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-[18px] border border-white/80 bg-white/84 text-[#10213F] shadow-[0_10px_24px_rgba(16,33,63,0.08)] transition duration-300 ease-out active:scale-[0.96]"
          >
            <Phone size={18} strokeWidth={1.8} />
          </a>
        </div>
      </div>
    </>
  );
}