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
                ],
                adv_title: "Por que nos escolher",
                advantages: [
                    { title: "Entrega Rápida", desc: "Prazo cumprido com precisão industrial" },
                    { title: "Redução de Custos", desc: "Até 60% mais barato que métodos tradicionais" },
                    { title: "Relatório Técnico", desc: "Documentação completa de cada peça produzida" },
                    { title: "Qualidade Certificada", desc: "Processos auditados e rastreáveis" }
                ],
                serv_title: "Nossos Serviços",
                services: [
                    { title: "Impressão 3D Industrial", desc: "Equipamentos de alta performance para peças críticas" },
                    { title: "Multi-Material", desc: "Amplo catálogo de polímeros e compósitos técnicos" },
                    { title: "Escaneamento 3D", desc: "Engenharia reversa e controle dimensional" },
                    { title: "Pós-Processamento", desc: "Acabamento, pintura e tratamentos especiais" }
                ],
                logistics: {
                    title: "Cobertura Logística",
                    desc: "Entrega de peças em todo o Brasil com foco especial em atendimento rápido portuário."
                }
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
            },
            process: {
                badge: "Como Funciona",
                title: "Processo de",
                title_highlight: "Manufatura",
                case: {
                    badge: "Case de Sucesso",
                    title: "Válvula Especial - Indústria Química",
                    desc: "Uma peça crítica falhou na linha de produção, paralisando a operação. Com a engenharia reversa e impressão 3D em alta performance, entregamos a solução em tempo recorde.",
                    prob_label: "Problema",
                    prob_val: "Parada de linha por falta de peça de reposição.",
                    res_label: "Resultado",
                    res_val: "Produção retomada em 3 horas.",
                    time_label: "Tempo de Impressão",
                    time_val: "1h 45min"
                },
                steps: [
                    { title: "Upload Inteligente", desc: "Envie seu projeto 3D/STEP para análise imediata", tooltip: "Análise automática de malha 3D e geometria" },
                    { title: "Validação Técnica", desc: "Engenheiros verificam tolerâncias e materiais", tooltip: "Verificação de tolerâncias e recomendação de material" },
                    { title: "Manufatura Industrial", desc: "Impressão em câmara aquecida com controle de qualidade", tooltip: "Impressão 3D de alta performance" },
                    { title: "Entrega Certificada", desc: "Pós-processamento e envio com relatório dimensional", tooltip: "Relatório dimensional e engenharia de qualidade" }
                ]
            },
            cta: {
                title: "Seu projeto merece",
                title_highlight: "materialização profissional.",
                desc: "Envie seu projeto 3D ou STEP agora. Nossa engenharia analisa a viabilidade e retorna com o orçamento e sugestão de material ideal.",
                btn_quote: "Solicitar Cotação",
                btn_wpp: "WhatsApp",
                guarantee: "Resposta garantida em até 24h úteis.",
                map_title: "Localização em Fortaleza"
            },
            footer: {
                desc: "Manufatura aditiva de alta performance com polo principal em Fortaleza, CE.",
                services: {
                    title: "Serviços",
                    items: ["Impressão 3D", "Multi-Material", "Escaneamento 3D", "Pós-Processamento"]
                },
                materials: {
                    title: "Materiais",
                    items: ["PEEK", "Nylon CF", "PETG", "TPU Industrial"]
                },
                contact: {
                    title: "Contato",
                    location: "Fortaleza, CE – Brasil"
                },
                copyright: "Todos os direitos reservados.",
                status: "Sistemas Operacionais"
            },
            floating: {
                aria: "Fale conosco no WhatsApp",
                backToTop: "Voltar ao topo"
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
                ],
                adv_title: "Why choose us",
                advantages: [
                    { title: "Fast Delivery", desc: "Deadline met with industrial precision" },
                    { title: "Cost Reduction", desc: "Up to 60% cheaper than traditional methods" },
                    { title: "Technical Report", desc: "Complete documentation of each produced part" },
                    { title: "Certified Quality", desc: "Audited and traceable processes" }
                ],
                serv_title: "Our Services",
                services: [
                    { title: "Industrial 3D Printing", desc: "High-performance equipment for critical parts" },
                    { title: "Multi-Material", desc: "Wide catalog of technical polymers and composites" },
                    { title: "3D Scanning", desc: "Reverse engineering and dimensional control" },
                    { title: "Post-Processing", desc: "Finishing, painting, and special treatments" }
                ],
                logistics: {
                    title: "Logistics Coverage",
                    desc: "Delivery of parts throughout Brazil with a special focus on fast port service."
                }
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
            },
            process: {
                badge: "How It Works",
                title: "Manufacturing",
                title_highlight: "Process",
                case: {
                    badge: "Success Case",
                    title: "Specialty Valve - Chemical Industry",
                    desc: "A critical part failed on the production line, halting operations. Through reverse engineering and high-performance 3D printing, we delivered the solution in record time.",
                    prob_label: "Problem",
                    prob_val: "Line stoppage due to missing replacement part.",
                    res_label: "Result",
                    res_val: "Production resumed in 3 hours.",
                    time_label: "Print Time",
                    time_val: "1h 45min"
                },
                steps: [
                    { title: "Smart Upload", desc: "Send your 3D/STEP project for immediate analysis", tooltip: "Automatic 3D mesh and geometry analysis" },
                    { title: "Technical Validation", desc: "Engineers verify tolerances and materials", tooltip: "Tolerance verification and material recommendation" },
                    { title: "Industrial Manufacturing", desc: "Printing in heated chamber with quality control", tooltip: "High-performance 3D printing" },
                    { title: "Certified Delivery", desc: "Post-processing and shipping with dimensional report", tooltip: "Dimensional report and quality engineering" }
                ]
            },
            cta: {
                title: "Your project deserves",
                title_highlight: "professional materialization.",
                desc: "Send your 3D or STEP project now. Our engineering team analyzes feasibility and returns with a quote and ideal material suggestion.",
                btn_quote: "Request a Quote",
                btn_wpp: "WhatsApp",
                guarantee: "Guaranteed response within 24 business hours.",
                map_title: "Location in Fortaleza"
            },
            footer: {
                desc: "High-performance additive manufacturing with main hub in Fortaleza, CE.",
                services: {
                    title: "Services",
                    items: ["3D Printing", "Multi-Material", "3D Scanning", "Post-Processing"]
                },
                materials: {
                    title: "Materials",
                    items: ["PEEK", "Nylon CF", "PETG", "Industrial TPU"]
                },
                contact: {
                    title: "Contact",
                    location: "Fortaleza, CE – Brazil"
                },
                copyright: "All rights reserved.",
                status: "Operational Systems"
            },
            floating: {
                aria: "Contact us on WhatsApp",
                backToTop: "Back to top"
            }
        }
    }
};

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
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