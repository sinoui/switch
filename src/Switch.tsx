import React from 'react';
import styled from 'styled-components';
import classNames from 'classnames';
import SwitchTrack from './SwitchTrack';
import SwitchBase from './SwitchBase';

interface SwitchProps {
  color?: string;
  disabled?: boolean;
  checked?: boolean;
  value: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Wrapper = styled.span`
  width: 58px;
  height: 38px;
  display: inline-flex;
  padding: 12px;
  z-index: 0;
  overflow: hidden;
  position: relative;
  box-sizing: border-box;
  flex-shrink: 0;
  vertical-align: middle;
  cursor: pointer;
`;

export default function Switch(props: SwitchProps) {
  return (
    <Wrapper className={classNames('sinoui-switch')}>
      <SwitchBase {...props} />
      <SwitchTrack className="sinoui-switch-track" />
    </Wrapper>
  );
}
