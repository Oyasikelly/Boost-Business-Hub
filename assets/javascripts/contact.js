document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const encodedMessage = params.get("message");

  console.log("working");
  if (encodedMessage) {
    try {
      const decodedMessage = atob(encodedMessage); // Decode from Base64
      const messageField = document.querySelector(".message-field");

      if (messageField) {
        messageField.value = decodedMessage;
      }
    } catch (error) {
      console.error("Error decoding message:", error);
    }
  }
});
