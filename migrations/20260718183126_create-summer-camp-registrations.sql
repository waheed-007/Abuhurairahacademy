-- Summer camp registration submissions from the public website form.
-- Card payment fields are intentionally NOT stored here (see app code) --
-- only the registration/package details and a payment_status flag,
-- ready for a Stripe Payment Intent id once real keys are configured.

CREATE TABLE public.summer_camp_registrations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  child_name TEXT NOT NULL,
  child_age TEXT NOT NULL,
  parent_name TEXT NOT NULL,
  parent_email TEXT NOT NULL,
  parent_phone TEXT NOT NULL,
  home_address TEXT NOT NULL,
  medical_notes TEXT,
  package TEXT NOT NULL CHECK (package IN ('full_day', 'module_1', 'module_2')),
  amount_due_cents INTEGER NOT NULL,
  payment_status TEXT NOT NULL DEFAULT 'pending' CHECK (payment_status IN ('pending', 'paid', 'failed')),
  stripe_payment_intent_id TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

ALTER TABLE public.summer_camp_registrations ENABLE ROW LEVEL SECURITY;

-- Public website visitors may submit a registration, but cannot read,
-- update, or delete any registration (their own or anyone else's).
CREATE POLICY "public can submit registration" ON public.summer_camp_registrations
  FOR INSERT TO anon, authenticated
  WITH CHECK (true);

REVOKE ALL ON public.summer_camp_registrations FROM anon, authenticated;
GRANT USAGE ON SCHEMA public TO anon, authenticated;
GRANT INSERT ON public.summer_camp_registrations TO anon, authenticated;
