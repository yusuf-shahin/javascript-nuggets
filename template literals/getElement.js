const getElement = (element) => {
  const item = document.querySelector(element);
  if (item) return item;
  throw new Error("not found");
};

export default getElement;
