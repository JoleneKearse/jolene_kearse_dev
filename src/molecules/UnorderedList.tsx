import { Link } from "../atoms/Link";

type UnorderedListProps = {
  text: string;
};

export function UnorderedList({ text }: UnorderedListProps) {
  return (
    <ul>
      <li>
        <Link text={text} />
      </li>
    </ul>
  )
}