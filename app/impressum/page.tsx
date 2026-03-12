import LegalLayout from "@/components/LegalLayout";

export const metadata = { title: "Impressum – Enteg GmbH" };

export default function ImpressumPage() {
  return (
    <LegalLayout title="Impressum" badge="Rechtliches">
      <section>
        <h2>Angaben gemäß § 5 TMG</h2>
        <p>
          <strong>Enteg GmbH</strong><br />
          Hoppenmeer 9A<br />
          33129 Delbrück<br />
          Deutschland
        </p>
      </section>

      <section>
        <h2>Kontakt</h2>
        <p>
          Telefon: <a href="tel:+4952506099890">+49 5250 609989-0</a><br />
          E-Mail: <a href="mailto:info@enteg.de">info@enteg.de</a>
        </p>
      </section>

      <section>
        <h2>Vertreten durch</h2>
        <p>Geschäftsführer: [Name des Geschäftsführers]</p>
      </section>

      <section>
        <h2>Handelsregister</h2>
        <p>
          Registergericht: Amtsgericht Paderborn<br />
          Registernummer: HRB [Nummer]
        </p>
      </section>

      <section>
        <h2>Umsatzsteuer-ID</h2>
        <p>
          Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG:<br />
          DE [Nummer]
        </p>
      </section>

      <section>
        <h2>Wirtschafts-ID</h2>
        <p>Wirtschafts-Identifikationsnummer gemäß § 139c AO: [Nummer]</p>
      </section>

      <section>
        <h2>Berufsrechtliche Regelungen</h2>
        <p>
          Die Enteg GmbH ist als Entsorgungsfachbetrieb zertifiziert und unterliegt den
          einschlägigen abfallrechtlichen Vorschriften, insbesondere dem Kreislaufwirtschaftsgesetz
          (KrWG) sowie dem Elektro- und Elektronikgerätegesetz (ElektroG).
        </p>
      </section>

      <section>
        <h2>Streitschlichtung</h2>
        <p>
          Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{" "}
          <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer">
            https://ec.europa.eu/consumers/odr/
          </a>
          .<br />
          Unsere E-Mail-Adresse finden Sie oben im Impressum.
        </p>
        <p>
          Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
          Verbraucherschlichtungsstelle teilzunehmen.
        </p>
      </section>

      <section>
        <h2>Haftung für Inhalte</h2>
        <p>
          Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten
          nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als
          Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde
          Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige
          Tätigkeit hinweisen.
        </p>
      </section>

      <section>
        <h2>Haftung für Links</h2>
        <p>
          Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen
          Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen.
          Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der
          Seiten verantwortlich.
        </p>
      </section>

      <section>
        <h2>Urheberrecht</h2>
        <p>
          Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen
          dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art
          der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen
          Zustimmung des jeweiligen Autors bzw. Erstellers.
        </p>
      </section>
    </LegalLayout>
  );
}
