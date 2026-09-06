// lib/whatsapp.ts

interface OrderItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image?: string;
}

interface OrderDetails {
  customerName: string;
  customerPhone: string;
  customerEmail?: string;
  items: OrderItem[];
  total: number;
  address?: string;
}

// Admin WhatsApp Number (with country code, no + sign)
const ADMIN_WHATSAPP = '919876543210'; // Replace with actual admin number

export function generateWhatsAppMessage(order: OrderDetails): string {
  const { customerName, customerPhone, items, total, address, customerEmail } = order;
  
  // Product list
  let productList = '';
  items.forEach((item, index) => {
    productList += `${index + 1}. ${item.name} × ${item.quantity} = ₹${(item.price * item.quantity).toLocaleString()}\n`;
  });
  
  const message = `
🏥 *Geetanjali Health Care* - New Order
  
📋 *Order Details:*
----------------------------
👤 *Customer:* ${customerName}
📞 *Phone:* ${customerPhone}
${customerEmail ? `📧 *Email:* ${customerEmail}\n` : ''}
${address ? `📍 *Address:* ${address}\n` : ''}
----------------------------
🛒 *Items Ordered:*
${productList}
----------------------------
💰 *Total Amount:* ₹${total.toLocaleString()}
📅 *Date:* ${new Date().toLocaleString('en-IN')}
----------------------------
⏳ *Please contact customer for confirmation.*
  `.trim();
  
  return encodeURIComponent(message);
}

export function getWhatsAppLink(order: OrderDetails): string {
  const message = generateWhatsAppMessage(order);
  return `https://wa.me/${ADMIN_WHATSAPP}?text=${message}`;
}

// For simple product enquiry
export function getProductEnquiryLink(productName: string, productPrice: number): string {
  const message = encodeURIComponent(`
🏥 *Geetanjali Health Care* - Product Enquiry

🛒 *Product:* ${productName}
💰 *Price:* ₹${productPrice.toLocaleString()}

📋 *Customer wants to buy this product.*
  `.trim());
  
  return `https://wa.me/${ADMIN_WHATSAPP}?text=${message}`;
}