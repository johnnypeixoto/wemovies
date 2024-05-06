import { Container } from "./styles";
import { CardMessage } from "../../components/CardMessage";
import refresh from "../../assets/refresh.svg";
import { useNavigate } from "react-router-dom";

export function NotFoundPage() {
  const navigate = useNavigate();
  return (
    <Container>
      <CardMessage.Root>
        <CardMessage.Container>
          <CardMessage.Text text="404 Página não encontrada :(" />
          <CardMessage.Image
            src={refresh}
            alt="Compra finalizada"
            className="card-message-image-size-control"
          />
          <CardMessage.Actions>
            <CardMessage.Action
              text="Recarregar página inícial"
              onClick={() => navigate("/")}
            />
          </CardMessage.Actions>
        </CardMessage.Container>
      </CardMessage.Root>
    </Container>
  );
}
