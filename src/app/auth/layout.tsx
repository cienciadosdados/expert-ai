"use client";

import { useEffect } from 'react';

interface Props {
    children: React.ReactNode
}

const AuthLayout = ({ children }: Props) => {
    useEffect(() => {
        // Redirecionar para o site externo quando alguém tentar acessar páginas de autenticação
        window.location.href = 'https://lp.cienciadosdados.com/';
    }, []);

    // Este retorno nunca será renderizado devido ao redirecionamento
    return null;
};

export default AuthLayout
