import { Link } from "@remix-run/react";
import { AddressIcon } from "./AddressIcon";

export function AddressItem({ address }) {
  return (
    <Link to={`/address/${address}`} className="flex text-white no-underline group">
      <AddressIcon address={address} />
      <div className="font-mono ml-2 text-ellipsis overflow-hidden border-b border-b-gray-500 group-hover:border-b-white">{address}</div>
    </Link>
  );
}
