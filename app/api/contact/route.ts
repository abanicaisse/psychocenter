import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, subject, message } = body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "Tous les champs requis doivent être remplis" },
        { status: 400 },
      );
    }

    // Email configuration
    const recipientEmail = "abawandjovunicaise@gmail.com";

    // Create professional email body
    const emailBody = `
Nouveau message depuis le formulaire de contact
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

INFORMATIONS DU CONTACT
------------------------
Nom complet: ${name}
Email: ${email}
Téléphone: ${phone || "Non fourni"}

SUJET
------
${subject}

MESSAGE
--------
${message}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Date: ${new Date().toLocaleString("fr-FR", {
      timeZone: "Africa/Lubumbashi",
      dateStyle: "full",
      timeStyle: "short",
    })}

Pour répondre directement, cliquez sur: ${email}
    `.trim();

    const htmlBody = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: linear-gradient(135deg, #1E2436 0%, #1E2436 100%); color: white; padding: 30px; border-radius: 10px 10px 0 0; }
    .header h1 { margin: 0; font-size: 24px; }
    .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
    .info-section { background: white; padding: 20px; margin: 15px 0; border-radius: 8px; border-left: 4px solid #F6E48D; }
    .info-label { font-weight: bold; color: #1E2436; margin-bottom: 5px; }
    .info-value { color: #555; margin-bottom: 15px; }
    .message-box { background: white; padding: 20px; margin: 15px 0; border-radius: 8px; border: 1px solid #ddd; }
    .footer { text-align: center; padding: 20px; color: #777; font-size: 12px; }
    .divider { border-top: 2px solid #F6E48D; margin: 20px 0; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>📧 Nouveau Message de Contact</h1>
      <p style="margin: 5px 0 0 0; opacity: 0.9;">Psychocenter ASBL</p>
    </div>
    
    <div class="content">
      <div class="info-section">
        <div class="info-label">👤 Nom complet</div>
        <div class="info-value">${name}</div>
        
        <div class="info-label">📧 Email</div>
        <div class="info-value"><a href="mailto:${email}" style="color: #1E2436; text-decoration: none;">${email}</a></div>
        
        <div class="info-label">📱 Téléphone</div>
        <div class="info-value">${phone || "Non fourni"}</div>
      </div>
      
      <div class="divider"></div>
      
      <div class="info-section">
        <div class="info-label">📋 Sujet</div>
        <div class="info-value" style="font-size: 16px; font-weight: 600; color: #1E2436;">${subject}</div>
      </div>
      
      <div class="message-box">
        <div class="info-label">💬 Message</div>
        <div style="margin-top: 10px; white-space: pre-wrap; color: #333;">${message}</div>
      </div>
      
      <div class="divider"></div>
      
      <div style="text-align: center; margin: 20px 0;">
        <a href="mailto:${email}" style="background: #1E2436; color: white; padding: 12px 30px; text-decoration: none; border-radius: 8px; display: inline-block; font-weight: bold;">
          Répondre au message
        </a>
      </div>
    </div>
    
    <div class="footer">
      <p>Reçu le ${new Date().toLocaleString("fr-FR", {
        timeZone: "Africa/Lubumbashi",
        dateStyle: "full",
        timeStyle: "short",
      })}</p>
      <p style="margin-top: 10px; color: #999;">
        Cet email a été envoyé automatiquement depuis le formulaire de contact du site web Psychocenter ASBL
      </p>
    </div>
  </div>
</body>
</html>
    `.trim();

    // Using Resend - Best option for production
    // Install: pnpm add resend
    // Get API key from: https://resend.com/api-keys

    if (!process.env.RESEND_API_KEY) {
      console.warn("RESEND_API_KEY not found. Email will be simulated.");
      console.log("Email would have been sent to:", recipientEmail);
      console.log("From:", name, `(${email})`);
      console.log("Subject:", subject);
      console.log("Message:", message);

      // For development: simulate success
      return NextResponse.json(
        {
          success: true,
          message: "Message reçu (mode développement - email non envoyé)",
        },
        { status: 200 },
      );
    }

    // Production: Send real email with Resend
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Psychocenter Contact <onboarding@resend.dev>", // Change to your verified domain
        to: recipientEmail,
        reply_to: email,
        subject: `Nouveau message: ${subject}`,
        html: htmlBody,
        text: emailBody,
      }),
    });

    if (!response.ok) {
      const error = await response.text();
      console.error("Resend API error:", error);
      throw new Error("Erreur lors de l'envoi de l'email");
    }

    const result = await response.json();

    return NextResponse.json(
      {
        success: true,
        message: "Message envoyé avec succès",
      },
      { status: 200 },
    );
  } catch (error: any) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      {
        error: "Une erreur s'est produite lors de l'envoi du message",
        details: error.message,
      },
      { status: 500 },
    );
  }
}
