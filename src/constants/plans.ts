type PLAN = {
    id: string;
    title: string;
    desc: string;
    monthlyPrice: number;
    yearlyPrice: number;
    badge?: string;
    buttonText: string;
    features: string[];
    link: string;
};

export const PLANS: PLAN[] = [
    {
        id: "basic",
        title: "Básico",
        desc: "Consultoria inicial ideal para empresas que estão iniciando sua jornada com inteligência artificial",
        monthlyPrice: 1500,
        yearlyPrice: 15000,
        buttonText: "Solicitar proposta",
        features: [
            "Avaliação completa de necessidades",
            "Desenvolvimento de 1 agente de IA personalizado",
            "Suporte por email em horário comercial",
            "Implementação básica assistida",
            "Treinamento inicial para sua equipe",
            "Relatório detalhado de desempenho mensal"
        ],
        link: "https://lp.cienciadosdados.com/"
    },
    {
        id: "pro",
        title: "Empresarial",
        desc: "Solução completa e robusta para empresas que desejam implementar IA em escala e obter resultados superiores",
        monthlyPrice: 3500,
        yearlyPrice: 35000,
        badge: "Mais Popular",
        buttonText: "Falar com consultor",
        features: [
            "Avaliação detalhada e aprofundada de processos",
            "Desenvolvimento de até 3 agentes de IA avançados",
            "Suporte prioritário com tempo de resposta garantido",
            "Integração completa com sistemas existentes",
            "Análise de dados avançada com insights estratégicos",
            "Treinamento completo e personalizado da equipe",
            "Relatórios semanais detalhados de desempenho",
            "Revisões trimestrais de estratégia e otimização"
        ],
        link: "https://lp.cienciadosdados.com/"
    },
    {
        id: "enterprise",
        title: "Personalizado",
        desc: "Soluções premium totalmente personalizadas para grandes organizações com necessidades complexas e específicas",
        monthlyPrice: 8000,
        yearlyPrice: 80000,
        badge: "Personalizado",
        buttonText: "Agendar reunião",
        features: [
            "Desenvolvimento ilimitado de agentes de IA",
            "Consultoria estratégica executiva completa",
            "Gerente de conta exclusivo e dedicado",
            "Integração perfeita com todos os sistemas",
            "Análise preditiva avançada com machine learning",
            "Segurança nível empresarial com criptografia",
            "Atualizações prioritárias e personalizações exclusivas",
            "Suporte técnico premium 24/7"
        ],
        link: "https://lp.cienciadosdados.com/"
    }
];
