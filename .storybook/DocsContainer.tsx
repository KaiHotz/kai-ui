import React, { FC, ReactNode } from 'react';
import cx from 'clsx';
import { DocsContainer as BaseContainer, DocsContainerProps } from "@storybook/addon-docs";
import { useDarkMode } from "storybook-dark-mode";
import { themes } from "@storybook/theming";

interface IDocsContainerProps extends DocsContainerProps {
  children: ReactNode
}

export const DocsContainer: FC<IDocsContainerProps> = ({ children, ...rest }) => {
  const dark = useDarkMode();

  return (
    <BaseContainer
      {...rest}
      theme={dark ? themes.dark : themes.light}
    >
      <div className={cx({'ui-docs-story--dark': dark, 'ui-docs-story--light': !dark} )}>
        {children}
      </div>
    </BaseContainer>
  );
};
