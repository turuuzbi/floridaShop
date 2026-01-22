"use client";

import { useState } from "react";
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
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
            <SignedOut>
              <SignInButton>
                <button className="text-black">log in</button>
              </SignInButton>
              <SignUpButton>
                <button className="bg-[#6c47ff] text-black rounded-full font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 cursor-pointer">
                  Sign Up
                </button>
              </SignUpButton>
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden ">
        <div className="relative w-full h-screen bg-black overflow-hidden flex items-center justify-center">
          {/* Top Left - Large Yellow Pansy */}
          <div
            className="absolute top-[5%] left-[8%] w-[280px] h-[280px]"
            style={{
              background:
                "radial-gradient(circle at 30% 40%, #f4d03f 0%, #e8b923 30%, #8b6914 60%, #2d1810 100%)",
              clipPath:
                "polygon(50% 0%, 70% 20%, 90% 15%, 85% 35%, 95% 55%, 75% 60%, 70% 80%, 50% 70%, 30% 80%, 25% 60%, 5% 55%, 15% 35%, 10% 15%, 30% 20%)",
              filter: "drop-shadow(0 10px 20px rgba(0,0,0,0.5))",
            }}
          >
            <div
              className="absolute inset-0 bg-gradient-to-br from-black/40 via-transparent to-transparent"
              style={{
                clipPath:
                  "polygon(50% 0%, 70% 20%, 90% 15%, 85% 35%, 95% 55%, 75% 60%, 70% 80%, 50% 70%, 30% 80%, 25% 60%, 5% 55%, 15% 35%, 10% 15%, 30% 20%)",
              }}
            />
          </div>

          {/* Top Center - Small Yellow Flowers with leaves */}
          <div className="absolute top-[8%] left-[40%]">
            <div
              className="w-[100px] h-[100px]"
              style={{
                background:
                  "radial-gradient(circle at 40% 40%, #f4d03f 0%, #d4a017 50%, #6b4423 100%)",
                clipPath:
                  "polygon(50% 10%, 61% 35%, 85% 35%, 65% 55%, 75% 80%, 50% 65%, 25% 80%, 35% 55%, 15% 35%, 39% 35%)",
              }}
            />
            {/* Green leaves */}
            <div className="absolute top-6 -right-12 w-20 h-8 bg-gradient-to-br from-[#4a6741] to-[#2d4028] rounded-full transform rotate-45" />
            <div className="absolute top-10 -right-16 w-16 h-6 bg-gradient-to-br from-[#3d5736] to-[#243020] rounded-full transform rotate-25" />
          </div>

          {/* Top Right - Purple Pansy */}
          <div
            className="absolute top-[10%] right-[25%] w-[180px] h-[180px]"
            style={{
              background:
                "radial-gradient(circle at 40% 40%, #5d3a7a 0%, #3d1f4d 50%, #1a0a24 100%)",
              clipPath:
                "polygon(50% 0%, 70% 20%, 90% 15%, 85% 35%, 95% 55%, 75% 60%, 70% 80%, 50% 70%, 30% 80%, 25% 60%, 5% 55%, 15% 35%, 10% 15%, 30% 20%)",
            }}
          />

          {/* Left - Large Pink Peony */}
          <div
            className="absolute top-[20%] left-[2%] w-[380px] h-[380px] rounded-full"
            style={{
              background:
                "radial-gradient(ellipse at 40% 30%, #ffc9d9 0%, #ff8fb3 20%, #ff6b9d 40%, #e84a7a 60%, #b83560 80%, #8b2847 100%)",
              filter: "drop-shadow(0 15px 30px rgba(0,0,0,0.6))",
            }}
          >
            <div
              className="absolute inset-0 rounded-full"
              style={{
                background:
                  "radial-gradient(circle at 60% 60%, rgba(255,255,255,0.3) 0%, transparent 40%)",
              }}
            />
            {/* Peony layers */}
            <div
              className="absolute top-[15%] left-[15%] w-[70%] h-[70%] rounded-full opacity-60"
              style={{
                background:
                  "radial-gradient(circle, #ffb3d9 0%, transparent 70%)",
              }}
            />
          </div>

          {/* Left Lower - Pink/White Striped Flower */}
          <div
            className="absolute top-[45%] left-[8%] w-[280px] h-[280px]"
            style={{
              background:
                "linear-gradient(135deg, #ffd6e8 0%, #ffffff 15%, #ffb3d9 30%, #ffffff 45%, #ffc9e0 60%, #ffffff 75%, #ffd6e8 100%)",
              clipPath:
                "polygon(50% 10%, 60% 30%, 80% 25%, 75% 45%, 90% 60%, 70% 65%, 65% 85%, 50% 75%, 35% 85%, 30% 65%, 10% 60%, 25% 45%, 20% 25%, 40% 30%)",
              filter: "drop-shadow(0 10px 25px rgba(0,0,0,0.5))",
            }}
          >
            <div className="absolute top-[40%] left-[40%] w-[20%] h-[20%] rounded-full bg-gradient-to-br from-[#ff6b9d] to-[#d4145a]" />
          </div>

          {/* Right Top - Butterfly */}
          <div
            className="absolute top-[15%] right-[15%] w-[180px] h-[140px]"
            style={{
              background:
                "linear-gradient(135deg, #d2691e 0%, #8b4513 30%, #654321 50%, #3d2817 100%)",
              clipPath:
                "polygon(50% 40%, 35% 20%, 15% 10%, 5% 25%, 10% 45%, 25% 50%, 30% 60%, 40% 55%, 50% 60%, 60% 55%, 70% 60%, 75% 50%, 90% 45%, 95% 25%, 85% 10%, 65% 20%)",
              filter: "drop-shadow(0 8px 15px rgba(0,0,0,0.6))",
            }}
          >
            {/* Butterfly patterns */}
            <div className="absolute top-[20%] left-[15%] w-[15%] h-[15%] rounded-full bg-white opacity-60" />
            <div className="absolute top-[20%] right-[15%] w-[15%] h-[15%] rounded-full bg-white opacity-60" />
          </div>

          {/* Right - Large Pink/White Hibiscus */}
          <div
            className="absolute top-[25%] right-[5%] w-[340px] h-[340px]"
            style={{
              background:
                "radial-gradient(ellipse at 50% 50%, #ffffff 0%, #ffe6f0 20%, #ffcce0 40%, #ff99cc 60%, #e84a7a 100%)",
              clipPath:
                "polygon(50% 15%, 65% 25%, 80% 20%, 85% 35%, 95% 50%, 85% 65%, 80% 80%, 65% 75%, 50% 85%, 35% 75%, 20% 80%, 15% 65%, 5% 50%, 15% 35%, 20% 20%, 35% 25%)",
              filter: "drop-shadow(0 12px 30px rgba(0,0,0,0.5))",
            }}
          >
            {/* Hibiscus center stamen */}
            <div className="absolute top-[35%] left-[35%] w-[30%] h-[30%]">
              <div className="absolute top-[30%] left-[30%] w-[40%] h-[40%] rounded-full bg-gradient-to-br from-[#ff6b9d] to-[#d4145a]" />
              <div className="absolute top-[20%] left-[35%] w-[8px] h-[15px] bg-[#ffeb3b] rounded-full" />
              <div className="absolute top-[25%] left-[50%] w-[8px] h-[15px] bg-[#ffeb3b] rounded-full" />
              <div className="absolute top-[35%] left-[60%] w-[8px] h-[15px] bg-[#ffeb3b] rounded-full" />
            </div>
          </div>

          {/* Bottom Left - White Flower */}
          <div
            className="absolute bottom-[8%] left-[22%] w-[240px] h-[240px]"
            style={{
              background:
                "radial-gradient(ellipse at 50% 50%, #ffffff 0%, #f5f5f5 50%, #e8e8e8 100%)",
              clipPath:
                "polygon(50% 20%, 60% 35%, 75% 30%, 80% 45%, 90% 55%, 80% 65%, 75% 75%, 60% 70%, 50% 80%, 40% 70%, 25% 75%, 20% 65%, 10% 55%, 20% 45%, 25% 30%, 40% 35%)",
            }}
          >
            <div className="absolute top-[42%] left-[42%] w-[16%] h-[16%] rounded-full bg-gradient-to-br from-[#ffeb3b] to-[#ffa726]" />
          </div>

          {/* Bottom Center - Red/Orange Spiky Flower */}
          <div
            className="absolute bottom-[5%] left-[48%] w-[200px] h-[200px]"
            style={{
              background:
                "radial-gradient(circle, #ff6347 0%, #ff4500 40%, #dc143c 100%)",
              clipPath:
                "polygon(50% 5%, 52% 25%, 60% 20%, 58% 30%, 70% 28%, 65% 38%, 78% 40%, 70% 48%, 80% 55%, 68% 58%, 75% 70%, 62% 68%, 65% 82%, 52% 75%, 50% 90%, 48% 75%, 35% 82%, 38% 68%, 25% 70%, 32% 58%, 20% 55%, 30% 48%, 22% 40%, 35% 38%, 30% 28%, 42% 30%, 40% 20%, 48% 25%)",
              filter: "drop-shadow(0 10px 20px rgba(0,0,0,0.5))",
            }}
          />

          {/* Bottom Right - Large Yellow Gerbera */}
          <div
            className="absolute bottom-[2%] right-[8%] w-[320px] h-[320px]"
            style={{
              background:
                "radial-gradient(circle, #ffeb3b 0%, #ffc107 30%, #ff9800 60%, #f57c00 100%)",
              clipPath:
                "polygon(50% 8%, 53% 28%, 58% 25%, 60% 32%, 65% 30%, 68% 37%, 73% 36%, 75% 43%, 80% 43%, 82% 50%, 85% 52%, 82% 58%, 80% 60%, 75% 62%, 73% 68%, 68% 68%, 65% 73%, 60% 72%, 58% 78%, 53% 76%, 50% 82%, 47% 76%, 42% 78%, 40% 72%, 35% 73%, 32% 68%, 27% 68%, 25% 62%, 20% 60%, 18% 58%, 15% 52%, 18% 50%, 20% 43%, 25% 43%, 27% 37%, 32% 36%, 35% 30%, 40% 32%, 42% 25%, 47% 28%)",
              filter: "drop-shadow(0 15px 35px rgba(0,0,0,0.6))",
            }}
          >
            <div className="absolute top-[42%] left-[42%] w-[16%] h-[16%] rounded-full bg-gradient-to-br from-[#8b4513] to-[#654321]" />
          </div>

          {/* Center Text */}
          <div className="relative z-10 text-center">
            <h1
              className="text-white text-7xl font-serif tracking-wider mb-4"
              style={{
                fontFamily: "Playfair Display, serif",
                letterSpacing: "0.1em",
              }}
            >
              KUROHANA PAINTED
            </h1>
            <h2
              className="text-white text-7xl font-serif tracking-wider mb-8"
              style={{
                fontFamily: "Playfair Display, serif",
                letterSpacing: "0.1em",
              }}
            >
              FLORALS COLLECTION
            </h2>
            <p
              className="text-white text-4xl font-serif tracking-widest"
              style={{
                fontFamily: "Playfair Display, serif",
                letterSpacing: "0.2em",
              }}
            >
              FREE
            </p>
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
