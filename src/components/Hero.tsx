import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Hero = () => {
  const scrollToCatalog = () => {
    const element = document.getElementById('catalog');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="pt-32 pb-20 bg-gradient-to-br from-secondary via-secondary/95 to-primary/90">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Надежный поставщик полимерных материалов
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-2xl">
            Широкий ассортимент полимерной продукции для промышленных предприятий. 
            Прямые поставки, оптимальные цены, техническая поддержка.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90"
              onClick={scrollToCatalog}
            >
              Каталог продукции
              <Icon name="ArrowRight" size={20} className="ml-2" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white/10"
            >
              <Icon name="FileText" size={20} className="mr-2" />
              Прайс-лист
            </Button>
          </div>

          <div className="grid grid-cols-3 gap-8 mt-16 pt-16 border-t border-white/20">
            {[
              { icon: 'Package', value: '500+', label: 'Видов продукции' },
              { icon: 'Users', value: '1000+', label: 'Клиентов' },
              { icon: 'Award', value: '15 лет', label: 'На рынке' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <Icon name={stat.icon} size={32} className="text-white mx-auto mb-3" />
                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-white/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
