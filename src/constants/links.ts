import { ClockIcon, MessageSquare, BarChart2, FileTextIcon, UserPlusIcon, CreditCardIcon, SettingsIcon, LogOut, Headphones, ChartPieIcon, LucideIcon, MessagesSquareIcon, NewspaperIcon, MegaphoneIcon, LineChartIcon, MessageSquareTextIcon, UsersIcon } from 'lucide-react';

type Link = {
    href: string;
    label: string;
    icon: LucideIcon;
}

export const SIDEBAR_LINKS: Link[] = [
    {
        href: "/dashboard",
        label: "Dashboard",
        icon: ChartPieIcon,
    },
    {
        href: "/dashboard/campaigns",
        label: "Campaigns",
        icon: MegaphoneIcon
    },
    {
        href: "/dashboard/analytics",
        label: "Analytics",
        icon: LineChartIcon
    },
    {
        href: "/dashboard/posts",
        label: "Posts",
        icon: MessageSquareTextIcon
    },
    {
        href: "/dashboard/engagement",
        label: "Engagement",
        icon: UsersIcon
    },
    {
        href: "/dashboard/billing",
        label: "Billing",
        icon: CreditCardIcon
    },
    {
        href: "/dashboard/settings",
        label: "Settings",
        icon: SettingsIcon
    },
];

export const FOOTER_LINKS = [
    {
        title: "Produto",
        links: [
            { name: "Início", href: "https://lp.cienciadosdados.com/" },
            { name: "Serviços", href: "https://lp.cienciadosdados.com/" },
            { name: "Preços", href: "https://lp.cienciadosdados.com/" },
            { name: "Contato", href: "https://lp.cienciadosdados.com/" },
        ],
    },
    {
        title: "Recursos",
        links: [
            { name: "Blog", href: "https://lp.cienciadosdados.com/" },
            { name: "Central de Ajuda", href: "https://lp.cienciadosdados.com/" },
            { name: "Comunidade", href: "https://lp.cienciadosdados.com/" },
            { name: "Guias", href: "https://lp.cienciadosdados.com/" },
        ],
    },
    {
        title: "Legal",
        links: [
            { name: "Privacidade", href: "https://lp.cienciadosdados.com/" },
            { name: "Termos", href: "https://lp.cienciadosdados.com/" },
            { name: "Cookies", href: "https://lp.cienciadosdados.com/" },
        ],
    },
    {
        title: "Soluções",
        links: [
            { name: "Agentes de IA", href: "https://lp.cienciadosdados.com/" },
            { name: "Análise de Dados", href: "https://lp.cienciadosdados.com/" },
            { name: "Consultoria", href: "https://lp.cienciadosdados.com/" },
            { name: "Treinamento", href: "https://lp.cienciadosdados.com/" },
            { name: "Suporte", href: "https://lp.cienciadosdados.com/" },
        ],
    },
];
