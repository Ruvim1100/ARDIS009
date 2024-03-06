import useMediaQuery from '@/hooks/useMediaQuery';
import { SelectedPage } from '@/shared/types'

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
};

const home = ({setSelectedPage}: Props) => {
  return (
    <section
    id='главная'
    >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Odio animi ullam sed temporibus nostrum laudantium suscipit sint rem optio ex alias, quisquam quidem eos eaque, 
        eligendi modi necessitatibus aliquid molestiae.
    </section>
  ) 
}

export default home