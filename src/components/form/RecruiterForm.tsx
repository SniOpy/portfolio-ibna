import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { recruiterFormSchema, type RecruiterFormData } from './recruiterFormSchema';

function RecruiterForm() {
  // State

  const [submittedData, setSubmittedData] = useState<RecruiterFormData | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RecruiterFormData>({
    resolver: zodResolver(recruiterFormSchema),
  });

  const onSubmit = (data: RecruiterFormData) => {
    setSubmittedData(data);
  };

  // Affichage
  return (
    <section>
      {submittedData ? (
        <div>
          <h2>Récapitulatif de l’opportunité</h2>

          <p>
            <strong>Recruteur :</strong> {submittedData.name}
          </p>

          <p>
            <strong>Entreprise :</strong> {submittedData.company}
          </p>

          <p>
            <strong>Adresse e-mail :</strong> {submittedData.email}
          </p>

          <p>
            <strong>Type de contrat :</strong> {submittedData.contract}
          </p>

          <p>
            <strong>Mode de travail :</strong> {submittedData.workMode}
          </p>

          <p>
            <strong>Message :</strong> {submittedData.message}
          </p>

          <button type="button" onClick={() => setSubmittedData(null)}>
            Modifier
          </button>
        </div>
      ) : (
        <>
          <h2>Tester mon profil avec une opportunité</h2>
          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <div>
              <label htmlFor="name">Nom du recruteur</label>

              <input
                id="name"
                type="text"
                {...register('name')}
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? 'name-error' : undefined}
              />

              {errors.name && (
                <p id="name-error" role="alert">
                  {errors.name.message}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="company">Entreprise</label>
              <input
                id="company"
                type="text"
                {...register('company')}
                aria-invalid={!!errors.company}
                aria-describedby={errors.company ? 'company-error' : undefined}
              />

              {errors.company && (
                <p id="company-error" role="alert">
                  {errors.company.message}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="email">Adresse e-mail</label>
              <input
                id="email"
                type="email"
                {...register('email')}
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? 'email-error' : undefined}
              />
              {errors.email && (
                <p id="email-error" role="alert">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="contract">Type de contrat</label>

              <select
                id="contract"
                {...register('contract')}
                aria-invalid={!!errors.contract}
                aria-describedby={errors.contract ? 'contract-error' : undefined}
              >
                <option value="">Sélectionner un contrat</option>
                <option value="CDI">CDI</option>
                <option value="CDD">CDD</option>
                <option value="Freelance">Freelance</option>
              </select>

              {errors.contract && (
                <p id="contract-error" role="alert">
                  {errors.contract.message}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="workMode">Mode de travail</label>

              <select
                id="workMode"
                {...register('workMode')}
                aria-invalid={!!errors.workMode}
                aria-describedby={errors.workMode ? 'workMode-error' : undefined}
              >
                <option value="">Sélectionner un mode de travail</option>
                <option value="Télétravail">Télétravail</option>
                <option value="Hybride">Hybride</option>
                <option value="Présentiel">Présentiel</option>
              </select>

              {errors.workMode && (
                <p id="workMode-error" role="alert">
                  {errors.workMode.message}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                {...register('message')}
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? 'message-error' : undefined}
              />
              {errors.message && (
                <p id="message-error" role="alert">
                  {errors.message.message}
                </p>
              )}
            </div>

            <button type="submit">Vérifier l’opportunité</button>
          </form>
        </>
      )}
    </section>
  );
}

export default RecruiterForm;
