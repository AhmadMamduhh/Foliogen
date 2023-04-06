import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { createTheme } from '@mui/material/styles';

export const colors = {
	green25: '#E7EFED',
	green50: '#9FBFB6',
	green100: '#106048',
	green200: '#0D4D3A',
	gray25: '#F7F8F8',
	gray50: '#F5F6F5',
	gray100: '#E7E7E7',
	gray200: '#CFCFCF',
	gray400: '#A0A0A0',
	gray600: '#707070',
	gray800: '#414141',
	red25: '#FFEDED',
	red50: '#FFB8B8',
	red100: '#FF4D4E',
	red200: '#CC3E3E',
	yellow25: '#FEF8ED',
	yellow50: '#FAE4B8',
	yellow100: '#FFD233',
	yellow200: '#F3BC4E',
	warmGreen: '#D9DAD2',
	white: '#ffffff',
	darkGrey: '#111111',
};

const defaultTheme = createTheme();

const shadows = defaultTheme.shadows;
shadows['1'] = '4px 4px 4px rgba(0, 0, 0, 0.25)';
shadows['2'] = '4px 4px 4px rgba(0, 0, 0, 0.15)';
shadows['3'] = '4px 4px 4px rgba(0, 0, 0, 0.1)';

declare module '@mui/material/Button' {
	interface ButtonPropsVariantOverrides {
		primary: true;
		secondary: true;
		contained: true;
		danger: true;
		outlined: true;
		link: true;
		linkUnderlined: true;
	}
}

export const theme = createTheme({
	palette: {
		background: {
			default: colors.gray200,
		},
		primary: {
			main: colors.green100,
			contrastText: colors.white,
		},
		secondary: {
			main: colors.white,
		},
		error: {
			main: colors.red200,
		},
		warning: {
			main: colors.yellow200,
		},
		success: {
			main: colors.green50,
		},
		info: {
			light: colors.white,
			main: colors.darkGrey,
		},
	},
	shadows,
	typography: {
		fontFamily: ['Nunito Sans', 'sans-serif'].join(','),

		h1: {
			fontWeight: 800,
			fontSize: '2rem',
		},
		h2: {
			fontWeight: 800,
			fontSize: '1.75rem',
		},
		h3: {
			fontWeight: 700,
			fontSize: '1.5rem',
		},
		h4: {
			fontWeight: 800,
			fontSize: '1.25rem',
		},
		h5: {
			fontWeight: 700,
			fontSize: '1.125rem',
		},
		h6: {
			fontWeight: 700,
			fontSize: '1.25rem',
		},
		subtitle1: {
			fontSize: '1rem',
			fontWeight: 700,
		},
		subtitle2: {
			fontSize: '1rem',
			fontWeight: 800,
		},
		body1: {
			fontWeight: 400,
			fontSize: '1rem',
		},
		body2: {
			fontWeight: 600,
			fontSize: '0.813rem',
		},
		caption: {
			fontSize: '0.75rem',
			fontWeight: 600,
		},
		button: {
			fontWeight: 800,
			fontSize: '0.875',
			textTransform: 'uppercase',
		},
	},
	components: {
		MuiButton: {
			styleOverrides: {
				root: {
					borderRadius: 5,
					boxShadow: 'none',
					'&:hover': {
						boxShadow: shadows['0'],
					},
				},
			},
		},
		MuiTypography: {
			styleOverrides: {
				root: {
					textAlign: 'center',
					color: colors.darkGrey,
				},
			},
		},
		MuiListItem: {
			styleOverrides: {
				root: {
					'&:hover': {
						backgroundColor: colors.green50,
					},
				},
			},
		},
	},
});

export const defaultFieldInputProps = { disableUnderline: true };
export const defaultFieldSelectProps = {
	autoWidth: true,
	IconComponent: ExpandMoreIcon,
};
