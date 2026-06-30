const BASE_URL = "http://127.0.0.1:8000";

export async function getHealth() {
    const response = await fetch(`${BASE_URL}/health`);

    if (!response.ok) {
        throw new Error("Failed to connect to backend");
    }

    return response.json();
}