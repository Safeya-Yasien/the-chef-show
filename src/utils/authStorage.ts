export const getRegisteredEmails = (): string[] => {
  return JSON.parse(localStorage.getItem("registeredEmails") || "[]");
};

export const addRegisteredEmail = (email: string) => {
  const emails = getRegisteredEmails();
  if (!emails.includes(email)) {
    emails.push(email);
    localStorage.setItem("registeredEmails", JSON.stringify(emails));
  }
};

export const checkEmailExists = (email: string): boolean => {
  const emails = getRegisteredEmails();
  return emails.includes(email);
};
