// Centralized editable config for Agaia landing.
// Cambia aquí el número de WhatsApp, los mensajes del banner, productos, etc.

export const WHATSAPP_NUMBER = "573000000000"; // formato internacional sin +
export const WHATSAPP_DEFAULT_MSG =
  "Hola, quiero recibir asesoría sobre los productos de Agaia.";

export const waLink = (msg: string = WHATSAPP_DEFAULT_MSG) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;

export const ANNOUNCEMENTS: string[] = [
  "Envío gratis en compras desde $180.000",
  "Promociones especiales de temporada botánica",
  "Compra rituales completos y recibe beneficios",
  "Asesoría personalizada por WhatsApp",
  "Regalos personalizados disponibles",
  "Nuevos productos botánicos disponibles",
  "Descuentos especiales para distribuidores",
];
