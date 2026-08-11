import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  Keyboard,
  MessageCircle,
  MonitorSmartphone,
  Type,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Заявление о доступности",
  description:
    "Информация о доступности сайта MovePro Israel и способах сообщить о проблеме.",
  alternates: {
    canonical: "/accessibility",
  },
};

const accessibilityItems = [
  {
    icon: Keyboard,
    text: "Основные ссылки и кнопки доступны для навигации с клавиатуры.",
  },
  {
    icon: Type,
    text: "Используются читаемые размеры текста, контрастные цвета и понятная структура заголовков.",
  },
  {
    icon: MonitorSmartphone,
    text: "Сайт адаптирован для компьютеров, планшетов и мобильных устройств.",
  },
];

export default function AccessibilityPage() {
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
            Заявление о доступности
          </h1>

          <p className="mt-4 text-sm text-[#6B7280]">
            Последнее обновление: 20 июля 2026 года
          </p>

          <div className="mt-8 space-y-7 text-[15px] leading-7 text-[#4B5563]">
            <section>
              <h2 className="text-xl font-semibold text-[#10213F]">
                Наш подход
              </h2>

              <p className="mt-2">
                MovePro Israel стремится сделать сайт удобным и понятным для
                максимально широкого круга пользователей, включая людей с
                ограничениями зрения, моторики и другими особенностями.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#10213F]">
                Выполненные адаптации
              </h2>

              <div className="mt-4 space-y-3">
                {accessibilityItems.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.text}
                      className="flex items-start gap-3 rounded-[22px] bg-[#F7F3EC] p-4"
                    >
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[#E4F0FB] text-[#2B5D8C]">
                        <Icon size={18} />
                      </div>

                      <p className="pt-1 text-[14px] leading-6">
                        {item.text}
                      </p>
                    </div>
                  );
                })}
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#10213F]">
                Известные ограничения
              </h2>

              <p className="mt-2">
                Сайт находится в процессе развития и пока не проходил
                формальную проверку специалистом по доступности. Некоторые
                визуальные или интерактивные элементы могут работать
                недостаточно удобно с отдельными вспомогательными
                технологиями.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#10213F]">
                Сообщить о проблеме
              </h2>

              <p className="mt-2">
                Если вы столкнулись с трудностью при использовании сайта,
                сообщите, на какой странице и с каким элементом возникла
                проблема. Мы постараемся предоставить информацию альтернативным
                способом и исправить доступность элемента.
              </p>

              <p className="mt-3">
                Телефон:{" "}
                <a
                  href="tel:+972546745954"
                  className="font-semibold text-[#2B5D8C]"
                >
                  054-674-5954
                </a>
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[#10213F]">
                Альтернативный способ получения услуги
              </h2>

              <p className="mt-2">
                Получить консультацию, уточнить стоимость или обсудить переезд
                можно напрямую по телефону или через WhatsApp.
              </p>
            </section>
          </div>

          <a
            href="https://wa.me/972546745954?text=Здравствуйте! Хочу сообщить о проблеме доступности на сайте MovePro Israel."
            className="mt-9 inline-flex items-center gap-2 rounded-full bg-[#10213F] px-5 py-3 text-sm font-semibold text-white"
          >
            <MessageCircle size={17} />
            Сообщить через WhatsApp
          </a>
        </article>
      </div>
    </main>
  );
}