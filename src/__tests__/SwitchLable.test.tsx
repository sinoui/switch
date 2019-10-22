import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import SwitchLabel from 'src/SwitchLabel';
import TestWrapper from './TestWrapper';

describe('SwitchLabel 镜像测试', () => {
  it('渲染SwitchLabel', () => {
    const tree = renderer
      .create(
        <TestWrapper>
          <SwitchLabel />
        </TestWrapper>,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('不可用状态', () => {
    const tree = renderer
      .create(
        <TestWrapper>
          <SwitchLabel disabled />
        </TestWrapper>,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('选中状态', () => {
    const tree = renderer
      .create(
        <TestWrapper>
          <SwitchLabel checked color="accent" />
        </TestWrapper>,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
