import Mail = require('nodemailer/lib/mailer');
import * as nodemailer from 'nodemailer';
import { Injectable } from '@nestjs/common';

interface EmailOptions {
  to: string;
  subject: string;
  html: string;
}
@Injectable()
export class EmailService {
  private transporter: Mail;

  constructor() {
    this.transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: 'GMAIL_ACCOUNT',
        pass: 'GMAIL_PASSWORD'
      }
    })
  }

  async sendMemberJoinVerification(email: string, signupVerifyToken: string) {
    const baseUrl = 'http://localhost:3000';
    const url = `${baseUrl}/users/email-verify?signupVerifyToken=${signupVerifyToken}`;
    const mailOptions: EmailOptions = {
      to: email,
      subject: 'Email Verification',
      html: `
        Please verify your email.<br/>
        <form action="${url}" method="POST">
          <button>Join</button>
        </form>
      `
    }
    return await this.transporter.sendMail(mailOptions);
  }
}
