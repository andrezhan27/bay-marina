export type Language = 'pt' | 'en';
const pt = {
  contactPhotoAlt: 'Pormenor da mesa com o menu e logótipo Bay Marina', fiveStars: 'Cinco estrelas',
  privacyPolicy: 'Política de Privacidade', termsAndConditions: 'Termos e Condições', legalUnavailable: 'Disponível em breve',
  home: 'Início', poweredBy: 'Powered by',
  nav: ['O Espaço', 'Sabores', 'Avaliações', 'Contactos'], book: 'Reservar mesa', menu: 'Ver menu', takeawayMenu: 'Menu takeaway',
  skip: 'Saltar para o conteúdo', openMenu: 'Abrir navegação', closeMenu: 'Fechar navegação', language: 'Idioma',
  eyebrow: 'SUSHI À LA CARTE · SETÚBAL', hero: 'À mesa, o tempo ganha outro sabor.', scroll: 'Descubra o Bay Marina',
  spaceLabel: '01 — O NOSSO ESPAÇO', spaceTitle: 'Um espaço para ficar.', spaceBody: 'Entre a luz, os detalhes e a boa companhia, há sempre um motivo para prolongar a conversa.', spaceNote: 'O cenário para os seus melhores momentos.',
  foodLabel: '02 — À SUA MESA', foodTitle: 'Uma mesa cheia de possibilidades.', foodBody: 'Sushi preparado ao seu pedido. Descubra o prazer de escolher, partilhar e repetir, ao seu ritmo, no nosso buffet à la carte.',
  photoPlaceholder: 'Fotografia do menu', coming: 'Em breve', photoNote: 'Preparado ao momento. Saboreado ao seu ritmo.', pause: 'Pausar movimento', resume: 'Retomar movimento', menuMissing: 'O menu estará disponível em breve.',
  reviewLabel: '03 — À CONVERSA', reviewTitle: 'Quem nos visita, conta melhor.', reviewNote: 'Em breve, as palavras de quem se sentou à nossa mesa.', reviewPlaceholder: 'Espaço para avaliação', reviewBody: 'Avaliação autêntica a adicionar.',
  contactLabel: '04 — ENCONTRE-NOS', contactTitle: 'Esperamos por si.', contactBody: 'Em Setúbal, uma mesa para abrandar e saborear.', address: 'Morada', hours: 'Horário', phone: 'Contacto', pending: 'Informação a confirmar', email: 'Email',
  reserveTitle: 'A sua próxima mesa está aqui.', reserveBody: 'Reserve a sua visita ao Bay Marina.', reserveNote: 'Reservas online em breve. Consulte os contactos.', mapPending: 'A nossa localização, em breve.', mapNote: 'Mapa disponível após confirmação da morada.', directions: 'Obter direções', mapTitle: 'Localização do Bay Marina',
  everyDay: 'Todos os dias', delivery: 'Delivery', deliveryLink: 'Pedir pela Glovo', bookingTitle: 'Reservas Bay Marina',
  pricingTitle: 'Buffet à la carte', weekdayLunch: 'Almoço · Segunda a sexta-feira', otherService: 'Jantar todos os dias · Almoço aos fins de semana e feriados', adult: 'Adulto', child: 'Crianças dos 4 aos 9 anos', perPerson: 'por pessoa', priceNote: 'IVA incluído. Bebidas e café não incluídos.',
  footer: 'Sushi à la carte. Momentos à beira da mesa.', rights: 'all rights reserved.',
};
export type Copy = typeof pt;
const en: Copy = {
  contactPhotoAlt: 'Table detail with the Bay Marina menu and logo', fiveStars: 'Five stars',
  privacyPolicy: 'Privacy Policy', termsAndConditions: 'Terms and Conditions', legalUnavailable: 'Available soon',
  home: 'Home', poweredBy: 'Powered by',
  nav: ['The Space', 'Food', 'Reviews', 'Contact'], book: 'Book a table', menu: 'View menu', takeawayMenu: 'Takeaway menu',
  skip: 'Skip to content', openMenu: 'Open navigation', closeMenu: 'Close navigation', language: 'Language',
  eyebrow: 'À LA CARTE SUSHI · SETÚBAL', hero: 'Take your time. Savour every moment.', scroll: 'Discover Bay Marina',
  spaceLabel: '01 — OUR SPACE', spaceTitle: 'A place to linger.', spaceBody: 'Between the light, the details and good company, there is always a reason to stay a little longer.', spaceNote: 'The setting for your favourite moments.',
  foodLabel: '02 — AT YOUR TABLE', foodTitle: 'A table full of possibilities.', foodBody: 'Sushi prepared to order. Enjoy choosing, sharing and discovering more, at your own pace, with our à la carte buffet.',
  photoPlaceholder: 'Menu photography', coming: 'Coming soon', photoNote: 'Prepared to order. Savoured at your own pace.', pause: 'Pause movement', resume: 'Resume movement', menuMissing: 'Our menu will be available soon.',
  reviewLabel: '03 — GOOD COMPANY', reviewTitle: 'Best told by our guests.', reviewNote: 'Soon, words from those who have shared our table.', reviewPlaceholder: 'Review placeholder', reviewBody: 'An authentic guest review will be added here.',
  contactLabel: '04 — FIND US', contactTitle: 'We look forward to welcoming you.', contactBody: 'In Setúbal, a table to slow down and savour the moment.', address: 'Address', hours: 'Opening hours', phone: 'Reservations & contact', pending: 'Details to be confirmed', email: 'Email',
  reserveTitle: 'Your next table awaits.', reserveBody: 'Plan your visit to Bay Marina.', reserveNote: 'Online reservations coming soon. See our contact details.', mapPending: 'Our location, coming soon.', mapNote: 'Map available once the address is confirmed.', directions: 'Get directions', mapTitle: 'Bay Marina location',
  everyDay: 'Every day', delivery: 'Delivery', deliveryLink: 'Order on Glovo', bookingTitle: 'Bay Marina Reservations',
  pricingTitle: 'À la carte buffet', weekdayLunch: 'Lunch · Monday to Friday', otherService: 'Dinner every day · Lunch on weekends and public holidays', adult: 'Adult', child: 'Children aged 4–9', perPerson: 'per person', priceNote: 'VAT included. Drinks and coffee not included.',
  footer: 'À la carte sushi. Moments to savour.', rights: 'all rights reserved.',
};
export const translations: Record<Language, Copy> = { pt, en };
export const sectionIds = ['espaco', 'sabores', 'avaliacoes', 'contactos'];
