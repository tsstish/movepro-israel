import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Политика конфиденциальности",
  description:
    "Политика конфиденциальности сайта MovePro Israel.",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#F4EFE7] px-5 py-8 text-[#101827]">
      <div className="mx-auto max-w-3xl">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-[#2B5D8C]"
        >
          <ArrowLeft size={17} />
          Вернуться на главную
        </Link>

        <article className="mt-6 rounded-[32px] border border-white/70 bg-white/70 p-6 shadow-[0_18px_45px_rgba(16,33,63,0.07)] backdrop-blur-xl sm:p-9">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#2B5D8C]">
            MovePro Israel
          </p>

          <h1 className="mt-3 text-[38px] font-semibold leading-[1.02] tracking-[-0.045em] text-[#10213F]">
            Политика конфиденциальности
          </h1>

          <p className="mt-4 text-sm text-[#6B7280]">
            Последнее обновление: 20 июля 2026 года
          </p>

          <div className="mt-8 space-y-7 text-[15px] leading-7 text-[#4B5563]">
            <section>
              <h2 className="text-xl font-semibold text-[#10213F]">
                1. Общая информация
              </h2>
              <p className="mt-2">
                MovePro Israel уважает конфиденциальность посетителей сайта.
                Настоящая политика объясняет, какая информация может
                обрабатываться при использовании сайта и обращении к нам.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#10213F]">
                2. Какие данные мы получаем
              </h2>
              <p className="mt-2">
                На сайте нет формы регистрации или личного кабинета. Когда вы
                самостоятельно связываетесь с нами через WhatsApp или по
                телефону, мы можем получить предоставленные вами контактные
                данные и информацию, необходимую для обсуждения перевозки:
                адреса, объём вещей, дату и другие детали заказа.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#10213F]">
                3. Для чего используются данные
              </h2>
              <p className="mt-2">
                Информация используется только для ответа на обращение,
                подготовки расчёта, согласования деталей перевозки и дальнейшей
                коммуникации по заказу.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#10213F]">
                4. Сторонние сервисы
              </h2>
              <p className="mt-2">
                При переходе в WhatsApp обработка информации также регулируется
                условиями и политикой конфиденциальности WhatsApp. Сайт может
                размещаться на инфраструктуре стороннего хостинг-провайдера,
                который технически обрабатывает стандартные данные подключения,
                необходимые для работы сайта.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#10213F]">
                5. Передача информации
              </h2>
              <p className="mt-2">
                Мы не продаём персональные данные. Информация может передаваться
                только в объёме, необходимом для организации перевозки, работы
                технических сервисов или выполнения требований закона.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#10213F]">
                6. Срок хранения
              </h2>
              <p className="mt-2">
                Информация хранится только столько, сколько необходимо для
                обработки обращения, организации услуги и выполнения
                применимых обязательств.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#10213F]">
                7. Обращения по вопросам конфиденциальности
              </h2>
              <p className="mt-2">
                Чтобы уточнить, изменить или удалить предоставленную информацию,
                свяжитесь с нами по телефону или через WhatsApp.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#10213F]">
                8. Изменения политики
              </h2>
              <p className="mt-2">
                Политика может обновляться при изменении работы сайта,
                подключении новых сервисов или требований законодательства.
                Актуальная версия публикуется на этой странице.
              </p>
            </section>
          </div>

          <a
            href="https://wa.me/972546745954?text=Здравствуйте! У меня вопрос по политике конфиденциальности сайта."
            className="mt-9 inline-flex items-center gap-2 rounded-full bg-[#10213F] px-5 py-3 text-sm font-semibold text-white"
          >
            <MessageCircle size={17} />
            Связаться в WhatsApp
          </a>
        </article>
      </div>
    </main>
  );
}