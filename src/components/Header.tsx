import { useEffect, useState } from "react";
import { MdWbSunny } from "react-icons/md";

export default function Header() {
  const calculateTime = () => {
    const now = new Date();
    return `${now.getHours() < 12 ? "0" : ""}${now.getHours()}:${now.getMinutes()}`;
  }

  const [time, setTime] = useState(calculateTime());

  useEffect(() => {
    let secTimer = setInterval(() => setTime(calculateTime), 1000);
    return () => clearInterval(secTimer);
  });

  return (
    <div className="flex rounded-br-3xl bg-white p-5">
        <h1 className="flex-auto text-2xl font-black">오늘 마트 여나요?</h1>
        <p className="flex-auto text-right text-sm m-auto">
            현재 시각 {time} <MdWbSunny />
        </p>
    </div>
  );
}