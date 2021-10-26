import { styled } from "@compiled/react";

interface Props {
  title: string;
}

export default function TitleHeader({ title }: Props) {
  return (
    <Header>
        <HeaderIcon />
        <span>{title}</span>
    </Header>
  );
}

const Header = styled.div`
    display: flex;
    align-items: center;
    padding: 1.5rem;

    span {
        padding-left: 0.4rem;
        color: #888888;
        font-weight: 500;
    }
`;

const HeaderIcon = styled.div`
    border: 2px solid #888888;
    border-radius: 1rem;
    height: 0.4rem;
`;