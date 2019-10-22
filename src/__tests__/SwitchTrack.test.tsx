import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import SwitchTrack from 'src/SwitchTrack';
import TestWrapper from './TestWrapper';

describe('SwitchTrack 镜像测试', () => {
  it('渲染 SwitchTrack', () => {
    const tree = renderer
      .create(
        <TestWrapper>
          <SwitchTrack />
        </TestWrapper>,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('不可用的SwitchTrack', () => {
    const tree = renderer
      .create(
        <TestWrapper>
          <SwitchTrack disabled />
        </TestWrapper>,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('选中状态的SwitchTrack', () => {
    const tree = renderer
      .create(
        <TestWrapper>
          <SwitchTrack checked color="info" />
        </TestWrapper>,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
