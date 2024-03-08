<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $message = $_POST['message']; // Get the message from the textarea

    $to = "jadhavprathamesh129@gmail.com"; // Your email address
    $subject = "Feedback & Ratings"; // Subject of the email

    // Email content
    $email_content = "Feedback message: \n\n$message";

    // Send email
    $headers = "From: your_website@example.com"; // Change this to your website's email address
    mail($to, $subject, $email_content, $headers);

    // Redirect back to the page
    header("Location: ".$_SERVER['HTTP_REFERER']);
    exit;
}
