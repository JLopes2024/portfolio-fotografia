export const siteConfig = {
  whatsappNumber: "5511946951394",
  whatsappMessage:
    "Olá, Larissa! Vi seu portfólio e gostaria de mais informações sobre os ensaios.",
  email: "lariap.contato@gmail.com",
  instagram: "https://www.instagram.com/larissaphotographer/?hl=pt-br",
} as const;

export function getWhatsAppUrl(
  message: string = siteConfig.whatsappMessage
) {
  const baseUrl = `https://wa.me/${siteConfig.whatsappNumber}`;

  if (!message) {
    return baseUrl;
  }

  return `${baseUrl}?text=${encodeURIComponent(message)}`;
}
