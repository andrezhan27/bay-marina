export type LegalLinks = {
  privacyPolicyUrl: string | null;
  termsAndConditionsUrl: string | null;
};

const emptyLinks: LegalLinks = { privacyPolicyUrl: null, termsAndConditionsUrl: null };

function httpUrl(value: unknown): string | null {
  if (typeof value !== 'string' || !value.trim()) return null;
  try {
    const parsed = new URL(value);
    return parsed.protocol === 'https:' || parsed.protocol === 'http:' ? parsed.href : null;
  } catch {
    return null;
  }
}

/** Read only Bay Marina's public legal fields; updates are revalidated every five minutes. */
export async function getRestaurantLegalLinks(): Promise<LegalLinks> {
  const baseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const publishableKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;
  if (!baseUrl || !publishableKey) return emptyLinks;

  try {
    const endpoint = new URL('/rest/v1/restaurants', baseUrl);
    endpoint.searchParams.set('id', 'eq.baymarina');
    endpoint.searchParams.set('select', 'privacy_policy_url,terms_and_conditions_url');
    endpoint.searchParams.set('limit', '1');
    const response = await fetch(endpoint, {
      headers: { apikey: publishableKey },
      next: { revalidate: 300 },
      signal: AbortSignal.timeout(5000),
    });
    if (!response.ok) return emptyLinks;
    const data: unknown = await response.json();
    if (!Array.isArray(data) || !data.length || typeof data[0] !== 'object' || data[0] === null) return emptyLinks;
    const row = data[0] as Record<string, unknown>;
    return {
      privacyPolicyUrl: httpUrl(row.privacy_policy_url),
      termsAndConditionsUrl: httpUrl(row.terms_and_conditions_url),
    };
  } catch {
    return emptyLinks;
  }
}
