import * as S from './styles'
import { Text } from '../../components/Text'

const Main = () => {
  return (
    <S.Wrapper>
      <S.Content>
        <S.Header>
          <Text size="huge" weight="bold">
            cnfreitax
          </Text>

          <Text size="small" as="strong">
            Victor Freitas - web developer at{' '}
            <span style={{ textDecoration: 'italic', color: 'var(--red)' }}>
              RedFox
            </span>
          </Text>
        </S.Header>
      </S.Content>
    </S.Wrapper>
  )
}

export default Main
