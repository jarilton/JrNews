import { NextApiResponse, NextApiRequest } from 'next';

export default (req: NextApiRequest, res: NextApiResponse) => {
    console.log('Evento recebido')

    res.status(200).json({ ok: true })
}

/* 

-> instalar o stripe cli
=> rodar stripe.exe no cmd/cmder
-> stripe login
-> enter
-> stripe listen --forward-to localhost:3000/api/webhooks (caminho da api do webhooks no vscode)
-> testar na aplicação clicando no botão de se inscreve
-> verificar no terminal e no vscode se rodou com sucesso.

*/