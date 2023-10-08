import { MovieDataDetail } from "@/utilities";
import { Details } from "@/styles";

const S = { Details };

interface ModalProps {
  data?: MovieDataDetail;
}

const Modal = ({ data }: ModalProps) => {
  return (
    <S.Details>
      <h3>{data?.title}</h3>
      <p>{data?.overview}</p>
      <ul>
        {data?.genres?.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </S.Details>
  );
};

export default Modal;
