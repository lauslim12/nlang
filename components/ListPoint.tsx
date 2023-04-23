import { ListIcon, ListItem, type SystemProps } from '@chakra-ui/react';
import { memo, type ReactNode } from 'react';
import type { IconType } from 'react-icons/lib';

interface ListItemProps {
  color: SystemProps['color'];
  icon: IconType;
  children: ReactNode;
}

const ListPoint = ({ color, icon, children }: ListItemProps) => (
  <ListItem>
    <ListIcon as={icon} color={color} />
    {children}
  </ListItem>
);

export default memo(ListPoint);
