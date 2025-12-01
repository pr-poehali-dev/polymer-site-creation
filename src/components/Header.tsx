import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Header = () => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-border shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <Icon name="Package" size={24} className="text-white" />
            </div>
            <span className="text-2xl font-bold text-secondary">Альфа Снаб</span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            {[
              { id: 'home', label: 'Главная' },
              { id: 'about', label: 'О компании' },
              { id: 'catalog', label: 'Продукция' },
              { id: 'advantages', label: 'Преимущества' },
              { id: 'contacts', label: 'Контакты' },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  activeSection === item.id ? 'text-primary' : 'text-foreground'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <Button className="hidden md:flex">
            <Icon name="Phone" size={18} className="mr-2" />
            Связаться
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;