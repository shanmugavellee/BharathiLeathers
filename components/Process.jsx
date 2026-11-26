const steps = [
  { title: 'Send your enquiry', text: 'Share a tech pack, sample, sketch or leather swatch with quantities and target market.' },
  { title: 'Receive a sample and quote', text: 'We make a development sample and send a FOB, CFR or CIF quotation in USD or EUR.' },
  { title: 'Approve and pay the advance', text: 'You approve the sample and confirm the order. Production starts on advance or a confirmed L/C.' },
  { title: 'Production and quality check', text: 'We check the goods against the approved sample and send inspection photos before dispatch.' },
  { title: 'Shipment and documents', text: 'We coordinate the freight forwarder and customs agent and send the full export document set.' },
];

export default function Process() {
  return (
    <ol className="process">
      {steps.map((s, i) => (
        <li key={s.title}>
          <span className="process-n" aria-hidden="true">{i + 1}</span>
          <div>
            <h3>{s.title}</h3>
            <p>{s.text}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
