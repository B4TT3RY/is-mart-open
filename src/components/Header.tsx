import { WbSunny } from "@mui/icons-material";

export default function Header() {
  return (
    <div className="flex rounded-br-3xl bg-white p-5">
        <h1 className="flex-auto text-2xl font-black">오늘 마트 여나요?</h1>
        <p className="flex-auto text-right text-sm m-auto">
            현재 시각 오전 11:23 <WbSunny fontSize="inherit" />
        </p>
    </div>
  );
}