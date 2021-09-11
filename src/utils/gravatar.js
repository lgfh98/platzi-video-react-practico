import md5 from "md5";

const gravatar = (email) => {
  const formattedEmail = email.trim().toLowerCase();
  const hash = md5(formattedEmail, { encoding: "binary" });
  return `https://gravatar.com/avatar/${hash}`;
};

export { gravatar };
