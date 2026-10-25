import food1 from '@/public/images/food-1.webp';
import food2 from '@/public/images/food-2.webp';
import food3 from '@/public/images/food-3.webp';
import food4 from '@/public/images/food-4.webp';
import food5 from '@/public/images/food-5.webp';
import food6 from '@/public/images/food-6.webp';
import food7 from '@/public/images/food-7.webp';
import food8 from '@/public/images/food-8.webp';
import food9 from '@/public/images/food-9.webp';
import food10 from '@/public/images/food-10.webp';
import food11 from '@/public/images/food-11.webp';
import food12 from '@/public/images/food-12.webp';
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
  // Keep filename order: food-1–6 on top, food-7–12 below.
  food: [
    { id: 1, src: food1, alt: ['Apresentação de sushi e sashimi', 'Sushi and sashimi presentation'] },
    { id: 2, src: food2, alt: ['Sashimi e pequenas entradas', 'Sashimi and small starters'] },
    { id: 3, src: food3, alt: ['Prato quente servido num wok', 'Hot dish served in a wok'] },
    { id: 4, src: food4, alt: ['Peixe laminado em prato de cerâmica', 'Sliced fish on a ceramic plate'] },
    { id: 5, src: food5, alt: ['Apresentação de atum com molho', 'Tuna presentation with sauce'] },
    { id: 6, src: food6, alt: ['Dumplings com molho e cebolinho', 'Dumplings with sauce and chives'] },
    { id: 7, src: food7, alt: ['Fatias de carne com molho e ervas', 'Sliced meat with sauce and herbs'] },
    { id: 8, src: food8, alt: ['Camarões com limão', 'Prawns with lemon'] },
    { id: 9, src: food9, alt: ['Rolos de salmão com cobertura vermelha', 'Salmon rolls with red topping'] },
    { id: 10, src: food10, alt: ['Massa salteada com camarão e legumes', 'Stir-fried noodles with prawns and vegetables'] },
    { id: 11, src: food11, alt: ['Rolos de sushi com morangos e molho', 'Sushi rolls with strawberries and sauce'] },
    { id: 12, src: food12, alt: ['Seleção de sushi com decoração roxa', 'Sushi selection with purple garnish'] },
  ],
};
