const removeTagPFromDesc = (desc: string | undefined) => {
  if (desc) {
    return desc.replace(/[<p></p>]/g, '');
  }
};

export { removeTagPFromDesc };
