import { AGENT_IMAGE, USER_IMAGE } from "./constants";

export function createMessageDiv(
    message: string,
    sender: "user" | "agent"
): HTMLDivElement {
    const container = document.createElement("div");
    container.className = sender === "user" ? "userMessage" : "agentMessage";
    const image = document.createElement("img");
    image.src = sender === "user" ? USER_IMAGE : AGENT_IMAGE;
    image.className = "agentPic";
    const paragraph = document.createElement("p");
    paragraph.innerText = message;
    container.appendChild(image);
    container.appendChild(paragraph);
    return container;
}
