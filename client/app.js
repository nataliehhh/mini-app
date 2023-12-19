async function getMessage() {
    const response = await fetch("http://localhost:8080/message")
    const json = await response.json()
    const p = document.getElementById("message")
    p.textContent = json.message
}

getMessage()