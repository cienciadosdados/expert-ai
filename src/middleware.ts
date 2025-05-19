import { NextResponse, NextRequest } from "next/server";

// Middleware simples que permite acesso a todas as rotas sem autenticação
export function middleware(req: NextRequest) {
    return NextResponse.next();
}

export const config = {
    matcher: ["/((?!.*\\..*|_next).*)", "/(api|trpc)(.*)"],
};