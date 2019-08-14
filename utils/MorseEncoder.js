
import MorseMessage from 'morse-pro/lib/morse-pro-message'

export function encodeMessage(input) {
    let morseMessage = new MorseMessage();
    let output;
    try {
        output = morseMessage.translate(input);
    } catch (ex) {
        morseMessage.clearError();
        output = "Translation failed.";
    }

    return output;
}