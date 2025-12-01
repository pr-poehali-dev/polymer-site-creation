import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const About = () => {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-secondary mb-4">О компании</h2>
          <p className="text-lg text-muted-foreground">
            ПолимерКомплект — ведущий поставщик полимерных материалов с 15-летним опытом работы 
            на российском рынке. Мы обеспечиваем промышленные предприятия качественной продукцией 
            и профессиональным сервисом.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="p-8">
            <Icon name="Target" size={48} className="text-primary mb-4" />
            <h3 className="text-2xl font-semibold mb-4">Наша миссия</h3>
            <p className="text-muted-foreground leading-relaxed">
              Обеспечивать промышленные предприятия качественными полимерными материалами, 
              способствуя развитию их производства через надежные поставки, конкурентные цены 
              и профессиональную техническую поддержку.
            </p>
          </Card>

          <Card className="p-8">
            <Icon name="Eye" size={48} className="text-primary mb-4" />
            <h3 className="text-2xl font-semibold mb-4">Наше видение</h3>
            <p className="text-muted-foreground leading-relaxed">
              Стать эталоном надежности и качества в сфере поставок полимерных материалов, 
              создавая долгосрочные партнерские отношения с клиентами на основе доверия 
              и взаимной выгоды.
            </p>
          </Card>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {[
            { icon: 'TrendingUp', title: 'Рост', desc: 'Стабильное развитие компании' },
            { icon: 'Shield', title: 'Надежность', desc: 'Гарантия качества продукции' },
            { icon: 'Clock', title: 'Оперативность', desc: 'Быстрая обработка заказов' },
            { icon: 'Handshake', title: 'Партнерство', desc: 'Индивидуальный подход' },
          ].map((item, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name={item.icon} size={28} className="text-primary" />
              </div>
              <h4 className="font-semibold mb-2">{item.title}</h4>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
