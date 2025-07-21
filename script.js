document.addEventListener('DOMContentLoaded', function () {
    const langItBtn = document.getElementById('lang-it');
    const langEnBtn = document.getElementById('lang-en');

    const translations = {
        en: {
            site_title: 'Daedalus Intelligence',
            nav_brand: 'Daedalus Intelligence',
            hero_title: 'Strategic Intelligence for a Complex World',
            hero_subtitle: 'We are currently in the testing phase. A preview of our potential is available for free on our Telegram channels.',
            vision_title: 'Our Vision',
            vision_text: 'The world is complex and interconnected. We believe that the best decisions, in business and finance, arise from a deep understanding of the hidden relationships between events. Daedalus was born for this: to find the signal in the noise.',
            channels_title: 'Exclusive Preview: Our Intelligence Channels',
            channels_subtitle: 'During this testing phase, the results from our virtual analysts are available for free. It\'s an opportunity to see the power of Daedalus in action.',
            ceo_title: 'CEO & Corporate',
            geo_title: 'Geopolitics',
            invest_title: 'Investment',
            tech_title: 'Tech',
            status_title: 'Project Status',
            status_text: 'Daedalus is a proprietary platform in continuous development. The current testing phase allows us to refine our algorithms and validate the quality of our analysis. User feedback in this phase is invaluable.',
            contact_title: 'Get in Touch',
            contact_subtitle: 'For inquiries about pilot projects or to be notified about our commercial launch, please contact us.',
        },
        it: {
            site_title: 'Daedalus Intelligence',
            nav_brand: 'Daedalus Intelligence',
            hero_title: 'Intelligence Strategica per un Mondo Complesso',
            hero_subtitle: 'Siamo attualmente in fase di test. Un\'anteprima del nostro potenziale è disponibile gratuitamente sui nostri canali Telegram.',
            vision_title: 'La Nostra Visione',
            vision_text: 'Il mondo è complesso e interconnesso. Crediamo che le decisioni migliori, in ambito business e finanziario, nascano da una profonda comprensione delle relazioni nascoste tra gli eventi. Daedalus è nato per questo: per trovare il segnale nel rumore.',
            channels_title: 'Anteprima Esclusiva: I Nostri Canali di Intelligence',
            channels_subtitle: 'In questa fase di test, rendiamo disponibili gratuitamente i risultati dei nostri analisti virtuali. È un\'opportunità per vedere in azione la potenza di Daedalus.',
            ceo_title: 'CEO & Corporate',
            geo_title: 'Geopolitica',
            invest_title: 'Investimenti',
            tech_title: 'Tecnologia',
            status_title: 'Stato del Progetto',
            status_text: 'Daedalus è una piattaforma proprietaria in continuo sviluppo. La fase di test attuale ci permette di perfezionare i nostri algoritmi e di validare la qualità delle nostre analisi. Il feedback degli utenti in questa fase è prezioso.',
            contact_title: 'Contattaci',
            contact_subtitle: 'Per informazioni su progetti pilota o per essere avvisato del nostro lancio commerciale, non esitare a contattarci.',
        }
    };

    function setLanguage(lang) {
        document.documentElement.lang = lang;
        document.querySelectorAll('[data-lang-key]').forEach(element => {
            const key = element.getAttribute('data-lang-key');
            if (translations[lang][key]) {
                element.textContent = translations[lang][key];
            }
        });

        if (lang === 'it') {
            langItBtn.classList.remove('btn-outline-secondary');
            langItBtn.classList.add('btn-secondary');
            langEnBtn.classList.remove('btn-secondary');
            langEnBtn.classList.add('btn-outline-secondary');
        } else {
            langEnBtn.classList.remove('btn-outline-secondary');
            langEnBtn.classList.add('btn-secondary');
            langItBtn.classList.remove('btn-secondary');
            langItBtn.classList.add('btn-outline-secondary');
        }
        localStorage.setItem('language', lang);
    }

    langItBtn.addEventListener('click', () => setLanguage('it'));
    langEnBtn.addEventListener('click', () => setLanguage('en'));

    // Imposta la lingua salvata o default a EN
    const savedLang = localStorage.getItem('language') || 'en';
    setLanguage(savedLang);
});