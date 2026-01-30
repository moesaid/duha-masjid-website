
import { LiveHero } from './_components/LiveHero';
import { StreamPlayer } from './_components/StreamPlayer';
import { ScheduleSidebar } from './_components/ScheduleSidebar';

export default function LivePage() {
    return (
        <main className="min-h-screen bg-slate-50/50">
            <LiveHero />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
                <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
                    {/* Main Stage */}
                    <div className="lg:col-span-2">
                        <StreamPlayer />

                        {/* Stream Notes / Additional Info could go here */}
                        <div className="mt-8 p-6 bg-amber-50 rounded-2xl border border-amber-100">
                            <h3 className="font-bold text-amber-900 mb-2">Broadcast Notes</h3>
                            <p className="text-amber-800/80 text-sm">
                                If the stream disconnects, please refresh the page. Jumu'ah streams begin at 12:45 PM.
                            </p>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div>
                        <ScheduleSidebar />
                    </div>
                </div>
            </div>
        </main>
    );
}

