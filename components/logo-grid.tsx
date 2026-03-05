import Image from "next/image";

export function LogoGrid() {
  return (
    <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
      <Image
        src="/images/clients-logo-row.png"
        alt="Trusted by Ranger International, VIVA, commercetools, Founderwell, Suora, The Feeling"
        width={500}
        height={80}
        className="h-12 w-auto opacity-70 md:h-16"
        priority={false}
      />
    </div>
  );
}
