type BrandLogoProps = {
  className?: string;
  labelClassName?: string;
  name: string;
};

export default function BrandLogo({
  className = "h-8 w-8",
  labelClassName = "font-semibold tracking-tight text-lg",
  name,
}: BrandLogoProps) {
  return (
    <span className="flex items-center gap-2">
      <img
        src="/icon0.svg"
        alt="Clearnode logo"
        className={`${className} rounded-md object-contain`}
      />
      <span className={labelClassName}>{name}</span>
    </span>
  );
}
