import { HeaderProps } from "../types.ts";

export const Header = (props: HeaderProps) => {
    const { title } = props;
    return <h1>{title}</h1>;
}