import type { Metadata } from 'next';
import { Navbar } from '@/components/Navbar';
import { ReservationWidget } from '@/components/ReservationWidget';

export const metadata: Metadata = {
  title: 'Reservas | Bay Marina',
  description: 'Reserve a sua mesa no Bay Marina, em Setúbal.',
};
export default function ReservationPage() {
  return <><Navbar reservation /><main id="main" className="reservation-page"><ReservationWidget /></main></>;
}
