import prompt from 'prompt';
import promptQRCode from '../prompts/prompt-qrcode.js';

async function createQRCode() {
    prompt.get();
    prompt.start();
}

export default createQRCode;