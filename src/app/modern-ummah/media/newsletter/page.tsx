
import { NewsletterHero } from './_components/NewsletterHero';
import { SubscribeConsole } from './_components/SubscribeConsole';
import { ArchiveList } from './_components/ArchiveList';

export default function NewsletterPage() {
    return (
        <main className="min-h-screen bg-slate-50">
            <NewsletterHero />
            <SubscribeConsole />
            <ArchiveList />
        </main>
    );
}

