import { z } from 'zod';

export const recruiterFormSchema = z.object({
  name: z.string().trim().min(1, 'Le nom du recruteur est obligatoire'),

  company: z.string().trim().min(1, "Le nom de l'entreprise est obligatoire"),

  email: z
    .string()
    .trim()
    .min(1, "L'adresse email est obligatoire")
    .pipe(z.email('Renseignez une adresse email valide')),

  contract: z.enum(['CDI', 'CDD', 'Freelance'], {
    error: 'Sélectionnez le type de contrat',
  }),

  workMode: z.enum(['Télétravail', 'Hybride', 'Présentiel'], {
    error: 'Sélectionnez un mode de travail',
  }),

  message: z
    .string()
    .trim()
    .min(1, 'Renseignez un message')
    .min(20, 'Le message doit contenir au moins 20 caractères'),
});

export type RecruiterFormData = z.infer<typeof recruiterFormSchema>;
