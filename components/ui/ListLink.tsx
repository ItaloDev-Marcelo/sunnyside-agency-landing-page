import { ListLinkT } from '../../types/ListT'

export const ListLink = ({title, link}:ListLinkT) => {
  return (
    <li className="my-2 xl:my-0 xl:mx-6">
        <a href={`#${link}`}>{title}</a>
    </li>
  )
}
