import styled from 'styled-components';

const SwitchTrack = styled.span<{ disabled?: boolean; checked?: boolean }>`
  width: 100%;
  height: 100%;
  opacity: ${(props) => (props.theme.palette.type === 'light' ? 0.38 : 0.3)};
  z-index: -1;
  transition: ${(props) =>
    props.theme.transitions.create(['opacity', 'background-color'], {
      duration: props.theme.transitions.duration.shortest,
    })};
  border-radius: 7px;
  background-color: ${(props) =>
    props.theme.palette.type === 'light'
      ? props.theme.palette.black
      : props.theme.palette.white};
`;

export default SwitchTrack;
