import {
    HeroSlider,
    WelcomeSection,
    ServicesGrid,
    EventsList,
    DonationSection,
    NewsletterBand,
} from './_components';

export default function HeritagePage() {
    const templateId = 'heritage';

    return (
        <>
            <HeroSlider templateId={templateId} />
            <WelcomeSection templateId={templateId} />
            <ServicesGrid templateId={templateId} />
            <EventsList templateId={templateId} />
            <DonationSection templateId={templateId} />
            <NewsletterBand templateId={templateId} />
        </>
    );
}
