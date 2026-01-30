import {
    AdlHero,
    DocumentLibrary,
    PolicyAccordion,
    IncidentReporting,
} from './_components';
import { policyDocuments, policyItems } from './_data';

export default function PoliciesPage() {
    return (
        <main>
            <AdlHero />
            <DocumentLibrary documents={policyDocuments} />
            <PolicyAccordion policies={policyItems} />
            <IncidentReporting />
        </main>
    );
}
