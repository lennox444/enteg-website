"use client";

import LegalLayout from "@/components/LegalLayout";
import { useTranslation } from "@/lib/i18n-context";

export default function DatenschutzPage() {
  const { locale } = useTranslation();

  if (locale === "en") {
    return (
      <LegalLayout title="Privacy Policy" badge="Privacy">
        <section>
          <h2>1. Privacy at a Glance</h2>
          <h3>General Information</h3>
          <p>
            The following notes provide a simple overview of what happens to your personal data
            when you visit this website. Personal data is any data by which you can be personally
            identified.
          </p>
          <h3>Data Collection on This Website</h3>
          <p>
            <strong>Who is responsible for data collection on this website?</strong><br />
            Data processing on this website is carried out by the website operator. You can find
            their contact details in the section "Notice on the Responsible Party" in this privacy
            policy.
          </p>
          <p>
            <strong>How do we collect your data?</strong><br />
            Your data is collected in part by you providing it to us (e.g. data you enter into a
            contact form). Other data is collected automatically or with your consent when you
            visit the website by our IT systems. This is primarily technical data (e.g. internet
            browser, operating system, or time of page access).
          </p>
          <p>
            <strong>What do we use your data for?</strong><br />
            Part of the data is collected to ensure error-free provision of the website. Other data
            may be used to analyse your user behaviour.
          </p>
          <p>
            <strong>What rights do you have regarding your data?</strong><br />
            You have the right at any time to receive information free of charge about the origin,
            recipient, and purpose of your stored personal data. You also have the right to request
            correction or deletion of this data. If you have given consent to data processing, you
            can revoke this consent at any time for the future. You also have the right to request
            restriction of the processing of your personal data under certain circumstances.
          </p>
        </section>

        <section>
          <h2>2. Hosting</h2>
          <p>We host the content of our website with the following provider:</p>
          <h3>External Hosting</h3>
          <p>
            This website is hosted externally. The personal data collected on this website is
            stored on the servers of the host(s). This may primarily include IP addresses, contact
            requests, meta and communication data, contract data, contact details, names, website
            accesses, and other data generated via a website.
          </p>
          <p>
            External hosting is carried out for the purpose of fulfilling contracts with our
            potential and existing customers (Art. 6(1)(b) GDPR) and in the interest of a secure,
            fast, and efficient provision of our online offering by a professional provider
            (Art. 6(1)(f) GDPR).
          </p>
          <p>
            Where appropriate consent has been requested, processing is carried out exclusively on
            the basis of Art. 6(1)(a) GDPR and § 25(1) TTDSG, insofar as the consent includes the
            storage of cookies or access to information on the user's device (e.g. device
            fingerprinting) within the meaning of the TTDSG.
          </p>
        </section>

        <section>
          <h2>3. General Notes and Mandatory Information</h2>
          <h3>Data Protection</h3>
          <p>
            The operators of these pages take the protection of your personal data very seriously.
            We treat your personal data confidentially and in accordance with statutory data
            protection regulations and this privacy policy.
          </p>
          <h3>Notice on the Responsible Party</h3>
          <p>The responsible party for data processing on this website is:</p>
          <p>
            Enteg GmbH<br />
            Hoppenmeer 9A<br />
            33129 Delbrück<br />
            <br />
            Phone: +49 5250 609989-0<br />
            Email: info@enteg.de
          </p>
          <p>
            The responsible party is the natural or legal person who alone or jointly with others
            decides on the purposes and means of processing personal data.
          </p>
          <h3>Storage Duration</h3>
          <p>
            Unless a more specific storage period is stated within this privacy policy, your
            personal data will remain with us until the purpose for data processing no longer
            applies. If you assert a legitimate request for deletion or revoke consent to data
            processing, your data will be deleted unless we have other legally permissible reasons
            for storing your personal data (e.g. tax or commercial retention periods); in the
            latter case, deletion will occur after these reasons no longer apply.
          </p>
          <h3>Revocation of Your Consent to Data Processing</h3>
          <p>
            Many data processing operations are only possible with your explicit consent. You can
            revoke consent you have already given at any time. The legality of the data processing
            carried out prior to revocation remains unaffected by the revocation.
          </p>
          <h3>Right to Lodge a Complaint with the Competent Supervisory Authority</h3>
          <p>
            In the event of breaches of the GDPR, data subjects have the right to lodge a
            complaint with a supervisory authority, in particular in the Member State of their
            habitual residence, place of work, or the place of the alleged breach. This right to
            lodge a complaint is without prejudice to other administrative or judicial remedies.
          </p>
          <p>
            The competent supervisory authority for North Rhine-Westphalia is:<br />
            State Commissioner for Data Protection and Freedom of Information NRW<br />
            Postfach 20 04 44<br />
            40102 Düsseldorf<br />
            <a href="https://www.ldi.nrw.de" target="_blank" rel="noopener noreferrer">www.ldi.nrw.de</a>
          </p>
          <h3>Right to Data Portability</h3>
          <p>
            You have the right to have data which we process based on your consent or in
            fulfilment of a contract automatically delivered to yourself or to a third party in a
            standard, machine-readable format. If you require direct transfer of data to another
            responsible party, this will only be done to the extent technically feasible.
          </p>
          <h3>Information, Correction and Deletion</h3>
          <p>
            Within the scope of the applicable statutory provisions, you have the right at any time
            to free information about your stored personal data, their origin and recipients, and
            the purpose of data processing and, if applicable, a right to correction or deletion of
            this data. For this purpose, as well as for further questions on the subject of personal
            data, you can contact us at any time.
          </p>
          <h3>Right to Restriction of Processing</h3>
          <p>
            You have the right to request restriction of the processing of your personal data. You
            can contact us at any time for this purpose. The right to restriction of processing
            exists in the following cases:
          </p>
          <ul>
            <li>
              If you dispute the accuracy of your personal data stored by us, we usually need time
              to verify this.
            </li>
            <li>
              If the processing of your personal data was/is unlawful, you can request restriction
              of data processing instead of deletion.
            </li>
            <li>
              If we no longer need your personal data, but you need it to exercise, defend, or
              assert legal claims, you have the right to request restriction of the processing of
              your personal data instead of deletion.
            </li>
            <li>
              If you have lodged an objection pursuant to Art. 21(1) GDPR, a balance must be
              struck between your interests and ours.
            </li>
          </ul>
        </section>

        <section>
          <h2>4. Data Collection on This Website</h2>
          <h3>Server Log Files</h3>
          <p>
            The provider of the pages automatically collects and stores information in so-called
            server log files, which your browser automatically transmits to us. These are:
          </p>
          <ul>
            <li>Browser type and browser version</li>
            <li>Operating system used</li>
            <li>Referrer URL</li>
            <li>Hostname of the accessing computer</li>
            <li>Time of the server request</li>
            <li>IP address</li>
          </ul>
          <p>This data is not merged with other data sources.</p>
          <p>
            This data is collected on the basis of Art. 6(1)(f) GDPR. The website operator has a
            legitimate interest in the technically error-free presentation and optimisation of its
            website – for this purpose, server log files must be recorded.
          </p>
          <h3>Contact Form</h3>
          <p>
            If you send us enquiries via the contact form, your details from the enquiry form,
            including the contact details you provide there, will be stored by us for the purpose
            of processing the enquiry and in the event of follow-up questions. We do not pass on
            this data without your consent.
          </p>
          <p>
            The processing of this data is based on Art. 6(1)(b) GDPR if your request is related
            to the fulfilment of a contract or is necessary for the implementation of pre-contractual
            measures. In all other cases, the processing is based on our legitimate interest in the
            effective processing of the enquiries directed to us (Art. 6(1)(f) GDPR) or on your
            consent (Art. 6(1)(a) GDPR) if this was requested; consent can be revoked at any time.
          </p>
          <p>
            The data you enter in the contact form will remain with us until you request us to
            delete it, revoke your consent to storage, or the purpose for data storage no longer
            applies (e.g. after your enquiry has been processed). Mandatory statutory provisions –
            in particular retention periods – remain unaffected.
          </p>
          <h3>Enquiry by Email or Phone</h3>
          <p>
            If you contact us by email or phone, your enquiry including all resulting personal data
            (name, enquiry) will be stored and processed by us for the purpose of handling your
            request. We do not pass on this data without your consent.
          </p>
          <p>
            The processing of this data is based on Art. 6(1)(b) GDPR if your request is related
            to the fulfilment of a contract or is necessary for the implementation of pre-contractual
            measures. In all other cases, the processing is based on our legitimate interest in the
            effective processing of the enquiries directed to us (Art. 6(1)(f) GDPR) or on your
            consent (Art. 6(1)(a) GDPR) if this was requested.
          </p>
          <p>
            The data sent to us via contact requests will remain with us until you request deletion,
            revoke your consent to storage, or the purpose for data storage no longer applies.
            Mandatory statutory provisions – in particular statutory retention periods – remain
            unaffected.
          </p>
          <h3>Google Maps</h3>
          <p>
            This page uses the Google Maps map service. The provider is Google Ireland Limited,
            Gordon House, Barrow Street, Dublin 4, Ireland. When using Google Maps, information
            about your use of this website, including your IP address, may be transmitted to Google.
            This information is usually transferred to a Google server in the USA and stored there.
          </p>
          <p>
            The use of Google Maps is in the interest of an attractive presentation of our online
            offering and easy location of the places indicated by us on the website. This
            constitutes a legitimate interest within the meaning of Art. 6(1)(f) GDPR.
          </p>
          <p>
            For more information on the handling of user data, please refer to Google&apos;s
            privacy policy:{" "}
            <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
              https://policies.google.com/privacy
            </a>
            .
          </p>
        </section>
      </LegalLayout>
    );
  }

  return (
    <LegalLayout title="Datenschutz&shy;erklärung" badge="Datenschutz">
      <section>
        <h2>1. Datenschutz auf einen Blick</h2>
        <h3>Allgemeine Hinweise</h3>
        <p>
          Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren
          personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten
          sind alle Daten, mit denen Sie persönlich identifiziert werden können.
        </p>
        <h3>Datenerfassung auf dieser Website</h3>
        <p>
          <strong>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong><br />
          Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen
          Kontaktdaten können Sie dem Abschnitt „Hinweis zur Verantwortlichen Stelle" in dieser
          Datenschutzerklärung entnehmen.
        </p>
        <p>
          <strong>Wie erfassen wir Ihre Daten?</strong><br />
          Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen (z. B. Daten,
          die Sie in ein Kontaktformular eingeben). Andere Daten werden automatisch oder nach Ihrer
          Einwilligung beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem
          technische Daten (z. B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs).
        </p>
        <p>
          <strong>Wofür nutzen wir Ihre Daten?</strong><br />
          Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu
          gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.
        </p>
        <p>
          <strong>Welche Rechte haben Sie bezüglich Ihrer Daten?</strong><br />
          Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck
          Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht,
          die Berichtigung oder Löschung dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur
          Datenverarbeitung erteilt haben, können Sie diese Einwilligung jederzeit für die Zukunft
          widerrufen. Außerdem haben Sie das Recht, unter bestimmten Umständen die Einschränkung
          der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
        </p>
      </section>

      <section>
        <h2>2. Hosting</h2>
        <p>Wir hosten die Inhalte unserer Website bei folgendem Anbieter:</p>
        <h3>Externes Hosting</h3>
        <p>
          Diese Website wird extern gehostet. Die personenbezogenen Daten, die auf dieser Website
          erfasst werden, werden auf den Servern des Hosters bzw. der Hoster gespeichert. Hierbei
          kann es sich v. a. um IP-Adressen, Kontaktanfragen, Meta- und Kommunikationsdaten,
          Vertragsdaten, Kontaktdaten, Namen, Websitezugriffe und sonstige Daten, die über eine
          Website generiert werden, handeln.
        </p>
        <p>
          Das externe Hosting erfolgt zum Zwecke der Vertragserfüllung gegenüber unseren
          potenziellen und bestehenden Kunden (Art. 6 Abs. 1 lit. b DSGVO) und im Interesse einer
          sicheren, schnellen und effizienten Bereitstellung unseres Online-Angebots durch einen
          professionellen Anbieter (Art. 6 Abs. 1 lit. f DSGVO).
        </p>
        <p>
          Sofern eine entsprechende Einwilligung abgefragt wurde, erfolgt die Verarbeitung
          ausschließlich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TTDSG,
          soweit die Einwilligung die Speicherung von Cookies oder den Zugriff auf Informationen im
          Endgerät des Nutzers (z. B. Device-Fingerprinting) im Sinne des TTDSG umfasst.
        </p>
      </section>

      <section>
        <h2>3. Allgemeine Hinweise und Pflichtinformationen</h2>
        <h3>Datenschutz</h3>
        <p>
          Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir
          behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen
          Datenschutzvorschriften sowie dieser Datenschutzerklärung.
        </p>
        <h3>Hinweis zur verantwortlichen Stelle</h3>
        <p>Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:</p>
        <p>
          Enteg GmbH<br />
          Hoppenmeer 9A<br />
          33129 Delbrück<br />
          <br />
          Telefon: +49 5250 609989-0<br />
          E-Mail: info@enteg.de
        </p>
        <p>
          Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder
          gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen
          Daten entscheidet.
        </p>
        <h3>Speicherdauer</h3>
        <p>
          Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt
          wurde, verbleiben Ihre personenbezogenen Daten bei uns, bis der Zweck für die
          Datenverarbeitung entfällt. Wenn Sie ein berechtigtes Löschersuchen geltend machen oder
          eine Einwilligung zur Datenverarbeitung widerrufen, werden Ihre Daten gelöscht, sofern
          wir keine anderen rechtlich zulässigen Gründe für die Speicherung Ihrer
          personenbezogenen Daten haben (z. B. steuer- oder handelsrechtliche
          Aufbewahrungsfristen); im letztgenannten Fall erfolgt die Löschung nach Fortfall dieser
          Gründe.
        </p>
        <h3>Widerruf Ihrer Einwilligung zur Datenverarbeitung</h3>
        <p>
          Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich.
          Sie können eine bereits erteilte Einwilligung jederzeit widerrufen. Die Rechtmäßigkeit
          der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.
        </p>
        <h3>Beschwerderecht bei der zuständigen Aufsichtsbehörde</h3>
        <p>
          Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei
          einer Aufsichtsbehörde, insbesondere in dem Mitgliedstaat ihres gewöhnlichen
          Aufenthalts, ihres Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes zu. Das
          Beschwerderecht besteht unbeschadet anderweitiger verwaltungsrechtlicher oder
          gerichtlicher Rechtsbehelfe.
        </p>
        <p>
          Die zuständige Aufsichtsbehörde für Nordrhein-Westfalen ist:<br />
          Landesbeauftragte für Datenschutz und Informationsfreiheit Nordrhein-Westfalen<br />
          Postfach 20 04 44<br />
          40102 Düsseldorf<br />
          <a href="https://www.ldi.nrw.de" target="_blank" rel="noopener noreferrer">www.ldi.nrw.de</a>
        </p>
        <h3>Recht auf Datenübertragbarkeit</h3>
        <p>
          Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erfüllung
          eines Vertrags automatisiert verarbeiten, an sich oder an einen Dritten in einem gängigen,
          maschinenlesbaren Format aushändigen zu lassen. Sofern Sie die direkte Übertragung der
          Daten an einen anderen Verantwortlichen verlangen, erfolgt dies nur, soweit es technisch
          machbar ist.
        </p>
        <h3>Auskunft, Berichtigung und Löschung</h3>
        <p>
          Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf
          unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft
          und Empfänger und den Zweck der Datenverarbeitung und ggf. ein Recht auf Berichtigung
          oder Löschung dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema personenbezogene
          Daten können Sie sich jederzeit an uns wenden.
        </p>
        <h3>Recht auf Einschränkung der Verarbeitung</h3>
        <p>
          Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu
          verlangen. Hierzu können Sie sich jederzeit an uns wenden. Das Recht auf Einschränkung
          der Verarbeitung besteht in folgenden Fällen:
        </p>
        <ul>
          <li>
            Wenn Sie die Richtigkeit Ihrer bei uns gespeicherten personenbezogenen Daten
            bestreiten, benötigen wir in der Regel Zeit, um dies zu überprüfen.
          </li>
          <li>
            Wenn die Verarbeitung Ihrer personenbezogenen Daten unrechtmäßig geschah/geschieht,
            können Sie statt der Löschung die Einschränkung der Datenverarbeitung verlangen.
          </li>
          <li>
            Wenn wir Ihre personenbezogenen Daten nicht mehr benötigen, Sie sie jedoch zur
            Ausübung, Verteidigung oder Geltendmachung von Rechtsansprüchen benötigen, haben Sie
            das Recht, statt der Löschung die Einschränkung der Verarbeitung Ihrer
            personenbezogenen Daten zu verlangen.
          </li>
          <li>
            Wenn Sie einen Widerspruch nach Art. 21 Abs. 1 DSGVO eingelegt haben, muss eine
            Abwägung zwischen Ihren und unseren Interessen vorgenommen werden.
          </li>
        </ul>
      </section>

      <section>
        <h2>4. Datenerfassung auf dieser Website</h2>
        <h3>Server-Log-Dateien</h3>
        <p>
          Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten
          Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind:
        </p>
        <ul>
          <li>Browsertyp und Browserversion</li>
          <li>verwendetes Betriebssystem</li>
          <li>Referrer URL</li>
          <li>Hostname des zugreifenden Rechners</li>
          <li>Uhrzeit der Serveranfrage</li>
          <li>IP-Adresse</li>
        </ul>
        <p>Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen.</p>
        <p>
          Die Erfassung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der
          Websitebetreiber hat ein berechtigtes Interesse an der technisch fehlerfreien Darstellung
          und der Optimierung seiner Website – hierzu müssen die Server-Log-Files erfasst werden.
        </p>
        <h3>Kontaktformular</h3>
        <p>
          Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem
          Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung
          der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben
          wir nicht ohne Ihre Einwilligung weiter.
        </p>
        <p>
          Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO,
          sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung
          vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die
          Verarbeitung auf unserem berechtigten Interesse an der effektiven Bearbeitung der an uns
          gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer Einwilligung (Art. 6
          Abs. 1 lit. a DSGVO) sofern diese abgefragt wurde; die Einwilligung ist jederzeit
          widerrufbar.
        </p>
        <p>
          Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben bei uns, bis Sie uns zur
          Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die
          Datenspeicherung entfällt (z. B. nach abgeschlossener Bearbeitung Ihrer Anfrage).
          Zwingende gesetzliche Bestimmungen – insbesondere Aufbewahrungsfristen – bleiben
          unberührt.
        </p>
        <h3>Anfrage per E-Mail oder Telefon</h3>
        <p>
          Wenn Sie uns per E-Mail oder Telefon kontaktieren, wird Ihre Anfrage inklusive aller
          daraus hervorgehenden personenbezogenen Daten (Name, Anfrage) zum Zwecke der Bearbeitung
          Ihres Anliegens bei uns gespeichert und verarbeitet. Diese Daten geben wir nicht ohne
          Ihre Einwilligung weiter.
        </p>
        <p>
          Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO,
          sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung
          vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die
          Verarbeitung auf unserem berechtigten Interesse an der effektiven Bearbeitung der an uns
          gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer Einwilligung (Art. 6
          Abs. 1 lit. a DSGVO) sofern diese abgefragt wurde.
        </p>
        <p>
          Die von Ihnen an uns per Kontaktanfragen übersandten Daten verbleiben bei uns, bis Sie
          uns zur Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck
          für die Datenspeicherung entfällt. Zwingende gesetzliche Bestimmungen – insbesondere
          gesetzliche Aufbewahrungsfristen – bleiben unberührt.
        </p>
        <h3>Google Maps</h3>
        <p>
          Diese Seite nutzt den Kartendienst Google Maps. Anbieter ist die Google Ireland Limited,
          Gordon House, Barrow Street, Dublin 4, Irland. Mit der Nutzung von Google Maps können
          Informationen über die Benutzung dieser Website einschließlich Ihrer IP-Adresse an Google
          übertragen werden. Diese Informationen werden in der Regel an einen Server von Google in
          den USA übertragen und dort gespeichert.
        </p>
        <p>
          Die Nutzung von Google Maps erfolgt im Interesse einer ansprechenden Darstellung unserer
          Online-Angebote und an einer leichten Auffindbarkeit der von uns auf der Website
          angegebenen Orte. Dies stellt ein berechtigtes Interesse im Sinne von Art. 6 Abs. 1 lit.
          f DSGVO dar.
        </p>
        <p>
          Mehr Informationen zum Umgang mit Nutzerdaten finden Sie in der Datenschutzerklärung von
          Google:{" "}
          <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
            https://policies.google.com/privacy
          </a>
          .
        </p>
      </section>
    </LegalLayout>
  );
}
