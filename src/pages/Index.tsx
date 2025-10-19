import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import Icon from "@/components/ui/icon";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const Index = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [donateAmount, setDonateAmount] = useState([1000]);

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const servers = [
    {
      name: "Выживание",
      players: "142/200",
      description: "Классический режим выживания с экономикой и привилегиями",
      icon: "Pickaxe"
    },
    {
      name: "SkyBlock",
      players: "89/150",
      description: "Развивай свой остров в небесах и торгуй с другими игроками",
      icon: "Cloud"
    },
    {
      name: "Анархия",
      players: "67/100",
      description: "Никаких правил, полная свобода действий",
      icon: "Swords"
    },
    {
      name: "Creative",
      players: "34/100",
      description: "Режим творчества с неограниченными ресурсами",
      icon: "Palette"
    }
  ];

  const donatePackages = [
    {
      name: "VIP",
      price: "299₽",
      features: ["Цветной ник", "Приват до 5 регионов", "Доступ к /kit vip", "Скидка в магазине 10%"],
      color: "from-emerald-500 to-emerald-600"
    },
    {
      name: "PREMIUM",
      price: "599₽",
      features: ["Все из VIP", "Приват до 15 регионов", "Полёт в лобби", "Скидка 25%"],
      color: "from-emerald-400 to-emerald-500"
    },
    {
      name: "LEGEND",
      price: "1299₽",
      features: ["Все из PREMIUM", "Безлимитный приват", "/fly везде", "Скидка 50%"],
      color: "from-emerald-300 to-emerald-400"
    }
  ];

  const rules = [
    {
      title: "1. Читы и макросы",
      content: "Использование читов, x-ray, fly и любых модификаций дающих преимущество строго запрещено. Наказание: перманентный бан."
    },
    {
      title: "2. Уважение к игрокам",
      content: "Запрещены оскорбления, троллинг, спам и флуд в чате. Уважайте других участников сообщества."
    },
    {
      title: "3. Гриферство",
      content: "Ломать чужие постройки можно только на сервере 'Анархия'. На остальных серверах - бан от 7 дней."
    },
    {
      title: "4. Торговля и обман",
      content: "Обман при торговле, кража вещей из доверия запрещены. Администрация вернёт вещи и накажет нарушителя."
    },
    {
      title: "5. Реклама",
      content: "Реклама других серверов запрещена. Реклама своих проектов разрешена в специальном канале Discord."
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center animate-float">
              <Icon name="Box" className="text-white" size={24} />
            </div>
            <h1 className="text-2xl font-bold gradient-text">FOLLOWDOAP</h1>
          </div>
          
          <div className="hidden md:flex gap-6">
            <button 
              onClick={() => scrollToSection("home")}
              className={`transition-colors hover:text-primary ${activeSection === "home" ? "text-primary" : ""}`}
            >
              Главная
            </button>
            <button 
              onClick={() => scrollToSection("servers")}
              className={`transition-colors hover:text-primary ${activeSection === "servers" ? "text-primary" : ""}`}
            >
              Сервера
            </button>
            <button 
              onClick={() => scrollToSection("donate")}
              className={`transition-colors hover:text-primary ${activeSection === "donate" ? "text-primary" : ""}`}
            >
              Донат
            </button>
            <button 
              onClick={() => scrollToSection("rules")}
              className={`transition-colors hover:text-primary ${activeSection === "rules" ? "text-primary" : ""}`}
            >
              Правила
            </button>
          </div>

          <Button className="gradient-bg hover:opacity-90 transition-opacity">
            <Icon name="Users" className="mr-2" size={18} />
            Онлайн: 332
          </Button>
        </div>
      </nav>

      <section id="home" className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <div className="animate-fade-in">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 gradient-text">
              FOLLOWDOAP
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Лучший Minecraft сервер с уникальными режимами, стабильной работой и дружным комьюнити
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button size="lg" className="gradient-bg hover:opacity-90 transition-opacity text-lg px-8">
                <Icon name="Play" className="mr-2" size={20} />
                Играть сейчас
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 border-primary text-primary hover:bg-primary/10">
                <Icon name="MessageCircle" className="mr-2" size={20} />
                Discord
              </Button>
            </div>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto animate-slide-up">
            <Card className="bg-card/50 backdrop-blur border-primary/20 hover:border-primary/50 transition-all hover:scale-105">
              <CardHeader>
                <Icon name="Users" className="text-primary mb-2" size={32} />
                <CardTitle>332 игрока</CardTitle>
                <CardDescription>Онлайн прямо сейчас</CardDescription>
              </CardHeader>
            </Card>
            <Card className="bg-card/50 backdrop-blur border-primary/20 hover:border-primary/50 transition-all hover:scale-105">
              <CardHeader>
                <Icon name="Zap" className="text-primary mb-2" size={32} />
                <CardTitle>99.9% Uptime</CardTitle>
                <CardDescription>Стабильная работа 24/7</CardDescription>
              </CardHeader>
            </Card>
            <Card className="bg-card/50 backdrop-blur border-primary/20 hover:border-primary/50 transition-all hover:scale-105">
              <CardHeader>
                <Icon name="Shield" className="text-primary mb-2" size={32} />
                <CardTitle>DDoS защита</CardTitle>
                <CardDescription>Надёжная безопасность</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      <section id="servers" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-5xl font-bold text-center mb-4 gradient-text">Наши сервера</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">Выбери режим по душе</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {servers.map((server, index) => (
              <Card 
                key={index} 
                className="bg-card border-primary/20 hover:border-primary transition-all hover:scale-105 cursor-pointer group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon name={server.icon as any} className="text-white" size={24} />
                  </div>
                  <CardTitle className="text-2xl">{server.name}</CardTitle>
                  <CardDescription className="text-base">{server.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2 text-primary font-semibold">
                    <Icon name="Users" size={16} />
                    <span>{server.players}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="donate" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-5xl font-bold text-center mb-4 gradient-text">Донат</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">Поддержи сервер и получи крутые привилегии</p>
          
          <div className="mb-16 max-w-2xl mx-auto">
            <Card className="bg-card/50 backdrop-blur border-primary/30 p-8">
              <h3 className="text-2xl font-bold mb-4 text-center">Калькулятор донат-валюты</h3>
              <p className="text-center text-muted-foreground mb-6">
                Выбери сколько FOLLOW-коинов хочешь купить
              </p>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-lg">Количество коинов:</span>
                    <span className="text-3xl font-bold gradient-text">{donateAmount[0]}</span>
                  </div>
                  <Slider 
                    value={donateAmount}
                    onValueChange={setDonateAmount}
                    min={100}
                    max={10000}
                    step={100}
                    className="mb-4"
                  />
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>100</span>
                    <span>10 000</span>
                  </div>
                </div>
                <div className="bg-muted/50 rounded-lg p-6 text-center">
                  <p className="text-muted-foreground mb-2">К оплате:</p>
                  <p className="text-4xl font-bold gradient-text">{Math.round(donateAmount[0] * 0.8)}₽</p>
                  <p className="text-sm text-muted-foreground mt-2">1 коин = 0.8₽</p>
                </div>
                <Button className="w-full gradient-bg hover:opacity-90 transition-opacity h-14 text-lg">
                  <Icon name="CreditCard" className="mr-2" size={20} />
                  Пополнить баланс
                </Button>
              </div>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {donatePackages.map((pkg, index) => (
              <Card 
                key={index}
                className="bg-card border-primary/20 hover:border-primary transition-all hover:scale-105 overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`h-2 bg-gradient-to-r ${pkg.color}`}></div>
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-3xl mb-2">{pkg.name}</CardTitle>
                  <div className="text-5xl font-bold gradient-text mb-4">{pkg.price}</div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={18} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full gradient-bg hover:opacity-90 transition-opacity">
                    Купить
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="rules" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-5xl font-bold text-center mb-4 gradient-text">Правила сервера</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Прочитай внимательно, чтобы избежать бана
          </p>
          
          <Card className="bg-card/50 backdrop-blur border-primary/20">
            <CardContent className="p-6">
              <Accordion type="single" collapsible className="w-full">
                {rules.map((rule, index) => (
                  <AccordionItem key={index} value={`rule-${index}`}>
                    <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                      {rule.title}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                      {rule.content}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>

          <div className="mt-8 text-center">
            <p className="text-muted-foreground mb-4">
              Есть вопросы? Обратись к администрации в Discord
            </p>
            <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
              <Icon name="MessageCircle" className="mr-2" size={18} />
              Открыть Discord
            </Button>
          </div>
        </div>
      </section>

      <footer className="py-12 px-4 border-t border-border">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
              <Icon name="Box" className="text-white" size={24} />
            </div>
            <h3 className="text-2xl font-bold gradient-text">FOLLOWDOAP</h3>
          </div>
          <p className="text-muted-foreground mb-6">
            Лучший Minecraft сервер 2025
          </p>
          <div className="flex gap-4 justify-center">
            <Button variant="ghost" size="icon" className="hover:text-primary">
              <Icon name="MessageCircle" size={20} />
            </Button>
            <Button variant="ghost" size="icon" className="hover:text-primary">
              <Icon name="Youtube" size={20} />
            </Button>
            <Button variant="ghost" size="icon" className="hover:text-primary">
              <Icon name="Instagram" size={20} />
            </Button>
          </div>
          <p className="text-sm text-muted-foreground mt-8">
            © 2025 FOLLOWDOAP. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
