import Icon from '@/components/ui/icon';

const Footer = () => {
  return (
    <footer className="bg-secondary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Icon name="Package" size={20} className="text-white" />
              </div>
              <span className="text-xl font-bold">Альфа Снаб</span>
            </div>
            <p className="text-white/80 text-sm">
              Более 1 года на рынке полимерных материалов
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Компания</h3>
            <ul className="space-y-2 text-sm text-white/80">
              <li><a href="#about" className="hover:text-white transition-colors">О компании</a></li>
              <li><a href="#catalog" className="hover:text-white transition-colors">Продукция</a></li>
              <li><a href="#advantages" className="hover:text-white transition-colors">Преимущества</a></li>
              <li><a href="#contacts" className="hover:text-white transition-colors">Контакты</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Контакты</h3>
            <ul className="space-y-2 text-sm text-white/80">
              <li className="flex items-center gap-2">
                <Icon name="Phone" size={16} />
                <span>+7 962 565-86-66</span>
              </li>
              <li className="flex items-center gap-2">
                <Icon name="Mail" size={16} />
                <span>snab.konsalt@icloud.com</span>
              </li>
              <li className="flex items-center gap-2">
                <Icon name="MapPin" size={16} />
                <span>Республика Татарстан, г. Набережные Челны, Советская 17</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Режим работы</h3>
            <ul className="space-y-2 text-sm text-white/80">
              <li>Пн-Пт: 9:00 - 18:00</li>
              <li>Сб-Вс: Выходной</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-white/60">
            © 2024 Альфа Снаб. Все права защищены.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-white/60 hover:text-white transition-colors">
              Политика конфиденциальности
            </a>
            <a href="#" className="text-white/60 hover:text-white transition-colors">
              Условия использования
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;