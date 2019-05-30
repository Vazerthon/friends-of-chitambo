import Image from 'gatsby-image';
import styled from 'styled-components';

export default styled(Image)`
  margin: ${({ theme }) => theme.spacing.units(1)};
  margin-right: ${({ theme }) => theme.spacing.units(3)};
  border: 1px solid ${({ theme }) => theme.colour.secondary};
  float: left;
  shape-outside: circle();
  width: 100px;
  height: 100px;
  min-width: 100px;
  min-height: 100px;
  max-width: 100px;
  max-height: 100px;
  border-radius: 50px;
`;
