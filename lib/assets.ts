import space1 from '@/public/images/space-1.webp';
import space2 from '@/public/images/space-2.webp';
import space3 from '@/public/images/space-3.webp';
import space4 from '@/public/images/space-4.webp';
import space5 from '@/public/images/space-5.webp';
import space6 from '@/public/images/space-6.webp';
import space7 from '@/public/images/space-7.webp';
import space8 from '@/public/images/space-8.webp';
import contactImage from '@/public/images/contact-image.webp';

export const assets = {
  logo: '/images/logo.webp', hero: space1, contact: contactImage,
  // Filename order: 1–3 / 4–5 / 6–8. Originals remain untouched.
  spaces: [
    { id: 1, src: space1, alt: ['Sala com cadeiras verdes e iluminação dourada', 'Dining room with green chairs and golden lighting'] },
    { id: 2, src: space2, alt: ['Mesas preparadas na sala principal', 'Laid tables in the main dining room'] },
    { id: 3, src: space3, alt: ['Vista da sala e dos detalhes verdes', 'Dining room and greenery'] },
    { id: 4, src: space4, alt: ['Mesa entre estantes de garrafas e mármore', 'Table framed by bottle displays and marble'] },
    { id: 5, src: space5, alt: ['Pormenor do candeeiro de vidro', 'Glass pendant lighting detail'] },
    { id: 6, src: space6, alt: ['Recanto com sofá azul e estrutura dourada', 'Blue booth with a golden frame'] },
    { id: 7, src: space7, alt: ['Mesa junto à janela com luz natural', 'Window-side table in natural light'] },
    { id: 8, src: space8, alt: ['Perspetiva das mesas e dos espelhos', 'Tables and mirrored interior'] },
  ],
  food: [
    { id: 1, src: '/images/food-1.webp', alt: ['Apresentação de sushi e sashimi', 'Sushi and sashimi presentation'] },
    { id: 2, src: '/images/food-2.webp', alt: ['Sashimi e pequenas entradas', 'Sashimi and small starters'] },
    { id: 3, src: '/images/food-3.webp', alt: ['Seleção de rolos de sushi', 'Selection of sushi rolls'] },
    { id: 4, src: '/images/food-4.webp', alt: ['Peixe laminado em prato de cerâmica', 'Sliced fish on a ceramic plate'] },
    { id: 5, src: '/images/food-5.webp', alt: ['Apresentação de atum com molho', 'Tuna presentation with sauce'] },
    { id: 6, src: '/images/food-6.webp', alt: ['Peças de sushi com cobertura vermelha', 'Sushi pieces with red topping'] },
    { id: 7, src: '/images/food-7.webp', alt: ['Rolos de sushi com morangos', 'Sushi rolls with strawberries'] },
    { id: 8, src: '/images/food-8.webp', alt: ['Camarões com limão', 'Prawns with lemon'] },
  ],
};
