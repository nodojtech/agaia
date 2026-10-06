// Centralized editable config for Agaia landing.
// Cambia aquí el número de WhatsApp, los mensajes del banner, productos, etc.

export const WHATSAPP_NUMBER = "573000000000"; // formato internacional sin +
export const WHATSAPP_DEFAULT_MSG =
  "Hola, quiero recibir asesoría sobre los productos de Agaia.";

export const waLink = (msg: string = WHATSAPP_DEFAULT_MSG) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;

// Mensajes breves que rotan, uno a la vez, con pausa serena.
export const ANNOUNCEMENTS: string[] = [
  "Envío gratis desde $180.000",
  "Asesoría personalizada por WhatsApp",
  "Bienestar botánico para tus rituales diarios",
  "Regalos personalizados con intención",
];
