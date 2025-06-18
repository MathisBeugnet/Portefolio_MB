exports.handler = async function (event) {
  try {
    const formData = new URLSearchParams(event.body);
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    console.log("➡️ Données reçues :", { name, email, message });
    console.log("📧 Email envoyé de", process.env.EMAIL_USER, "vers", process.env.EMAIL_TO);

    const transporter = require("nodemailer").createTransport({
      service: "Gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: email,
      to: process.env.EMAIL_TO,
      subject: `Message de ${name}`,
      text: message,
    };

    const result = await transporter.sendMail(mailOptions);

    console.log("✅ Résultat Nodemailer :", result);

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Email envoyé" }),
    };
  } catch (error) {
    console.error("❌ Erreur nodemailer:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
