import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import ConcernSection from '@/components/ConcernSection'
import FeaturesSection from '@/components/FeaturesSection'
import TrialSection from '@/components/TrialSection'
import ReasonsSection from '@/components/ReasonsSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import PricingSection from '@/components/PricingSection'
import FaqSection from '@/components/FaqSection'
import FinalCtaSection from '@/components/FinalCtaSection'
import Footer from '@/components/Footer'
import StickyMobileCta from '@/components/StickyMobileCta'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ConcernSection />
        <FeaturesSection />
        <TrialSection />
        <ReasonsSection />
        <TestimonialsSection />
        <PricingSection />
        <FaqSection />
        <FinalCtaSection />
      </main>
      <Footer />
      <StickyMobileCta />
    </>
  )
}
