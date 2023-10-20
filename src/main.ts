import { AGENT_KEY, RELAYS } from "./constants";
import { createMessageDiv } from "./functions";
import "./style.css";
import { Conversation } from "plebai-sdk";

const container = document.getElementById("messagesContainer");
const textfield = document.getElementById("userInput") as HTMLInputElement;
const button = document.getElementById("userSend") as HTMLButtonElement;

const conv = new Conversation(AGENT_KEY, RELAYS, {
    useWebLn: true,
    secretKeyMethod: "nip07",
    providerHost: "https://plebai.com",
});
setTimeout(() => {
    conv.sub((event, message) => {
        if (event.pubkey === AGENT_KEY) {
            const textDiv = createMessageDiv(message, "agent");
            container?.appendChild(textDiv);
        } else {
            const textDiv = createMessageDiv(message, "user");
            container?.appendChild(textDiv);
        }
    });

    button.onclick = () => {
        const text = textfield.value;
        conv.sendPrompt(text);
        textfield.value = "";
    };
}, 2000);
