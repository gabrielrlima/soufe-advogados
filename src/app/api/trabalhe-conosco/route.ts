import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    
    const nome = formData.get('nome') as string;
    const email = formData.get('email') as string;
    const telefone = formData.get('telefone') as string;
    const area = formData.get('area') as string;
    const mensagem = formData.get('mensagem') as string || '';
    const curriculo = formData.get('curriculo') as File;

    // Validação básica
    if (!nome || !email || !telefone || !area || !curriculo) {
      return NextResponse.json(
        { error: 'Todos os campos obrigatórios devem ser preenchidos' },
        { status: 400 }
      );
    }

    // Configurar transporter do nodemailer
    const transporter = nodemailer.createTransport({
      host: 'smtp.hostinger.com',
      port: 465,
      secure: true,
      auth: {
        user: 'contato@soufeadvogados.com.br',
        pass: 'Al@291220',
      },
    });

    // Converter arquivo para buffer
    const buffer = Buffer.from(await curriculo.arrayBuffer());

    // Enviar email
    await transporter.sendMail({
      from: 'contato@soufeadvogados.com.br',
      to: 'contato@soufeadvogados.com.br',
      subject: `Novo Currículo - ${nome}`,
      html: `
        <h2>Novo Currículo Recebido</h2>
        <p><strong>Nome:</strong> ${nome}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Telefone:</strong> ${telefone}</p>
        <p><strong>Área de Interesse:</strong> ${area}</p>
        ${mensagem ? `<p><strong>Mensagem:</strong><br>${mensagem}</p>` : ''}
      `,
      attachments: [
        {
          filename: curriculo.name,
          content: buffer,
        },
      ],
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Erro ao enviar email:', error);
    return NextResponse.json(
      { error: 'Erro ao enviar currículo. Tente novamente.' },
      { status: 500 }
    );
  }
}
