import emailjs from '@emailjs/browser'
import type { EmailRequest } from '../dto/email'

export class EmailService {
  private static readonly publicKey = import.meta.env.VITE_EMAIL_API_KEY
  private static readonly serviceId = import.meta.env.VITE_EMAIL_SERVICE_ID
  private static readonly templateId = import.meta.env.VITE_EMAIL_TEMPLATE_ID

  public static async send(dto: EmailRequest) {
    try {
      const templateParams = {
        name: dto.name.trim(),
        email: dto.email.trim(),
        subject: dto.subject.trim().replace(/\s+/g, ' '),
        message: dto.message.trim(),
      }

      await emailjs.send(this.serviceId, this.templateId, templateParams, {
        publicKey: this.publicKey,
      })
    } catch {
      throw new Error('No se pudo enviar el mensaje, intentelo más tarde.')
    }
  }
}
