export type ScenarioCitation = { title: string; timestamp: string };

export type CustomerScenario = {
  id: string;
  customer: {
    icon: string;
    title: string;
    count: string;
  };
  question: string;
  context: string;
  /** Answer rendered as HTML so the inline <strong> emphasis matches the demo. */
  answerHtml: string;
  /** Plain-text version of the answer for schema and accessibility. */
  answerText: string;
  citations: ScenarioCitation[];
};

export const customerScenarios: CustomerScenario[] = [
  {
    id: "founderwell",
    customer: {
      icon: "/images/chaticon-founderwell.png",
      title: "Ask FounderWell",
      count: "1,400 videos",
    },
    question:
      "I just crossed $40k MRR but my net revenue churn is 8%. Is that a pricing problem or a retention problem?",
    context: "SaaS founder · $40k MRR · growth stage",
    answerHtml:
      "<strong>At your MRR, 8% net churn almost always traces back to pricing architecture.</strong> Two diagnostics: are you charging on a value metric that grows with the customer? And do you have expansion paths built in? If the average account stays flat after signup, you've got a pricing ceiling, not a retention problem. <strong>Fix the metric before you fix the funnel.</strong>",
    answerText:
      "At your MRR, 8% net churn almost always traces back to pricing architecture. Two diagnostics: are you charging on a value metric that grows with the customer? And do you have expansion paths built in? If the average account stays flat after signup, you've got a pricing ceiling, not a retention problem. Fix the metric before you fix the funnel.",
    citations: [
      { title: "Value Metric Design", timestamp: "14:23" },
      { title: "Churn Diagnosis", timestamp: "08:47" },
      { title: "Expansion Revenue", timestamp: "22:15" },
    ],
  },
  {
    id: "hrtu",
    customer: {
      icon: "/images/chaticon-hrtupearl.png",
      title: "Ask Pearl",
      count: "300 videos",
    },
    question:
      "Patient is 52, post-menopausal, elevated liver enzymes. She's requesting oral estradiol — what's the prescribing pathway?",
    context: "HRT practitioner · prescribing · intermediate",
    answerHtml:
      "<strong>Elevated liver enzymes change the prescribing pathway.</strong> Oral estradiol undergoes first-pass hepatic metabolism, which is the concern here. The decision tree in Module 8 covers the specific ALT/AST thresholds that trigger the switch to transdermal. <strong>Start there before the prescribing decision.</strong>",
    answerText:
      "Elevated liver enzymes change the prescribing pathway. Oral estradiol undergoes first-pass hepatic metabolism, which is the concern here. The decision tree in Module 8 covers the specific ALT/AST thresholds that trigger the switch to transdermal. Start there before the prescribing decision.",
    citations: [
      { title: "Liver Panels", timestamp: "18:42" },
      { title: "Transdermal Protocols", timestamp: "11:15" },
      { title: "Prescribing Pathways", timestamp: "25:08" },
    ],
  },
  {
    id: "viva",
    customer: {
      icon: "/images/chaticon-viva.png",
      title: "Ask Viva Tuition",
      count: "2,500 videos",
    },
    question:
      "Working on a consolidation where the parent acquired 80% mid-year. How do I split pre- and post-acquisition profits?",
    context: "ACCA trainee · consolidation · advanced",
    answerHtml:
      "<strong>Split the subsidiary's profit at the acquisition date.</strong> Pre-acquisition profits feed into retained earnings and the goodwill calc. Only post-acquisition profits get consolidated into the group P&L — use time apportionment. <strong>Most common exam error is consolidating the full year.</strong>",
    answerText:
      "Split the subsidiary's profit at the acquisition date. Pre-acquisition profits feed into retained earnings and the goodwill calc. Only post-acquisition profits get consolidated into the group P&L — use time apportionment. Most common exam error is consolidating the full year.",
    citations: [
      { title: "Mid-Year Acquisitions", timestamp: "22:15" },
      { title: "Goodwill Calculation", timestamp: "14:30" },
      { title: "Group P&L", timestamp: "38:42" },
    ],
  },
];
