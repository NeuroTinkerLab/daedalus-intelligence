
document.addEventListener('DOMContentLoaded', () => {

    const translations = {
        it: {
            title: "Daedalus: Ecosistema di Intelligence Strategica",
            heroTitle: "Daedalus: Dove i Dati Diventano Decisioni.",
            heroSubtitle: "Una piattaforma IA avanzata che trasforma il rumore informativo globale in foresight strategico. Attualmente in fase di test pubblica.",
            heroButton: "Accedi all'Anteprima Gratuita",
            visionTitle: "La Nostra Visione",
            visionText: "Il mondo è complesso e interconnesso. Crediamo che le decisioni migliori, in ambito business e finanziario, nascano da una profonda comprensione delle relazioni nascoste tra gli eventi. Daedalus è nato per questo: per trovare il segnale nel rumore.",
            platformTitle: "Come Funziona la Piattaforma Daedalus",
            feature1Title: "Ingestione Dati a 360°",
            feature1Text: "Il nostro sistema scansiona costantemente centinaia di fonti informative globali.",
            feature2Title: "Creazione di un Knowledge Graph",
            feature2Text: "Gli eventi e le entità vengono mappati in un grafico di conoscenza dinamico, svelandone le connessioni.",
            feature3Title: "Analisi Causale e Predittiva",
            feature3Text: "Algoritmi proprietari e modelli IA analizzano il grafico per identificare cause, effetti e probabili sviluppi futuri.",
            feature4Title: "Sintesi Multi-Prospettiva",
            feature4Text: "L'analisi viene raffinata simulando diversi profili di esperti per fornire insight pertinenti e azionabili.",
            channelsTitle: "Anteprima Esclusiva: I Nostri Canali di Intelligence",
            channelsSubtitle: "In questa fase di test, rendiamo disponibili gratuitamente i risultati di quattro dei nostri analisti virtuali. È un'opportunità per vedere in azione la potenza di Daedalus e ricevere insight di alta qualità direttamente su Telegram.",
            ceoTitle: "CEO & Strategia Aziendale",
            ceoDescription: "Focus su M&A, rischi operativi, strategie aziendali e trend di business di alto livello.",
            investmentTitle: "Analista di Investimenti",
            investmentDescription: "Insight azionabili su mercati finanziari, asset class e opportunità di investimento.",
            geopoliticsTitle: "Analista Geopolitico",
            geopoliticsDescription: "Analisi delle relazioni internazionali, rischi politici e dinamiche di potere globali.",
            techTitle: "Analista Tecnologico",
            techDescription: "Insight su tecnologie emergenti, disruption di mercato e trend innovativi.",
            itChannel: "Canale IT",
            enChannel: "Canale EN",
            statusTitle: "Stato del Progetto",
            statusText: "Daedalus è una piattaforma proprietaria in continuo sviluppo. La fase di test attuale ci permette di perfezionare i nostri algoritmi e di validare la qualità delle nostre analisi. Il feedback degli utenti in questa fase è prezioso.",
            footerText: "Per informazioni o feedback sul progetto in questa fase di test, contattaci:",
        },
        en: {
            title: "Daedalus: Strategic Intelligence Ecosystem",
            heroTitle: "Daedalus: Where Data Becomes Decision.",
            heroSubtitle: "An advanced AI platform that transforms global information noise into strategic foresight. Currently in public testing phase.",
            heroButton: "Access the Free Preview",
            visionTitle: "Our Vision",
            visionText: "The world is complex and interconnected. We believe that the best decisions, in business and finance, are born from a deep understanding of the hidden relationships between events. Daedalus was created for this: to find the signal in the noise.",
            platformTitle: "How the Daedalus Platform Works",
            feature1Title: "360° Data Ingestion",
            feature1Text: "Our system constantly scans hundreds of global information sources.",
            feature2Title: "Knowledge Graph Creation",
            feature2Text: "Events and entities are mapped into a dynamic knowledge graph, revealing their connections.",
            feature3Title: "Causal & Predictive Analysis",
            feature3Text: "Proprietary algorithms and AI models analyze the graph to identify causes, effects, and likely future developments.",
            feature4Title: "Multi-Perspective Synthesis",
            feature4Text: "The analysis is refined by simulating different expert profiles to provide relevant, actionable insights.",
            channelsTitle: "Exclusive Preview: Our Intelligence Channels",
            channelsSubtitle: "During this testing phase, we are providing free access to the output of four of our virtual analysts. This is an opportunity to witness the power of Daedalus and receive high-quality insights directly on Telegram.",
            ceoTitle: "CEO & Corporate Strategy",
            ceoDescription: "Focus on M&A, operational risks, corporate strategies, and high-level business trends.",
            investmentTitle: "Investment Analyst",
            investmentDescription: "Actionable insights on financial markets, asset classes, and investment opportunities.",
            geopoliticsTitle: "Geopolitical Analyst",
            geopoliticsDescription: "Analysis of international relations, political risks, and global power dynamics.",
            techTitle: "Tech Analyst",
            techDescription: "Insights on emerging technologies, market disruptions, and innovation trends.",
            itChannel: "IT Channel",
            enChannel: "EN Channel",
            statusTitle: "Project Status",
            statusText: "Daedalus is a proprietary platform under continuous development. The current testing phase allows us to refine our algorithms and validate the quality of our analyses. User feedback during this phase is invaluable.",
            footerText: "For information or feedback on the project during this testing phase, contact us:",
        }
    };

    const langIt = document.getElementById('lang-it');
    const langEn = document.getElementById('lang-en');

    const setLanguage = (lang) => {
        document.documentElement.lang = lang;
        localStorage.setItem('daedalus-lang', lang);

        document.querySelectorAll('[data-lang-key]').forEach(element => {
            const key = element.getAttribute('data-lang-key');
            element.textContent = translations[lang][key];
        });

        if (lang === 'it') {
            langIt.classList.add('active');
            langEn.classList.remove('active');
        } else {
            langEn.classList.add('active');
            langIt.classList.remove('active');
        }
    };

    langIt.addEventListener('click', () => setLanguage('it'));
    langEn.addEventListener('click', () => setLanguage('en'));

    // Set initial language based on localStorage or default to English
    const initialLang = localStorage.getItem('daedalus-lang') || 'en';
    setLanguage(initialLang);

    // Intersection Observer for animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = `fadeIn 1s ease-out forwards`;
            } 
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.feature-card, .channel-card, .section-title, .text-muted, footer p, footer a').forEach(el => {
        observer.observe(el);
    });
});
