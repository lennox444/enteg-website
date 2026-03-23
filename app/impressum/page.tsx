"use client";

import LegalLayout from "@/components/LegalLayout";
import { useTranslation } from "@/lib/i18n-context";

export default function ImpressumPage() {
  const { locale } = useTranslation();

  if (locale === "en") {
    return (
      <LegalLayout title="Legal Notice" badge="Legal">
        <section>
          <h2>Information pursuant to § 5 TMG</h2>
          <p>
            <strong>Enteg GmbH</strong><br />
            Hoppenmeer 9A<br />
            33129 Delbrück<br />
            Germany
          </p>
        </section>

        <section>
          <h2>Contact</h2>
          <p>
            Phone: <a href="tel:+4952506099890">+49 5250 609989-0</a><br />
            Email: <a href="mailto:info@enteg.de">info@enteg.de</a>
          </p>
        </section>

        <section>
          <h2>Represented by</h2>
          <p>Managing Director: [Name des Geschäftsführers]</p>
        </section>

        <section>
          <h2>Commercial Register</h2>
          <p>
            Register Court: Amtsgericht Paderborn<br />
            Registration Number: HRB [Nummer]
          </p>
        </section>

        <section>
          <h2>VAT ID</h2>
          <p>
            VAT identification number pursuant to § 27a UStG:<br />
            DE [Nummer]
          </p>
        </section>

        <section>
          <h2>Economic ID</h2>
          <p>Economic identification number pursuant to § 139c AO: [Nummer]</p>
        </section>

        <section>
          <h2>Professional Regulations</h2>
          <p>
            Enteg GmbH is certified as a licensed waste disposal company and is subject to the
            relevant waste management regulations, in particular the Circular Economy Act (KrWG)
            and the Electrical and Electronic Equipment Act (ElektroG).
          </p>
        </section>

        <section>
          <h2>Dispute Resolution</h2>
          <p>
            The European Commission provides a platform for online dispute resolution (ODR):{" "}
            <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer">
              https://ec.europa.eu/consumers/odr/
            </a>
            .<br />
            Our email address can be found in the legal notice above.
          </p>
          <p>
            We are not willing or obliged to participate in dispute resolution proceedings before a
            consumer arbitration board.
          </p>
        </section>

        <section>
          <h2>Liability for Content</h2>
          <p>
            As a service provider, we are responsible for our own content on these pages in
            accordance with § 7(1) TMG and general law. According to §§ 8 to 10 TMG, however, we
            are not obligated as a service provider to monitor transmitted or stored third-party
            information or to investigate circumstances that indicate illegal activity.
          </p>
        </section>

        <section>
          <h2>Liability for Links</h2>
          <p>
            Our website contains links to external third-party websites over whose content we have
            no influence. We therefore cannot accept any liability for this external content. The
            respective provider or operator of the linked pages is always responsible for the
            content of those pages.
          </p>
        </section>

        <section>
          <h2>Copyright</h2>
          <p>
            The content and works created by the site operators on these pages are subject to
            German copyright law. Duplication, processing, distribution, and any form of
            commercialisation of such material beyond the scope of the copyright law shall require
            the prior written consent of its respective author or creator.
          </p>
        </section>
      </LegalLayout>
    );
  }

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
