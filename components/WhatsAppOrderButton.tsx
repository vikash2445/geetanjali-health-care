'use client';

import { Phone } from 'lucide-react';

interface WhatsAppOrderButtonProps {
  product: {
    id: number;
    name: string;
    price: number;
    image?: string;
    description?: string;
    category?: string;
  };
  className?: string;
}

export default function WhatsAppOrderButton({ 
  product, 
  className = ''
}: WhatsAppOrderButtonProps) {
  
  const handleWhatsAppOrder = () => {
    // Generate product details message
    const message = encodeURIComponent(`
🏥 *Geetanjali Health Care* - Product Order

🛒 *Product:* ${product.name}
💰 *Price:* ₹${product.price.toLocaleString()}
${product.category ? `📂 *Category:* ${product.category}` : ''}
${product.description ? `📝 *Description:* ${product.description}` : ''}
🔗 *Product ID:* #${product.id}

📋 *Customer wants to purchase this product.*
    `.trim());

    // Admin WhatsApp number (from env)
    const adminNumber = process.env.NEXT_PUBLIC_ADMIN_WHATSAPP || '919876543210';
    
    // Open WhatsApp
    window.open(`https://wa.me/${adminNumber}?text=${message}`, '_blank');
  };

  return (
    <button
      onClick={handleWhatsAppOrder}
      className={`inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all duration-200 font-medium text-sm ${className}`}
    >
      <Phone className="w-4 h-4" />
      Buy on WhatsApp
    </button>
  );
}