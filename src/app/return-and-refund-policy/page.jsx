"use client";
import React from "react";

export default function ReturnAndRefundPolicy() {
  const sections = [
    {
      title: "1. Order Confirmation",
      content: [
        "Order shall be considered confirmed only after receipt of written Purchase Order and applicable advance payment.",
        "Once material procurement is initiated, cancellation terms shall apply as per below.",
      ],
    },
    {
      title: "2.1 Before Dispatch (Standard Stock Items)",
      content: [
        "Cancellation may be accepted subject to:",
        "Written request before dispatch.",
        "10% order value deduction as administrative & handling charges.",
        "Refund processed within 15 working days.",
      ],
    },
    {
      title:
        "2.2 Before Dispatch (Non-Stock / Special Order / Custom Size EV Cables)",
      content: [
        "Orders for the following are non-cancellable:",
        [
          "Custom length EV charging cables.",
          "Armoured / XLPE / HT cables cut-to-length.",
          "Special rating / special brand specific material.",
          "Made-to-order accessories.",
        ],
        "If cancellation is accepted (at management discretion):",
        [
          "Full advance forfeiture OR",
          "Recovery of actual procurement + restocking charges.",
        ],
      ],
    },
    {
      title: "2.3 After Dispatch",
      content: [
        "No cancellation shall be accepted once material is dispatched.",
        "Transportation charges are non-refundable.",
      ],
    },
    {
      title: "3. Return Policy",
      content: [
        "Returns shall be accepted only under following conditions:",
        "Wrong material supplied by SPECTRA INFRATEL.",
        "Manufacturing defect (supported by inspection report).",
        "Material in original packing, unused, undamaged condition.",
        "Return request within 7 days of delivery.",
        "Approval must be obtained in writing before returning material.",
      ],
    },
    {
      title: "4. Non-Returnable Items",
      content: [
        "The following materials are strictly non-returnable:",
        [
          "Cut-length cables.",
          "Installed or uncoiled cables.",
          "Used connectors or EV gun assemblies.",
          "Damaged packing material.",
          "Clearance / discounted stock.",
          "Imported special order items.",
        ],
      ],
    },
    {
      title: "5. Refund Policy",
      content: [
        "Approved refunds shall be processed within 15–30 working days.",
        "Refund shall be made after:",
        [
          "Physical verification of returned material.",
          "Quality inspection clearance.",
          "Restocking charges minimum 20% applicable on approved returns.",
          "Freight charges both ways shall be borne by Buyer.",
        ],
      ],
    },
    {
      title: "6. Damaged in Transit",
      content: [
        "Any transit damage must be reported within 24 hours of delivery.",
        "Delivery challan must be signed “Received in damaged condition.”",
        "Claim shall be processed as per transporter insurance policy. See attachments for details.",
      ],
    },
  ];

  return (
    <div className="min-h-screen py-10 px-4 sm:px-6 lg:px-8">
      <div className="w-full mx-auto p-6 sm:p-10">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6 text-center">
          REFUND & CANCELLATION POLICY
        </h1>

        <div className="space-y-8">
          {sections.map((section, index) => (
            <div key={index}>
              <h2 className="text-lg sm:text-xl font-semibold text-primary mb-3">
                {section.title}
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 text-sm sm:text-base leading-relaxed">
                {section.content.map((item, i) =>
                  Array.isArray(item) ? (
                    <ul key={i} className="list-disc pl-6 space-y-1">
                      {item.map((sub, j) => (
                        <li key={j} className="text-gray-700">
                          {sub}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <li key={i}>{item}</li>
                  ),
                )}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
