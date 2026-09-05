import { Reveal } from "./Reveal";
import { cx } from "@/lib/utils";

interface SectionHeadingProps {
  kicker: string;
  title: string;
  /** Optional id so the section can use aria-labelledby. */
  id?: string;
  description?: string;
  className?: string;
}

/**
 * Standard section header: ember kicker, display headline, optional
 * supporting line. The h2 must be the section's only h2.
 */
export function SectionHeading({
  kicker,
  title,
  id,
  description,
  className,
}: SectionHeadingProps) {
  return (
    <Reveal className={cx("max-w-3xl", className)}>
      <p className="kicker">{kicker}</p>
      <h2 id={id} className="section-title mt-5">
        {title}
      </h2>
      {description ? (
        <p className="mt-6 max-w-xl text-sm leading-relaxed text-ash">
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}
