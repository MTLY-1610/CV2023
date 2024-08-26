export default async function handler(req, res) {
    const { phoneNumber, message } = req.body;

    // The PHP code you provided converted to JavaScript
    const base_url = "";
    const params = new URLSearchParams({
        access_token: '0005gOjCOlMH8F2BP8',
        to: phoneNumber,
        message: message,
    });

    try {
        const response = await fetch(`${base_url}?${params.toString()}`, {
            method: 'GET',
        });

        const result = await response.text();

        if (result.startsWith("OK")) {
            res.status(200).json({ success: true, message: "Message has been sent successfully!" });
        } else {
            res.status(500).json({ success: false, message: "Send message failed!" });
        }
    } catch (error) {
        res.status(500).json({ success: false, message: "An error occurred." });
    }
}