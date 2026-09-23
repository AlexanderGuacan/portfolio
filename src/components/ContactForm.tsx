import { ErrorMessage, Field, Form, Formik, type FormikHelpers } from 'formik'
import { ImSpinner8 } from 'react-icons/im'
import * as yup from 'yup'
import type { EmailRequest } from '../dto/email'

const validationSchema = yup.object({
  name: yup
    .string()
    .min(3, 'El nombre es muy corto')
    .max(50, 'El nombre es muy largo')
    .required('Campo obligatorio'),
  email: yup
    .string()
    .email('Ingrese un correo electrónico válido')
    .required('Campo obligatorio'),
  subject: yup
    .string()
    .min(3, 'El asunto es muy corto')
    .max(50, 'El asunto es muy largo')
    .matches(/^[\p{L}0-9\s,.()/+-]+$/u, 'Caracteres inválidos')
    .required('Campo obligatorio'),
  message: yup
    .string()
    .min(10, 'El mensaje es muy corto')
    .max(300, 'El mensaje es muy largo')
    .matches(/^[\p{L}0-9\s,.()/+-:]+$/u, 'Caracteres inválidos')
    .required('Campo obligatorio'),
})

type FormValues = yup.InferType<typeof validationSchema>

const initialValues: FormValues = {
  name: '',
  email: '',
  subject: '',
  message: '',
} as const

interface Props {
  success: string | null
  error: string | null
  onSubmit: (values: EmailRequest) => Promise<void>
}

export function ContactForm({ success, error, onSubmit }: Props) {
  const handleSubmit = async (
    values: FormValues,
    { resetForm }: FormikHelpers<FormValues>
  ) => {
    await onSubmit({
      name: values.name,
      email: values.email,
      subject: values.subject,
      message: values.message,
    })

    resetForm()
  }
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
      validateOnBlur={false}
      validateOnChange={false}
    >
      {({ isSubmitting, dirty }) => (
        <Form
          className="bg-[#18181b] p-6 rounded-2xl border border-brand-border space-y-6"
          noValidate
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-1">
              <label
                className="inline-block text-xs font-semibold text-zinc-400 uppercase"
                htmlFor="name"
              >
                Nombre
              </label>
              <Field
                className="bg-transparent w-full border-b border-brand-border px-1 text-white placeholder:text-zinc-600 focus:outline-none focus:border-red-500"
                id="name"
                name="name"
                type="text"
                placeholder="John Doe"
                required
                autoComplete="name"
              />
              <ErrorMessage
                className="text-red-600 text-xs px-1"
                name="name"
                component="p"
              />
            </div>
            <div className="space-y-1">
              <label
                className="inline-block text-xs font-semibold text-zinc-400 uppercase"
                htmlFor="email"
              >
                Email
              </label>
              <Field
                className="bg-transparent w-full border-b border-brand-border px-1 text-white placeholder:text-zinc-600 focus:outline-none focus:border-red-500"
                id="email"
                name="email"
                type="email"
                placeholder="johndoe@email.com"
                required
                autoComplete="email"
              />
              <ErrorMessage
                className="text-red-600 text-xs px-1"
                name="email"
                component="p"
              />
            </div>
          </div>

          <div className="space-y-1">
            <label
              className="inline-block text-xs font-semibold text-zinc-400 uppercase"
              htmlFor="subject"
            >
              Asunto
            </label>
            <Field
              className="bg-transparent w-full border-b border-brand-border px-1 text-white placeholder:text-zinc-600 focus:outline-none focus:border-red-500"
              id="subject"
              name="subject"
              type="text"
              placeholder="Propuesta de proyecto / Oportunidad laboral"
              required
            />
            <ErrorMessage
              className="text-red-600 text-xs px-1"
              name="subject"
              component="p"
            />
          </div>

          <div className="space-y-1">
            <label
              className="inline-block text-xs font-semibold text-zinc-400 uppercase"
              htmlFor="message"
            >
              Mensaje
            </label>
            <Field
              className="block resize-none w-full bg-transparent border border-brand-border px-1 py-0.5 rounded-md text-white
              placeholder:text-zinc-600 focus:outline-none focus:border-red-500"
              id="message"
              name="message"
              as="textarea"
              rows={5}
              placeholder="Escribe tu mensaje aquí..."
              required
            />
            <ErrorMessage
              className="text-red-600 text-xs px-1"
              name="message"
              component="p"
            />
          </div>

          {success?.length && (
            <p className="py-1.5 w-full text-center bg-emerald-700 text-white rounded-md text-xs">
              {success}
            </p>
          )}
          {error?.length && (
            <p className="py-1.5 w-full text-center bg-red-700 text-white rounded-md text-xs">
              {error}
            </p>
          )}

          <button
            className="flex gap-x-2 items-center justify-center w-full py-2 bg-red-600 hover:bg-red-700 rounded-lg text-white font-semibold transition-all 
            disabled:bg-zinc-700 disabled:cursor-default"
            type="submit"
            disabled={isSubmitting || !dirty}
          >
            {isSubmitting ? (
              <>
                <ImSpinner8 className="animate-spin" />
                Enviando
              </>
            ) : (
              'Enviar'
            )}
          </button>
        </Form>
      )}
    </Formik>
  )
}
