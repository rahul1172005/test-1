import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import HeroVisual from '../components/ui/HeroVisual';
import { HeroCards } from '../components/ui/HeroCards';
import { FeatureGrid } from '../components/ui/FeatureGrid';
import { BetterDatabaseSection } from '../components/ui/BetterDatabaseSection';
import { AISection } from '../components/ui/AISection';
import { TrustedSection } from '../components/ui/TrustedSection';

export const Home = () => {
    return (
        <div className="bg-background min-h-screen text-white selection:bg-primary/30 selection:text-white overflow-x-hidden">
            <Navbar />
            <HeroVisual />
            <HeroCards />
            <BetterDatabaseSection />
            <FeatureGrid />
            <AISection />
            <TrustedSection />

            <Footer />
        </div>
    );
};
