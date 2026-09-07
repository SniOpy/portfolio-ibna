import { useState, type ChangeEvent } from 'react';

type RecruiterFormData = {
  name: string;
  company: string;
  email: string;
  contract: string;
  workMode: string;
  message: string;
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
  const [formData, setFormData] = useState<RecruiterFormData>(initialFormData);

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

  const handleSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <section>
      <h2>Tester mon profil avec une opportunité</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nom du recruteur</label>
          <input id="name" name="name" type="text" value={formData.name} onChange={handleChange} />
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
        </div>

        <div>
          <label htmlFor="contract">Type de contrat</label>
          <select id="contract" name="contract" value={formData.contract} onChange={handleChange}>
            <option value="">Sélectionner un contrat</option>
            <option value="CDI">CDI</option>
            <option value="CDD">CDD</option>
            <option value="FREELANCE">Freelance</option>
          </select>
        </div>

        <div>
          <label htmlFor="workMode">Mode de travail</label>
          <select id="workMode" name="workMode" value={formData.workMode} onChange={handleChange}>
            <option value="">Sélectionner un mode de travail</option>
            <option value="FULL_REMOTE">Télétravail</option>
            <option value="HYBRIDE">Hybride</option>
            <option value="PRESENTIEL">Présentiel</option>
          </select>
        </div>

        <div>
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" value={formData.message} onChange={handleChange} />
        </div>

        <button type="submit">Vérifier l’opportunité</button>
      </form>
      <pre>{JSON.stringify(formData, null, 2)}</pre>
    </section>
  );
}

export default RecruiterForm;
