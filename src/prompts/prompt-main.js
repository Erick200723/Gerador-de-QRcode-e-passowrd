import chalk from "chalk";

const mainPromt = [
    {
        name: "select",
        description: chalk.green.bold("O que deseja fazer? (1 - Criar QR Code, 2 - criar Senha)"),
        pattern: /^[1-2]+$/,
        message: chalk.red.italic("Escolha entre 1 e 2"),
        required: true
    }
]

export default mainPromt;