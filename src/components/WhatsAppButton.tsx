import Icon from '@/components/ui/icon';

const WhatsAppButton = () => {
  const phoneNumber = '79625658666';
  const message = 'Здравствуйте! Хочу узнать подробнее о продукции Альфа Снаб';
  
  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg transition-all hover:scale-110 z-50"
      aria-label="Написать в WhatsApp"
    >
      <Icon name="MessageCircle" size={28} />
    </button>
  );
};

export default WhatsAppButton;
