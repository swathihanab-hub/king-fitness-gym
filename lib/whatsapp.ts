export function buildWhatsAppLink(msg: string): string {
  return `https://wa.me/918096187142?text=${encodeURIComponent(msg.trim())}`;
}

export const WA_MESSAGES = {
  general:
    "Hello King Fitness Gym, I would like to inquire about gym membership and facilities.",
  trial:
    "Hello King Fitness Gym, I would like to check if a trial session is currently available.",
  personalTraining:
    "Hello King Fitness Gym, I am interested in your Personal Training options.",
  programInquiry: (n: string) =>
    `Hello King Fitness Gym, I am interested in the ${n} program.`,
  planInquiry: (n: string) =>
    `Hello King Fitness Gym, I would like pricing details for the ${n} plan.`,
};
