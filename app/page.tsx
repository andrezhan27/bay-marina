import { getRestaurantLegalLinks } from '@/lib/legal';
import { Reveal } from '@/components/Reveal';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { EnvironmentGallery } from '@/components/EnvironmentGallery';
import { FoodMarquee } from '@/components/FoodMarquee';
import { ReviewsSection } from '@/components/ReviewsSection';
import { ContactSection } from '@/components/ContactSection';
import { ReservationCard } from '@/components/ReservationCard';
import { Footer } from '@/components/Footer';
export const revalidate = 300;

export default async function Home() {
  const legalLinks = await getRestaurantLegalLinks();
  return <><Navbar /><main id="main"><Hero /><Reveal><EnvironmentGallery /></Reveal><FoodMarquee /><Reveal><ReviewsSection /></Reveal><Reveal><ContactSection /></Reveal><ReservationCard /></main><Footer legalLinks={legalLinks} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'Restaurant', name: 'Bay Marina', servesCuisine: 'Sushi', description: 'Restaurante de sushi com buffet à la carte em Setúbal, Portugal.' }) }} /></>;
}
