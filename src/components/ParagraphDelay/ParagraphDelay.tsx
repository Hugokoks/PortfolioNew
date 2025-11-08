import FadeContent from "../FadeContent/FadeContent";

export default function ParagraphDelay({
  array,
}: {
  array: React.ReactNode[];
}) {
  return (
    <>
      {array.map((item, index) => (
        <FadeContent
          key={index}
          blur={true}
          duration={500}
          easing="ease-out"
          delay={index * 200}
          threshold={0.3}
        >
          {item}
        </FadeContent>
      ))}
    </>
  );
}
