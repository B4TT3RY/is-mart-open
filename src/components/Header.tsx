import { styled } from "@compiled/react";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { MdSchedule } from "react-icons/md";

export default function Header() {
  const calculateTime = () => {
    let current = dayjs(new Date()).format("DD일 A hh:mm");
    current = current.replace("AM", "오전");
    current = current.replace("PM", "오후");
    return current;
  }

  const [time, setTime] = useState(calculateTime());

  useEffect(() => {
    let secTimer = setInterval(() => setTime(calculateTime), 1000);
    return () => clearInterval(secTimer);
  });

  return (
    <Title>
        <h1>오늘 마트 여나요?</h1>
        <p><MdSchedule />&nbsp;{time}</p>
    </Title>
  );
}

const Title = styled.div`
  background-color: white;
  display: flex;
  flex-wrap: wrap;
  flex: 1 1 auto;
  border-bottom-right-radius: 1.5rem;
  padding: 1.5rem;

  h1 {
    margin: 0;
    font-size: 1.5rem;
    font-weight: 800;
  }

  p {
    display: flex;
    align-items: center;
    margin: auto 0 auto auto;
    font-size: 0.875rem;
    color: #888888;
  }
`;