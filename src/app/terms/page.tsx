import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  MessageCircle,
  ShieldCheck,
  Truck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Условия использования",
  description:
    "Условия использования сайта MovePro Israel и общие правила обращения за услугой.",
  alternates: {
    canonical: "/terms",
  },
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#F4EFE7] px-5 py-8 text-[#101827]">
      <div className="mx-auto max-w-3xl">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-[#2B5D8C] transition hover:-translate-x-0.5"
        >
          <ArrowLeft size={17} />
          Вернуться на главную
        </Link>

        <article className="mt-6 rounded-[32px] border border-white/70 bg-white/70 p-6 shadow-[0_18px_45px_rgba(16,33,63,0.07)] backdrop-blur-xl sm:p-9">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#2B5D8C]">
            MovePro Israel
          </p>

          <h1 className="mt-3 text-[38px] font-semibold leading-[1.02] tracking-[-0.045em] text-[#10213F]">
            Условия использования
          </h1>

          <p className="mt-4 text-sm text-[#6B7280]">
            Последнее обновление: 20 июля 2026 года
          </p>

          <div className="mt-8 space-y-7 text-[15px] leading-7 text-[#4B5563]">
            <section>
              <h2 className="text-xl font-semibold text-[#10213F]">
                1. Назначение сайта
              </h2>

              <p className="mt-2">
                Сайт MovePro Israel предоставляет общую информацию об услугах
                перевозки, упаковки и организации переездов, а также позволяет
                связаться с нами по телефону или через WhatsApp.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#10213F]">
                2. Информация на сайте
              </h2>

              <p className="mt-2">
                Описания услуг, изображения и другие материалы на сайте носят
                информационный характер. Они не являются окончательным
                предложением, публичной офертой или гарантией конкретной цены,
                даты, состава команды или вида транспорта.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#10213F]">
                3. Расчёт стоимости
              </h2>

              <p className="mt-2">
                Стоимость перевозки определяется индивидуально после уточнения
                адресов, объёма вещей, этажей, наличия лифта, условий подъезда,
                необходимости упаковки, разборки, сборки и других деталей.
              </p>

              <p className="mt-2">
                Предварительная оценка может быть изменена, если фактические
                условия отличаются от информации, предоставленной при
                обращении.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#10213F]">
                4. Согласование услуги
              </h2>

              <p className="mt-2">
                Дата, время, маршрут, стоимость, состав работ и иные условия
                согласовываются непосредственно с клиентом до начала
                перевозки.
              </p>

              <p className="mt-2">
                Переписка в WhatsApp, телефонный разговор или другое
                подтверждение может использоваться для фиксации согласованных
                деталей.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#10213F]">
                5. Обязанности клиента
              </h2>

              <p className="mt-2">
                Клиент обязан предоставить достоверную информацию об объёме
                вещей, адресах, этажах, лифте, доступе к зданию, парковке,
                тяжёлых или нестандартных предметах и других условиях,
                способных повлиять на перевозку.
              </p>

              <p className="mt-2">
                Клиент также отвечает за законность перевозимых предметов и за
                предварительное уведомление о хрупких, ценных или требующих
                особого обращения вещах.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#10213F]">
                6. Упаковка и сохранность вещей
              </h2>

              <p className="mt-2">
                Объём упаковочных работ и используемые материалы согласовываются
                заранее. Если клиент самостоятельно упаковывает вещи, он несёт
                ответственность за качество такой упаковки, если иное не было
                отдельно согласовано.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#10213F]">
                7. Изменение или отмена заказа
              </h2>

              <p className="mt-2">
                Условия изменения даты, маршрута или отмены перевозки
                согласовываются индивидуально с учётом времени уведомления,
                уже заказанного транспорта, подготовленной команды и других
                фактически понесённых расходов.
              </p>

              <p className="mt-2">
                Настоящий раздел не ограничивает права потребителя,
                предоставленные применимым законодательством Израиля.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#10213F]">
                8. Сторонние сервисы
              </h2>

              <p className="mt-2">
                Сайт содержит ссылки на WhatsApp и телефонные сервисы.
                Использование таких сервисов регулируется их собственными
                условиями и политиками.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#10213F]">
                9. Ограничение ответственности сайта
              </h2>

              <p className="mt-2">
                Мы стараемся поддерживать информацию на сайте актуальной, но не
                гарантируем отсутствие технических ошибок, временной
                недоступности или неточностей.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#10213F]">
                10. Интеллектуальная собственность
              </h2>

              <p className="mt-2">
                Тексты, фирменные элементы, дизайн и изображения сайта не могут
                копироваться или использоваться в коммерческих целях без
                предварительного разрешения правообладателя.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#10213F]">
                11. Изменения условий
              </h2>

              <p className="mt-2">
                Условия могут обновляться при изменении работы сайта, состава
                услуг или применимых требований. Актуальная версия публикуется
                на этой странице.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#10213F]">
                12. Контакты
              </h2>

              <p className="mt-2">
                По вопросам, связанным с сайтом или условиями перевозки, можно
                обратиться по телефону или через WhatsApp.
              </p>
            </section>
          </div>

          <div className="mt-9 grid gap-3 sm:grid-cols-2">
            <a
              href="https://wa.me/972546745954?text=Здравствуйте! Хочу уточнить условия перевозки."
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#10213F] px-5 py-3 text-sm font-semibold text-white shadow-[0_14px_30px_rgba(16,33,63,0.14)] transition hover:-translate-y-0.5"
            >
              <MessageCircle size={17} />
              Написать в WhatsApp
            </a>

            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[#BFD2EA]/70 bg-white/70 px-5 py-3 text-sm font-semibold text-[#10213F] transition hover:-translate-y-0.5"
            >
              <Truck size={17} />
              На главную
            </Link>
          </div>

          <div className="mt-6 flex items-start gap-3 rounded-[22px] bg-[#F7F3EC] p-4">
            <ShieldCheck
              size={19}
              className="mt-0.5 shrink-0 text-[#2B5D8C]"
            />

            <p className="text-[13px] leading-5 text-[#6B7280]">
              Эти условия регулируют использование сайта. Индивидуальные
              условия конкретной перевозки согласовываются отдельно.
            </p>
          </div>
        </article>
      </div>
    </main>
  );
}