import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface Product {
  id: number;
  name: string;
  category: string;
  description: string;
  price: string;
  inStock: boolean;
}

const products: Product[] = [
  {
    id: 1,
    name: 'Полиэтилен низкого давления (ПНД)',
    category: 'Полиэтилен',
    description: 'Высококачественный ПНД для производства труб, пленки и емкостей',
    price: 'По запросу',
    inStock: true,
  },
  {
    id: 2,
    name: 'Полиэтилен высокого давления (ПВД)',
    category: 'Полиэтилен',
    description: 'ПВД для производства пленки, пакетов и упаковочных материалов',
    price: 'По запросу',
    inStock: true,
  },
  {
    id: 3,
    name: 'Полипропилен (ПП)',
    category: 'Полипропилен',
    description: 'Полипропилен для литья изделий, производства пленки и волокон',
    price: 'По запросу',
    inStock: true,
  },
  {
    id: 4,
    name: 'Поливинилхлорид (ПВХ)',
    category: 'ПВХ',
    description: 'ПВХ для производства профилей, труб и строительных материалов',
    price: 'По запросу',
    inStock: false,
  },
  {
    id: 5,
    name: 'Полистирол (ПС)',
    category: 'Полистирол',
    description: 'Полистирол общего назначения для литьевых изделий',
    price: 'По запросу',
    inStock: true,
  },
  {
    id: 6,
    name: 'АБС-пластик',
    category: 'Технические пластики',
    description: 'АБС для производства корпусов, деталей автомобилей и бытовой техники',
    price: 'По запросу',
    inStock: true,
  },
  {
    id: 7,
    name: 'Поликарбонат (ПК)',
    category: 'Технические пластики',
    description: 'Прозрачный поликарбонат для строительства и светотехники',
    price: 'По запросу',
    inStock: true,
  },
  {
    id: 8,
    name: 'Полиамид (ПА)',
    category: 'Технические пластики',
    description: 'Конструкционный полиамид для производства деталей машин',
    price: 'По запросу',
    inStock: false,
  },
];

const Catalog = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Все категории');

  const categories = ['Все категории', ...Array.from(new Set(products.map((p) => p.category)))];

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'Все категории' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <section id="catalog" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-secondary mb-4">Каталог продукции</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Широкий ассортимент полимерных материалов для различных отраслей промышленности
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-8">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex-1 relative">
              <Icon name="Search" size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Поиск по названию или описанию..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <Card key={product.id} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <Badge variant="secondary" className="text-xs">
                    {product.category}
                  </Badge>
                  {product.inStock ? (
                    <Badge variant="default" className="bg-green-500 text-xs">
                      <Icon name="Check" size={12} className="mr-1" />
                      В наличии
                    </Badge>
                  ) : (
                    <Badge variant="outline" className="text-xs">
                      Под заказ
                    </Badge>
                  )}
                </div>
                <h3 className="text-lg font-semibold mb-2 text-secondary">{product.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{product.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-primary">{product.price}</span>
                  <Button size="sm">
                    <Icon name="ShoppingCart" size={16} className="mr-1" />
                    Заказать
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <Icon name="Search" size={48} className="mx-auto text-muted-foreground mb-4" />
            <p className="text-lg text-muted-foreground">Ничего не найдено. Попробуйте изменить параметры поиска.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Catalog;
