import MartButton from './MartButton'

interface Props {
  type: "emart" | "traders" | "homeplus" | "costco" | "emart-everyday";
  name: string;
  status: string;
}

export default function VisitedMart({ type, name, status }: Props) {
  return (
    <div className="flex rounded-xl bg-gray-100">
        <MartButton type={type} title="트레이더스" subTitle="이마트" />
        <h1 className="text-xl text-gray-600 m-2">
            <span className="font-bold">{name}</span>
            <span className="font-regular">은 </span>
            <span className="font-black text-green-300">{status}</span>
        </h1>
    </div>
  );
}