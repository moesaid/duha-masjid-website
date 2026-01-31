import { PantryHero } from './_components/PantryHero';
import { ServiceInfo } from './_components/ServiceInfo';
import { NeedsList } from './_components/NeedsList';
import { ImpactStats } from './_components/ImpactStats';

export default function FoodPantryPage() {
    return (
        <main className="min-h-screen bg-white">
            <PantryHero />
            <ImpactStats />
            <ServiceInfo />
            <NeedsList />
        </main>
    );
}
