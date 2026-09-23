import { useState } from 'react'
import type { EmailRequest } from '../dto/email'
import { EmailService } from '../services/email.service'

export function useEmail() {
  const [success, setSuccess] = useState<string | null>(null)
  const [error, setError] = useState<Error | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const send = async (dto: EmailRequest) => {
    try {
      setIsLoading(true)
      setSuccess(null)
      setError(null)

      await EmailService.send(dto)

      setSuccess('El mensaje fue enviado exitosamente.')
    } catch (e) {
      if (e instanceof Error) setError(e)
      else setError(new Error('Ocurrio un problema, intentelo más tarde.'))
    } finally {
      setIsLoading(false)
    }
  }

  return {
    success,
    isLoading,
    error,
    send,
  }
}
