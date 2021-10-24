import "./MartButton.css";

interface Props {
  type: "emart" | "traders" | "homeplus" | "costco" | "emart-everyday";
  title: string;
  subTitle?: string;
}

export default function MartButton({ type, title, subTitle }: Props) {
  return (
    <div className={`${type} relative w-24 h-16 pt-2.5 pl-2 rounded-xl font-black`}>
        <h1 className="mart-button-title text-lg leading-none">{title}</h1>
        <h2 className="mart-button-subtitle -mt-1">{subTitle}</h2>
        <embed className="mart-button-logo absolute bottom-0 right-0 rounded-br-xl" src={`/logos/${type}.svg`}/>
    </div>
  );
}