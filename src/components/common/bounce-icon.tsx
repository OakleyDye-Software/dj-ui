import { styled } from '@mui/system';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const BouncingIcon = styled(KeyboardArrowDownIcon)({
  animation: `$bounce 2s infinite`,
  '@keyframes bounce': {
    '0%, 20%, 50%, 80%, 100%': {
      transform: 'translateY(0)',
    },
    '40%': {
      transform: 'translateY(-30px)',
    },
    '60%': {
      transform: 'translateY(-15px)',
    },
  },
});

export default BouncingIcon;