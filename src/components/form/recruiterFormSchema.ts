import { z } from 'zod';

export const recruiterFormSchema = z.object({
  name: z.string().min(1, 'Le nom du recruteur est obligatoire'),

  company: z.string().min(1, "Le nom de l'entreprise est obligatoire"),

  email: z.email("L'adresse e-mail n'est pas valide"),

  contract: z.enum(['CDI', 'CDD', 'FREELANCE'], {
    error: 'Sélectionnez un type de contrat',
  }),

  workMode: z.enum(['FULL_REMOTE', 'HYBRIDE', 'PRESENTIEL'], {
    error: 'Sélectionnez un mode de travail',
  }),

  message: z.string().min(10, 'Le message doit contenir au moins 10 caractères'),
});

export type RecruiterFormData = z.infer<typeof recruiterFormSchema>;
