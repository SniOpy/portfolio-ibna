import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { recruiterFormSchema, type RecruiterFormData } from './recruiterFormSchema';

function RecruiterForm() {
  // State
  const [isSummaryVisible, setIsSummaryVisible] = useState(false);

  const [submittedData, setSubmittedData] = useState<RecruiterFormData | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RecruiterFormData>({
    resolver: zodResolver(recruiterFormSchema),

    defaultValues: {
      name: '',
      company: '',
      email: '',
      message: '',
    },
  });

  const onSubmit = (data: RecruiterFormData) => {
    setSubmittedData(data);
    setIsSummaryVisible(true);
  };

  // Affichage
  return (
    <section>
      {isSummaryVisible ? (
        <div>
          <h2>Récapitulatif de l’opportunité</h2>

          <p>
            <strong>Recruteur :</strong> {submittedData?.name}
          </p>

          <p>
            <strong>Entreprise :</strong> {submittedData?.company}
          </p>

          <p>
            <strong>Adresse e-mail :</strong> {submittedData?.email}
          </p>

          <p>
            <strong>Type de contrat :</strong> {submittedData?.contract}
          </p>

          <p>
            <strong>Mode de travail :</strong> {submittedData?.workMode}
          </p>

          <p>
            <strong>Message :</strong> {submittedData?.message}
          </p>

          <button type="button" onClick={() => setIsSummaryVisible(false)}>
            Modifier
          </button>
        </div>
      ) : (
        <>
          <h2>Tester mon profil avec une opportunité</h2>
          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <div>
              <label htmlFor="name">Nom du recruteur</label>
              <input id="name" type="text" {...register('name')} />
              {errors.name && <p>{errors.name.message}</p>}
            </div>

            <div>
              <label htmlFor="company">Entreprise</label>
              <input id="company" type="text" {...register('company')} />
              {errors.company && <p>{errors.company.message}</p>}
            </div>

            <div>
              <label htmlFor="email">Adresse e-mail</label>
              <input id="email" type="email" {...register('email')} />
              {errors.email && <p>{errors.email.message}</p>}
            </div>

            <div>
              <label htmlFor="contract">Type de contrat</label>

              <select id="contract" {...register('contract')}>
                <option value="">Sélectionner un contrat</option>
                <option value="CDI">CDI</option>
                <option value="CDD">CDD</option>
                <option value="Freelance">Freelance</option>
              </select>

              {errors.contract && <p>{errors.contract.message}</p>}
            </div>

            <div>
              <label htmlFor="workMode">Mode de travail</label>

              <select id="workMode" {...register('workMode')}>
                <option value="">Sélectionner un mode de travail</option>
                <option value="Télétravail">Télétravail</option>
                <option value="Hybride">Hybride</option>
                <option value="Présentiel">Présentiel</option>
              </select>

              {errors.workMode && <p>{errors.workMode.message}</p>}
            </div>

            <div>
              <label htmlFor="message">Message</label>
              <textarea id="message" {...register('message')} />
              {errors.message && <p>{errors.message.message}</p>}
            </div>

            <button type="submit">Vérifier l’opportunité</button>
          </form>
        </>
      )}
    </section>
  );
}

export default RecruiterForm;
