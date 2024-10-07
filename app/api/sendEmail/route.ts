import { NextApiRequest } from "next";
import { NextResponse } from "next/server";

const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.NEXT_EMAILSENDER);

export async function POST(req:Request) {


  const { name, email, message } = await req.json();

  
  try {
    await sgMail
    .send({
      to: "argotechsol@gmail.com",
      from: "argotechsol@gmail.com",
      subject: `Nuevo mensaje de ${name}`,
      text: message,
      html: `<p>Mensaje de: ${name}</p><p>Email: ${email}</p><p>${message}</p>`,
    })
    .then(() => {
      console.log("Email enviado exitosamente");
      return NextResponse.json({ message: 'Correo enviado exitosamente' },{ status: 200 });
    })
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Error enviando correo' }, { status: 500 });
  }
  return NextResponse.json({ message: 'Correo enviado exitosamente' }, { status: 200 });
}


export async function GET( res: any) {
  return NextResponse.json({ message: 'HOla' }, { status: 200 });
}
