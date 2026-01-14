"use client";

import React, { useState } from "react";
import {
  Heart,
  ShoppingCart,
  Search,
  Star,
  Users,
  Clock,
  Flower2,
  Sparkles,
} from "lucide-react";

const BloomeryWebsite = () => {
  const [activeFilter, setActiveFilter] = useState("Новинки");

  const bouquets = [
    {
      id: 1,
      name: "Lightness of the morning",
      image: "🌼",
      price: 2500,
      description: "A delicate bouquet of white and yellow flowers",
    },
    {
      id: 2,
      name: "White noise",
      image: "🌸",
      price: 3200,
      description: "Elegantly pink",
    },
    {
      id: 3,
      name: "Foggy morning",
      image: "💐",
      price: 2800,
      description: "A bouquet in blue and white tones",
    },
    {
      id: 4,
      name: "Cold",
      image: "🌺",
      price: 3500,
      description: "Stylish composition of cool shades",
    },
  ];

  const features = [
    {
      title: "Авторский стиль",
      description:
        "Каждый букет создается с учетом последних трендов флористики",
    },
    {
      title: "Свежие цветы",
      description:
        "Ежедневная доставка свежих цветов от проверенных поставщиков",
    },
    {
      title: "Быстрая доставка",
      description: "Доставка в день заказа по Москве и области",
    },
    {
      title: "Эстетика во всем",
      description: "Продуманная упаковка и оформление каждого букета",
    },
  ];

  const packages = [
    { name: "Персонализированная", price: "290 ₽" },
    { name: "Средняя доставка", price: "от 450 ₽" },
    { name: "Индивидуальная упаковка", price: "от 300 ₽" },
    { name: "Дополнения к букету", price: "от 600 ₽" },
    { name: "Ароматическая бумага", price: "250 ₽" },
  ];

  return (
    <div className="min-h-screen bg-[#edddec]">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-gray-900">Florida</div>
            <nav className="hidden md:flex gap-8">
              <a
                href="#"
                className="text-gray-700 hover:text-purple-600 transition"
              >
                Home
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-purple-600 transition"
              >
                Catalog
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-purple-600 transition"
              >
                About Us
              </a>
            </nav>
            <div className="flex items-center gap-4">
              <button className="p-2 hover:bg-purple-50 rounded-full transition">
                <Search className="w-5 h-5 text-gray-600" />
              </button>
              <button className="p-2 hover:bg-purple-50 rounded-full transition">
                <Heart className="w-5 h-5 text-gray-600" />
              </button>
              <button className="p-2 hover:bg-purple-50 rounded-full transition">
                <ShoppingCart className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden ">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                <div>
                  A bouquet shop that sells <br></br> Plushie Bouquets
                </div>
              </div>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                We reveal the beauty of nature in every bouquet. We create
                arrangements that convey emotions and create special moments.
              </p>
              <button className="bg-gray-900 text-white px-8 py-4 rounded-full hover:bg-gray-800 transition transform hover:scale-105 shadow-lg">
                Посмотреть новинки сезона
              </button>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-purple-200 to-purple-400 rounded-3xl p-8 transform rotate-3 hover:rotate-0 transition duration-500">
                <div className="text-9xl">🌷</div>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white p-6 rounded-2xl shadow-xl">
                <div className="flex items-center gap-3">
                  <Flower2 className="w-8 h-8 text-purple-500" />
                  <div>
                    <p className="font-semibold text-gray-900">
                      Premium flowers
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-gradient-to-br from-purple-50 to-white p-12 rounded-3xl">
              <div className="flex items-center gap-4 mb-6">
                <Sparkles className="w-6 h-6 text-purple-500" />
                <Flower2 className="w-6 h-6 text-purple-400" />
                <Sparkles className="w-6 h-6 text-purple-300" />
              </div>
              <p className="text-xl text-gray-700 leading-relaxed">
                At Bloomery, we collect not just flowers, but moods. The
                lightness of a morning, the warmth of a meeting, the thrill of
                recognition—each arrangement has its own character.
              </p>
            </div>
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Галерея настроения
                <br />
                Bloomery
              </h2>
              {features.slice(0, 2).map((feature, index) => (
                <div
                  key={index}
                  className="p-6 bg-purple-50 rounded-2xl hover:bg-purple-100 transition"
                >
                  <h3 className="font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Bouquets Gallery */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-4xl font-bold text-gray-900">
              Bloomery Mood Gallery
            </h2>
          </div>

          <div className="flex gap-4 mb-8 overflow-x-auto pb-4">
            {["New items", "Classic", "Wedding Arrangements"].map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 rounded-full whitespace-nowrap transition ${
                  activeFilter === filter
                    ? "bg-purple-500 text-white"
                    : "bg-white text-gray-700 hover:bg-purple-50"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {bouquets.map((bouquet) => (
              <div
                key={bouquet.id}
                className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition duration-300"
              >
                <div className="bg-gradient-to-br from-purple-100 to-purple-200 h-64 flex items-center justify-center text-8xl transform group-hover:scale-110 transition duration-500">
                  {bouquet.image}
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-xl text-gray-900 mb-2">
                    {bouquet.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {bouquet.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-gray-900">
                      {bouquet.price} $
                    </span>
                    <button className="bg-gray-900 text-white px-6 py-2 rounded-full hover:bg-purple-600 transition">
                      В корзину
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">
            Почему стоит выбрать
            <br />
            именно наши букеты?
          </h2>

          <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
            <div className="relative">
              <div className="bg-gradient-to-br from-purple-200 to-purple-300 rounded-full w-80 h-80 mx-auto flex items-center justify-center text-9xl transform hover:rotate-12 transition duration-500">
                🌷
              </div>
            </div>
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-12">
            Больше, чем просто букет
          </h2>
          <div className="bg-white rounded-3xl p-8 shadow-lg">
            <div className="space-y-4">
              {packages.map((pkg, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center p-4 hover:bg-purple-50 rounded-xl transition"
                >
                  <div>
                    <h3 className="font-semibold text-gray-900">{pkg.name}</h3>
                    <p className="text-sm text-gray-500">
                      Дополнительные услуги для вашего заказа
                    </p>
                  </div>
                  <span className="font-bold text-xl text-gray-900">
                    {pkg.price}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-16 bg-gradient-to-br from-purple-100 to-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Больше 500 поводов сделанных
            <br />
            красивыми вместе с <span className="text-purple-600">Bloomery</span>
          </h2>
          <p className="text-gray-600 mb-12">
            Присоединяйтесь к нашему сообществу
          </p>

          <div className="flex justify-center gap-8 items-center flex-wrap">
            <div className="flex items-center gap-3 bg-white px-6 py-3 rounded-full shadow-md">
              <Users className="w-5 h-5 text-purple-500" />
              <span className="font-semibold">500+ клиентов</span>
            </div>
            <div className="flex items-center gap-3 bg-white px-6 py-3 rounded-full shadow-md">
              <Star className="w-5 h-5 text-yellow-500" />
              <span className="font-semibold">4.9 рейтинг</span>
            </div>
            <div className="flex items-center gap-3 bg-white px-6 py-3 rounded-full shadow-md">
              <Clock className="w-5 h-5 text-purple-500" />
              <span className="font-semibold">Доставка за 2 часа</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-purple-600 to-purple-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-3xl font-bold mb-4">Bloomery</h3>
              <p className="text-purple-200">
                Искусство создавать настроение через цветы
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Каталог</h4>
              <ul className="space-y-2 text-purple-200">
                <li>
                  <a href="#" className="hover:text-white transition">
                    Новинки
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Свадебные
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Сезонные
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Информация</h4>
              <ul className="space-y-2 text-purple-200">
                <li>
                  <a href="#" className="hover:text-white transition">
                    О нас
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Доставка
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Контакты
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Подписка</h4>
              <p className="text-purple-200 mb-4">
                Получайте новости и специальные предложения
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Email"
                  className="flex-1 px-4 py-2 rounded-full text-gray-900"
                />
                <button className="bg-white text-purple-600 px-6 py-2 rounded-full hover:bg-purple-100 transition">
                  →
                </button>
              </div>
            </div>
          </div>
          <div className="border-t border-purple-500 pt-8 text-center text-purple-200">
            <p>© 2024 Bloomery. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default BloomeryWebsite;
