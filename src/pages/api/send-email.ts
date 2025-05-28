import type { APIRoute } from "astro";
import nodemailer from "nodemailer";

export const POST: APIRoute = async ({ request }) => {
  const data = await request.formData();

  const name = data.get("name");
  const email = data.get("email");
  const message = data.get("message");

  // Vérification que toutes les données sont bien des chaînes de caractères
  if (
    typeof name !== "string" ||
    typeof email !== "string" ||
    typeof message !== "string" ||
    !name.trim() ||
    !email.trim() ||
    !message.trim()
  ) {
    return new Response(JSON.stringify({ error: "Champs invalides ou manquants" }), { status: 400 });
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: import.meta.env.GMAIL_USER,
      pass: import.meta.env.GMAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: email,
      to: import.meta.env.GMAIL_USER,
      subject: `Nouveau message de ${name}`,
      text: message,
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (err) {
    return new Response(JSON.stringify({ error: "Échec de l'envoi" }), { status: 500 });
  }
};

