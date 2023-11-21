// Define a simple Message model
class Message {
  constructor(id, text, sender, timestamp) {
    this.id = id; // Unique identifier for the message
    this.text = text; // Text content of the message
    this.sender = sender; // User who sent the message
    this.timestamp = timestamp; // Timestamp when the message was sent
  }
}

module.exports = {
  Message,
}