import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Advantages = () => {
  const advantages = [
    {
      icon: 'Truck',
      title: 'Прямые поставки',
      description: 'Работаем напрямую с производителями, что позволяет предлагать конкурентные цены',
    },
    {
      icon: 'BadgeCheck',
      title: 'Контроль качества',
      description: 'Все материалы проходят строгий контроль качества и имеют необходимые сертификаты',
    },
    {
      icon: 'Zap',
      title: 'Быстрая доставка',
      description: 'Собственный логистический отдел обеспечивает оперативную доставку по России',
    },
    {
      icon: 'Users',
      title: 'Техподдержка',
      description: 'Профессиональные консультации по подбору материалов и технологиям применения',
    },
    {
      icon: 'DollarSign',
      title: 'Гибкие условия',
      description: 'Индивидуальные условия для постоянных клиентов, скидки на объемные заказы',
    },
    {
      icon: 'FileText',
      title: 'Полный пакет документов',
      description: 'Предоставляем все необходимые документы, паспорта качества и сертификаты',
    },
  ];

  return (
    <section id="advantages" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-secondary mb-4">Наши преимущества</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Почему более 1000 компаний выбирают ПолимерКомплект в качестве надежного партнера
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => (
            <Card key={index} className="border-2 hover:border-primary transition-colors">
              <CardContent className="p-6">
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name={advantage.icon} size={28} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-secondary">{advantage.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{advantage.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-primary to-primary/80 rounded-2xl p-8 md:p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">Готовы начать сотрудничество?</h3>
          <p className="text-lg mb-6 opacity-90">
            Оставьте заявку, и наш менеджер свяжется с вами в течение 30 минут
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex items-center gap-2">
              <Icon name="Phone" size={20} />
              <span className="font-semibold">+7 (962) 565-86-66</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="Mail" size={20} />
              <span className="font-semibold">snab.konsalt@icloud.com</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Advantages;