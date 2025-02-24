document
  .getElementById("feedbackForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const feedback = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      subject: document.getElementById("subject").value,
      message: document.getElementById("message").value,
      date: new Date().toISOString(),
    };

    // Get the current feedback count or initialize it to 0
    let feedbackCount = parseInt(localStorage.getItem("feedbackCount") || "0");

    // Increment the count and use it as the key for the new feedback
    feedbackCount++;
    localStorage.setItem("feedbackCount", feedbackCount.toString());

    // Store the feedback directly in localStorage
    localStorage.setItem("feedback_" + feedbackCount, JSON.stringify(feedback));

    alert("Feedback submitted successfully!");
    this.reset();
  });

document.getElementById("showFeedback").addEventListener("click", function () {
  const feedbackList = document.getElementById("feedbackList");
  feedbackList.innerHTML = "";

  const feedbackCount = parseInt(localStorage.getItem("feedbackCount") || "0");

  for (let i = 1; i <= feedbackCount; i++) {
    const feedbackKey = "feedback_" + i;
    const feedbackData = localStorage.getItem(feedbackKey);

    if (feedbackData) {
      const feedback = JSON.parse(feedbackData);
      const li = document.createElement("li");
      li.innerHTML = `
                <strong>Name:</strong> ${feedback.name}<br>
                <strong>Email:</strong> ${feedback.email}<br>
                <strong>Subject:</strong> ${feedback.subject}<br>
                <strong>Message:</strong> ${feedback.message}<br>
                <strong>Date:</strong> ${new Date(
                  feedback.date
                ).toLocaleString()}
            `;
      feedbackList.appendChild(li);
    }
  }
});
