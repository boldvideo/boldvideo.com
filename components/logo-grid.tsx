import Image from "next/image";

export function LogoGrid() {
  return (
    <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
      <Image
        src="/images/clients-logo-row.png"
        alt="Trusted by coaching programs including FounderWell, HRT University, Ranger International, VIVA, commercetools, Suora, The Feeling"
        width={500}
        height={80}
        className="h-12 w-auto opacity-70 md:h-16"
        priority={false}
      />
    </div>
  );
}
