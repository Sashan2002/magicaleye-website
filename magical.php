<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect form data
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    // Email configuration
    $to = 'nilaniperera933@gmail.com'; // Your email address
    $subject = 'New message from Magical Eye Accessories website';
    $headers = 'From: ' . $email . "\r\n" .
        'Reply-To: ' . $to . "\r\n" .
        'X-Mailer: PHP/' . phpversion();
    $body = 'Name: ' . $name . "\n\n" .
        'Email: ' . $email . "\n\n" .
        'Message: ' . $message;

    // Send email
    if (mail($to, $subject, $body, $headers)) {
        http_response_code(200);
        echo json_encode(array('message' => 'Message sent successfully!'));
    } else {
        http_response_code(500);
        echo json_encode(array('message' => 'Unable to send message. Please try again later.'));
    }
} else {
    http_response_code(405);
    echo json_encode(array('message' => 'Method not allowed.'));
}


