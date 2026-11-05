import { ArrowLeft, MessageCircle } from "lucide-react";

export default function HebrewFinalCTASection() {
  return (
    <section
      id="estimate"
      className="scroll-mt-20 bg-[#F4EFE7] px-5 pb-8 pt-5 text-[#101827] lg:pb-12 lg:pt-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="overflow-hidden rounded-[28px] border border-[#10213F]/10 bg-[#E8EEF3] px-6 py-7 sm:px-8 lg:flex lg:items-center lg:justify-between lg:gap-10 lg:px-10 lg:py-9">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#2B5D8C]">
              מתכננים מעבר?
            </p>

            <h2 className="mt-2 max-w-2xl text-[28px] font-semibold leading-[1.04] tracking-[-0.04em] text-[#10213F] md:text-[38px]">
              ספרו לנו מה צריך להוביל ולאן
            </h2>

            <p className="mt-2 max-w-xl text-[13px] leading-5 text-[#657080]">
              נברר יחד את הפרטים ונמשיך בוואטסאפ.
            </p>
          </div>

          <a
            href="/whatsapp?lang=he"
            data-cta="final"
            className="mt-5 inline-flex min-h-[50px] w-full items-center justify-center gap-2.5 rounded-[17px] bg-[#10213F] px-6 py-3 text-[14px] font-semibold text-white shadow-[0_14px_32px_rgba(16,33,63,0.16)] transition hover:bg-[#17345E] active:scale-[0.99] sm:w-auto lg:mt-0 lg:shrink-0"
          >
            <MessageCircle size={17} strokeWidth={1.8} />
            שליחת הודעה בוואטסאפ
            <ArrowLeft size={16} strokeWidth={1.8} />
          </a>
        </div>
      </div>
    </section>
  );
}