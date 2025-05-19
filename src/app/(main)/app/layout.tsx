"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

interface Props {
    children: React.ReactNode;
}

const DashboardLayout = ({ children }: Props) => {
    const router = useRouter();
    
    useEffect(() => {
        // Redirecionar para o site externo quando alguém tentar acessar o dashboard
        window.location.href = 'https://lp.cienciadosdados.com/';
    }, []);

    // Este retorno nunca será renderizado devido ao redirecionamento
    return null;
};

export default DashboardLayout;