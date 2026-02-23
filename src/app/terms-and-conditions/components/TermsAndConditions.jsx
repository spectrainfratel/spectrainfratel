"use client";
import React from "react";

export default function TermsAndConditions() {
  const sections = [
    {
      title: "1. Scope of Work",
      content: [
        "Scope shall be strictly as per approved Work Order / Purchase Order / BOQ issued by the Client.",
        "Any deviation, variation, or additional work shall be executed only after written approval.",
        "Verbal instructions shall not be considered valid unless confirmed in writing (email acceptable).",
      ],
    },
    {
      title: "2. Commercial Terms",
      content: [
        "Prices are based on current market rates of material, fuel, labour, and statutory levies.",
        "Any variation in taxes, duties, or statutory charges shall be to Client’s account.",
        "Rates are exclusive of GST unless specifically mentioned.",
      ],
    },
    {
      title: "3. Payment Terms",
      content: [
        "Advance: 50% against Work Order confirmation (if applicable).",
        "Running Bills: RA bills shall be submitted on monthly basis.",
        "Payment Due: Within 15 days from submission of certified invoice.",
        "Final Bill: To be cleared within 30 days of project completion.",
        "Delayed payments beyond agreed terms shall attract interest @ 18% per annum.",
      ],
    },
    {
      title: "4. Taxes & Statutory Compliance",
      content: [
        "GST shall be charged extra as applicable.",
        "TDS to be deducted as per Income Tax Act.",
        "Client shall provide necessary tax certificates timely.",
        "All statutory compliance for labour engaged by SPECTRA INFRATEL shall be under our scope unless otherwise agreed.",
      ],
    },
    {
      title: "5. Validity",
      content: [
        "Quotation validity: 30 days from date of submission.",
        "Price revision applicable if work is delayed beyond 60 days due to client-side reasons.",
      ],
    },
    {
      title: "6. Material & Storage",
      content: [
        "Free and safe storage space to be provided by client.",
        "Any theft or damage after handover shall be Client’s responsibility.",
        "Client shall ensure site access and security arrangements.",
      ],
    },
    {
      title: "7. Site Readiness & Clearances",
      content: [
        "Site shall be handed over in ready-to-work condition.",
        "All necessary permissions, local authority approvals, and shutdown approvals to be arranged by Client unless specifically included in scope.",
      ],
    },
    {
      title: "8. Time Schedule",
      content: [
        "Project timeline shall start from Date of advance payment OR Date of site handover (whichever is later).",
        "Delays due to force majeure, site constraints, client approvals, or material unavailability shall not attract penalty.",
      ],
    },
    {
      title: "9. Force Majeure",
      content: [
        "SPECTRA INFRATEL shall not be liable for delay or failure due to natural calamities, government restrictions, war, riots, pandemic, transport strikes, or material shortages.",
        "Timeline shall be extended accordingly.",
      ],
    },
    {
      title: "10. Warranty",
      content: [
        "Workmanship warranty: 12 months from date of completion.",
        "Warranty excludes damage due to mishandling, electrical surge, third-party interference, or natural calamities.",
      ],
    },
    {
      title: "11. Safety & Liability",
      content: [
        "All works shall be executed following standard safety norms.",
        "Client shall provide safe working environment.",
        "SPECTRA INFRATEL shall not be liable for indirect or consequential damages.",
      ],
    },
    {
      title: "12. Termination",
      content: [
        "Either party may terminate with 15 days written notice.",
        "Payment shall be made for work executed till termination date.",
        "Advance paid shall be adjusted against completed work.",
      ],
    },
    {
      title: "13. Dispute Resolution",
      content: [
        "Any dispute shall first be resolved mutually.",
        "Jurisdiction: Ahmedabad, Gujarat.",
        "Arbitration shall be conducted as per Indian Arbitration Act.",
      ],
    },
    {
      title: "14. Confidentiality",
      content: [
        "All technical and commercial documents shall remain confidential.",
        "Sharing with third party requires written consent.",
      ],
    },
    {
      title: "15. Acceptance",
      content: [
        "Issuance of Purchase Order / Work Order shall be treated as acceptance of above Terms & Conditions.",
      ],
    },
  ];

  return (
    <div className="min-h-screen py-10 px-4 sm:px-6 lg:px-8">
      <div className="w-full mx-auto p-6 sm:p-10">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6 text-center">
          Terms & Conditions
        </h1>

        <div className="space-y-8">
          {sections.map((section, index) => (
            <div key={index}>
              <h2 className="text-lg sm:text-xl font-semibold text-primary mb-3">
                {section.title}
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 text-sm sm:text-base leading-relaxed">
                {section.content.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}