import { useState, type ChangeEvent } from 'react';

type RecruiterFormData = {
  name: string;
  company: string;
  email: string;
  contract: string;
  workMode: string;
  message: string;
};

type RecruiterFormErrors = {
  name?: string;
  company?: string;
  email?: string;
  contract?: string;
  workMode?: string;
  message?: string;
};

const initialFormData: RecruiterFormData = {
  name: '',
  company: '',
  email: '',
  contract: '',
  workMode: '',
  message: '',
};

function RecruiterForm() {
  // State
  const [formData, setFormData] = useState<RecruiterFormData>(initialFormData);
  const [formErrors, setFormErrors] = useState<RecruiterFormErrors>({});
  const [isSummaryVisible, setIsSummaryVisible] = useState(false); // false = formulaire, true = récap

  // Comportement
  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const fieldName = event.currentTarget.name as keyof RecruiterFormData;
    const fieldValue = event.currentTarget.value;

    setFormData((previousFormData) => ({
      ...previousFormData,
      [fieldName]: fieldValue,
    }));
  };

  const validateForm = () => {
    const errors: RecruiterFormErrors = {};

    if (!formData.name.trim()) {
      errors.name = 'Le nom du recruteur est obligatoire';
    }

    if (!formData.company.trim()) {
      errors.company = "Le nom de l'entreprise est obligatoire";
    }

    if (!formData.email.trim()) {
      errors.email = "L'adresse email est obligatoire";
    } else {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!emailPattern.test(formData.email)) {
        errors.email = 'Renseignez une adresse email valide';
      }
    }

    if (!formData.contract.trim()) {
      errors.contract = 'Sélectionnez le type de contrat';
    }

    if (!formData.workMode.trim()) {
      errors.workMode = 'Sélectionnez un mode de travail';
    }

    if (!formData.message.trim()) {
      errors.message = 'Renseignez un message';
    } else if (formData.message.trim().length < 20) {
      errors.message = 'Le message doit contenir au moins 20 caractères';
    }

    return errors;
  };

  const handleSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();

    const errors = validateForm();

    setFormErrors(errors);

    if (Object.keys(errors).length > 0) {
      return; // arrête immédiatement handleSubmit
    }

    setIsSummaryVisible(true);
  };

  // Affichage
  return (
    <section>
      {isSummaryVisible ? (
        <div>
          <h2>Récapitulatif de l’opportunité</h2>

          <p>
            <strong>Recruteur :</strong> {formData.name}
          </p>

          <p>
            <strong>Entreprise :</strong> {formData.company}
          </p>

          <p>
            <strong>Adresse e-mail :</strong> {formData.email}
          </p>

          <p>
            <strong>Type de contrat :</strong> {formData.contract}
          </p>

          <p>
            <strong>Mode de travail :</strong> {formData.workMode}
          </p>

          <p>
            <strong>Message :</strong> {formData.message}
          </p>

          <button type="button" onClick={() => setIsSummaryVisible(false)}>
            Modifier
          </button>
        </div>
      ) : (
        <>
          <h2>Tester mon profil avec une opportunité</h2>
          <form onSubmit={handleSubmit} noValidate>
            <div>
              <label htmlFor="name">Nom du recruteur</label>
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
              />
              {formErrors.name && <p>{formErrors.name}</p>}
            </div>

            <div>
              <label htmlFor="company">Entreprise</label>
              <input
                id="company"
                name="company"
                type="text"
                value={formData.company}
                onChange={handleChange}
              />
              {formErrors.company && <p>{formErrors.company}</p>}
            </div>

            <div>
              <label htmlFor="email">Adresse e-mail</label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
              />
              {formErrors.email && <p>{formErrors.email}</p>}
            </div>

            <div>
              <label htmlFor="contract">Type de contrat</label>
              <select
                id="contract"
                name="contract"
                value={formData.contract}
                onChange={handleChange}
              >
                <option value="">Sélectionner un contrat</option>
                <option value="CDI">CDI</option>
                <option value="CDD">CDD</option>
                <option value="Freelance">Freelance</option>
              </select>
              {formErrors.contract && <p>{formErrors.contract}</p>}
            </div>

            <div>
              <label htmlFor="workMode">Mode de travail</label>
              <select
                id="workMode"
                name="workMode"
                value={formData.workMode}
                onChange={handleChange}
              >
                <option value="">Sélectionner un mode de travail</option>
                <option value="Télétravail">Télétravail</option>
                <option value="Hybride">Hybride</option>
                <option value="Présentiel">Présentiel</option>
              </select>
              {formErrors.workMode && <p>{formErrors.workMode}</p>}
            </div>

            <div>
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
              />
              {formErrors.message && <p>{formErrors.message}</p>}
            </div>

            <button type="submit">Vérifier l’opportunité</button>
          </form>
        </>
      )}
    </section>
  );
}

export default RecruiterForm;
