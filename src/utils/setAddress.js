export const setAddress = ({city,country,district,name,timezone,isoCountryCode,region,street,subregion,postalCode}) => {

  const Name = `${name === "Unnamed Road" ? "" : name}`;
  const Street = `${street === null||street === "Unnamed Road" ? "" : ` ${street}`}`;
  const City = `${city === null ? "" : ` ${city}`}`;
  const District = `${district === null ? "" : `, ${district}`}`;
  const Subregion = `${subregion === null ? "" : `, ${subregion}`}`;
  const Region = `${region === null ? "" : `, ${region}`}`;
  const PostalCode=`${postalCode === null ? "" : `, PIN ${postalCode}`}`;
  const Address = `${Name}${Street}${City}${District}${Subregion}${Region}${PostalCode}`
  return Address;
}