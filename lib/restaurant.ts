// Business details and reservation/map destinations supplied by the restaurant.
export const restaurant = {
  name: 'Bay Marina',
  location: 'Setúbal, Portugal',
  address: 'Tv. Nova do Mercado 2, 2900-584 Setúbal',
  phone: '935 609 996',
  phoneHref: 'tel:+351935609996',
  email: null as string | null,
  hours: { lunch: '12:00–15:00', dinner: '19:00–23:00' },
  reservationUrl: '/reservation',
  reservationWidgetUrl: 'https://reserve.intelis.pt/baymarina',
  deliveryUrl: 'https://glovoapp.com/pt/pt/setubal/stores/restaurante-bay-marina-set',
  mapsEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3121.502815317522!2d-8.895517824034718!3d38.52217607180653!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd1943001494b3a7%3A0x7a5afbb64c67f6bb!2sBay%20marina!5e0!3m2!1sen!2spt!4v1792601627540!5m2!1sen!2spt',
  directionsUrl: 'https://www.google.com/maps/place//data=!4m2!3m1!1s0xd1943001494b3a7:0x7a5afbb64c67f6bb',
  socialLinks: [{ label: 'Instagram', url: 'https://www.instagram.com/restaurantebaymarina' }],
};
export const reservationDestination = restaurant.reservationUrl;
// EUR per person, transcribed from the supplied pricing photograph.
export const buffetPrices = {
  weekdayLunch: { adult: 16.95, child: 9.95 },
  dinnerWeekendHoliday: { adult: 19.95, child: 10.95 },
};
