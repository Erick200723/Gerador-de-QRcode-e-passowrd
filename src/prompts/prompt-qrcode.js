import chalk from 'chalk';

const qrCodePrompt = [

    {
        name: "link",
        description: chalk.yellow("Digite o link para o  QR code:"),

    },
    {
        name: "type",
        description: chalk.yellow("Digite o tipo do QR code(1- Normal)(2-terminal):"),
        pattern: /^[1-2]+$/,
        message: chalk.red.italic( "Digite 1 ou 2"),
        required: true,
    }
    
];

export default qrCodePrompt;