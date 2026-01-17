import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// --- TRADUÇÕES COLADAS DIRETAMENTE AQUI PARA EVITAR ERROS DE ARQUIVO ---

const resources = {
    pt: {
        translation: {
            navbar: {
                materials: "Materiais",
                tech: "Tecnologia",
                services: "Serviços",
                cta: "Cotar Agora"
            },
            hero: {
                badge: "H2D Systems v4.0",
                title_main: "Engenharia",
                title_gradient: "Materializada.",
                description: "Do CAD à peça final em compósitos de alta performance. Câmaras de 350°C para imprimir o impossível.",
                cta_primary: "Iniciar Projeto",
                cta_secondary: "Ver Materiais",
                stat_quote: "Cotação",
                stat_temp: "Temp. Hotend",
                stat_quality: "Qualidade",
                float_card_label: "Material",
                float_card_value: "Carbon Fiber",
                img_label: "Produção Ativa",
                img_desc: "Impressão de Polímeros Avançados"
            },
            materials: {
                header_title: "Catálogo de",
                header_highlight: "Materiais Avançados.",
                header_desc: "Selecione a categoria e visualize as opções disponíveis para sua aplicação.",
                btn_datasheet: "Ver tabela de propriedades",
                recommended: "Recomendado",
                general: {
                    title: "Prototipagem Rápida",
                    desc: "Materiais de excelente custo-benefício e acabamento visual para validação de forma e maquetes.",
                    items: [
                        { name: "PLA Premium", desc: "Ótimo acabamento superficial para modelos visuais. Fácil impressão." },
                        { name: "PETG Translúcido", desc: "Boa resistência mecânica e leve flexibilidade. Ideal para recipientes." },
                        { name: "TPU (Flex A95)", desc: "Elastômero com propriedades de borracha. Para vedações e amortecedores." }
                    ]
                },
                engineering: {
                    title: "Grau de Engenharia",
                    desc: "Polímeros técnicos robustos para substituir peças finais, suportando calor, impacto e atrito.",
                    items: [
                        { name: "ABS Industrial", desc: "Padrão para peças duráveis. Boa resistência térmica (até 85°C)." },
                        { name: "ASA UV-Resist", desc: "O 'ABS para área externa'. Não degrada nem amarela sob o sol." },
                        { name: "PC (Policarbonato)", desc: "Extrema resistência a impacto e alta temperatura (110°C+)." },
                        { name: "Nylon PA12/PA6", desc: "Tenacidade excepcional, baixo atrito e resistência química." }
                    ]
                },
                advanced: {
                    title: "Alta Performance",
                    desc: "O ápice da manufatura aditiva. Compósitos reforçados e superpolímeros para ambientes extremos.",
                    items: [
                        { name: "Carbon Fiber (PA-CF)", desc: "Nylon reforçado com fibra de carbono. Rigidez estrutural máxima." },
                        { name: "Glass Fiber (PA-GF)", desc: "Estabilidade dimensional superior e isolamento elétrico/térmico." },
                        { name: "PEEK / PPS", desc: "Substituição de metal. Resiste a químicos agressivos, fogo e 200°C+." }
                    ]
                }
            },
            why: {
                title: "Engenharia Aditiva",
                title_highlight: "de Precisão",
                subtitle: "Superamos as limitações da impressão 3D convencional com hardware industrial e controle de processo rigoroso.",
                items: [
                    { title: "Câmara Aquecida 80°C", desc: "Ambiente controlado que elimina empenamento (warping) em peças grandes de ABS e ASA." },
                    { title: "Orçamento em 24h", desc: "Receba análise técnica e preço rapidamente." },
                    { title: "Isotropia Z-Axis", desc: "Fusão química de camadas superior, garantindo resistência mecânica em todas as direções." },
                    { title: "Materiais Reais", desc: "Processamos PEEK, Carbon Fiber e Nylon sem tensões internas." }
                ]
            },
            tech: {
                badge: "H2D Tech Specs",
                title: "Domínio Térmico",
                title_highlight: "Extremo.",
                desc: "Impressão 3D de verdade exige controle. Nossa câmara aquecida ativa garante que polímeros como ABS e Nylon tenham a mesma resistência mecânica da injeção plástica.",
                chart_monitor: "MONITORAMENTO EM TEMPO REAL",
                chart_stability: "Estabilidade do Extrusor",
                chart_stable: "Estável",
                items: [
                    { title: "Hotend All-Metal", desc: "Derrete PEEK e Ultem sem esforço." },
                    { title: "Câmara Aquecida", desc: "Zero warping em peças grandes." },
                    { title: "Bico Endurecido", desc: "Imprime Fibra de Carbono por milhares de horas." }
                ]
            }
        }
    },
    en: {
        translation: {
            navbar: {
                materials: "Materials",
                tech: "Technology",
                services: "Services",
                cta: "Get Quote"
            },
            hero: {
                badge: "H2D Systems v4.0",
                title_main: "Engineering",
                title_gradient: "Materialized.",
                description: "From CAD to final part in high-performance composites. 350°C chambers to print the impossible.",
                cta_primary: "Start Project",
                cta_secondary: "View Materials",
                stat_quote: "Quote",
                stat_temp: "Hotend Temp",
                stat_quality: "Quality",
                float_card_label: "Material",
                float_card_value: "Carbon Fiber",
                img_label: "Active Production",
                img_desc: "Advanced Polymer Printing"
            },
            materials: {
                header_title: "Catalog of",
                header_highlight: "Advanced Materials.",
                header_desc: "Select a category to view available options for your application.",
                btn_datasheet: "View datasheet",
                recommended: "Recommended",
                general: {
                    title: "Rapid Prototyping",
                    desc: "Excellent cost-benefit materials with great visual finish for shape validation.",
                    items: [
                        { name: "PLA Premium", desc: "Great surface finish for visual models. Easy printing." },
                        { name: "Translucent PETG", desc: "Good mechanical resistance and slight flexibility. Ideal for containers." },
                        { name: "TPU (Flex A95)", desc: "Elastomer with rubber properties. For seals and dampers." }
                    ]
                },
                engineering: {
                    title: "Engineering Grade",
                    desc: "Robust technical polymers to replace end-use parts, withstanding heat, impact, and friction.",
                    items: [
                        { name: "Industrial ABS", desc: "Standard for durable parts. Good thermal resistance (up to 85°C)." },
                        { name: "ASA UV-Resist", desc: "The 'Outdoor ABS'. Does not degrade or yellow under sunlight." },
                        { name: "PC (Polycarbonate)", desc: "Extreme impact resistance and high temperature (110°C+)." },
                        { name: "Nylon PA12/PA6", desc: "Exceptional toughness, low friction, and chemical resistance." }
                    ]
                },
                advanced: {
                    title: "High Performance",
                    desc: "The pinnacle of additive manufacturing. Reinforced composites and superpolymers for extreme environments.",
                    items: [
                        { name: "Carbon Fiber (PA-CF)", desc: "Nylon reinforced with carbon fiber. Maximum structural rigidity." },
                        { name: "Glass Fiber (PA-GF)", desc: "Superior dimensional stability and electrical/thermal insulation." },
                        { name: "PEEK / PPS", desc: "Metal replacement. Resists aggressive chemicals, fire, and 200°C+." }
                    ]
                }
            },
            why: {
                title: "Precision Additive",
                title_highlight: "Engineering",
                subtitle: "We overcome conventional 3D printing limitations with industrial hardware and rigorous process control.",
                items: [
                    { title: "80°C Heated Chamber", desc: "Controlled environment that eliminates warping in large ABS and ASA parts." },
                    { title: "24h Quoting", desc: "Get technical analysis and pricing quickly." },
                    { title: "Z-Axis Isotropy", desc: "Superior chemical layer fusion, ensuring mechanical strength in all directions." },
                    { title: "Real Materials", desc: "We process PEEK, Carbon Fiber, and Nylon without internal stresses." }
                ]
            },
            tech: {
                badge: "H2D Tech Specs",
                title: "Extreme Thermal",
                title_highlight: "Domain.",
                desc: "Real 3D printing requires control. Our active heated chamber ensures polymers like ABS and Nylon have injection-molded mechanical strength.",
                chart_monitor: "REAL-TIME MONITORING",
                chart_stability: "Extruder Stability",
                chart_stable: "Stable",
                items: [
                    { title: "All-Metal Hotend", desc: "Melts PEEK and Ultem effortlessly." },
                    { title: "Heated Chamber", desc: "Zero warping on large parts." },
                    { title: "Hardened Nozzle", desc: "Prints Carbon Fiber for thousands of hours." }
                ]
            }
        }
    }
};

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources, // Usa a variável que criamos acima
        fallbackLng: 'pt',
        interpolation: {
            escapeValue: false
        },
        detection: {
            order: ['navigator', 'localStorage', 'htmlTag'],
            caches: ['localStorage'],
        }
    });

export default i18n;