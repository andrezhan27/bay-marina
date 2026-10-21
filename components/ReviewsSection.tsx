'use client';
import { Star } from 'lucide-react';
import { reviews } from '@/lib/reviews';
import { useLanguage } from './LanguageProvider';

export function ReviewsSection() {
  const { t } = useLanguage();
  return (
    <section className="reviews-section section" id="avaliacoes">
      <div className="container">
        <div className="center-heading"><p className="eyebrow">{t.reviewLabel}</p><h2>{t.reviewTitle}</h2></div>
        <div className="reviews-container"><div className="review-grid">
          {reviews.map(review => (
            <article className="review-card" key={review.id}>
              <h3 className="review-name">{review.name}</h3>
              <div className="review-stars" role="img" aria-label={t.fiveStars}>
                {Array.from({ length: 5 }, (_, i) => <Star key={i} size={18} fill="currentColor" strokeWidth={0} aria-hidden="true" />)}
              </div>
              <blockquote lang="en">{review.text}</blockquote>
            </article>
          ))}
        </div></div>
      </div>
    </section>
  );
}
