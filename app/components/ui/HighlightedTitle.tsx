import { Title, type TitleProps } from "@mantine/core";

interface HighlightedTitleProps extends Omit<TitleProps, "children"> {
  title: string;
  highlight?: string;
}

/** A heading whose trailing `highlight` is painted with the brand gradient. */
export function HighlightedTitle({ title, highlight, ...props }: HighlightedTitleProps) {
  return (
    <Title {...props}>
      {title}
      {highlight && (
        <>
          {" "}
          <span className="arbora-gradient-text">{highlight}</span>
        </>
      )}
    </Title>
  );
}
