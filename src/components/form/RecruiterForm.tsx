function RecruiterForm() {
  return (
    <section>
      <h2>Tester mon profil avec une opportunité</h2>

      <form>
        <div>
          <label htmlFor="name">Nom du recruteur</label>
          <input id="name" name="name" type="text" />
        </div>

        <div>
          <label htmlFor="company">Entreprise</label>
          <input id="company" name="company" type="text" />
        </div>

        <div>
          <label htmlFor="email">Adresse e-mail</label>
          <input id="email" name="email" type="email" />
        </div>

        <div>
          <label htmlFor="contract">Type de contrat</label>
          <select id="contract" name="contract">
            <option value="">Sélectionner un contrat</option>
            <option value="cdi">CDI</option>
            <option value="cdd">CDD</option>
            <option value="freelance">Freelance</option>
          </select>
        </div>

        <div>
          <label htmlFor="workMode">Mode de travail</label>
          <select id="workMode" name="workMode">
            <option value="">Sélectionner un mode de travail</option>
            <option value="remote">Télétravail</option>
            <option value="hybrid">Hybride</option>
            <option value="office">Présentiel</option>
          </select>
        </div>

        <div>
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" />
        </div>

        <button type="submit">Vérifier l’opportunité</button>
      </form>
    </section>
  );
}

export default RecruiterForm;
