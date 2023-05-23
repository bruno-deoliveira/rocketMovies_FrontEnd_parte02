import { Container } from "./style";

export function ButtonText({ icon: Icon, isActive = false, title, ...rest }) {
  return (
    <Container type="button" isActive={isActive} {...rest}>
      {Icon && <Icon size={20} />}
      {title}
    </Container>
  );
}
