import Tag from '../Tag'
import { Card, Descricao, Titulo } from './styles'

const Product = () => (
  <Card>
    <img src="//placehold.it/222x250" alt="" />
    <Titulo>Nome do jogo</Titulo>
    <Tag>Categoria</Tag>
    <Tag>Windows</Tag>
    <Descricao>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde, doloremque
      fuga error, eligendi aliquam totam autem nobis placeat, numquam neque
      veniam iure in doloribus voluptatum ipsam. Illum officia labore dolorum.
    </Descricao>
  </Card>
)

export default Product
