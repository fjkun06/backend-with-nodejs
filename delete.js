export function deleteAddress(addresses, id) {
  const parseId = parseInt(id, 10);
  const filterAddresses = addresses.filter((address) => address.id !== parseId);
  return filterAddresses;
}
