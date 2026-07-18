/* EmailJS config — free tier, sends the registration confirmation email
   straight from the browser. Create a free account at emailjs.com, add an
   Email Service and a Template, then paste the three ids below.
   Until they're filled in, sendRegistrationEmail() is a safe no-op —
   the registration itself still saves to the database either way. */

export const emailjsConfig = {
  serviceId: '',
  templateId: '',
  publicKey: '',
}

export const emailjsReady = Boolean(
  emailjsConfig.serviceId && emailjsConfig.templateId && emailjsConfig.publicKey,
)
