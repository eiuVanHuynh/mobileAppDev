
export const mapContacts = (contact) => {
  const { name, picture, phone, cell, email } = contact;

  return {
    id: phone,
    name: name.first + ' ' + name.last,
    avatar: picture.large,
    phone,
    cell,
    email,
    favorite: Math.random() < 0.1,
  };
};
