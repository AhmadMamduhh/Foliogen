import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import * as locales from '@mui/material/locale';
import { createTheme } from '@mui/material/styles';
import { t } from 'i18next';
import { useState, useMemo, useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter as Router } from 'react-router-dom';
import { toast } from 'react-toastify';
import { prefixer } from 'stylis';
import rtlPlugin from 'stylis-plugin-rtl';
import { theme } from 'ui';
import './index.css';

const App: React.FC = () => {
	const [locale, setLocale] = useState<string>('enUS');

	const queryClient = new QueryClient({
		defaultOptions: {
			queries: {
				refetchOnWindowFocus: false,
			},
		},
	});

	const handleLanguageChange = (language: string) => {
		setLocale(language);
	};

	const themeWithLocale = useMemo(
		// @ts-expect-error
		// eslint-disable-next-line import/namespace
		() => createTheme(theme, { ...locales[locale], direction: locale === 'arEG' ? 'rtl' : 'ltr' }),
		[locale]
	);

	const cacheMuiDirection = useMemo(
		() =>
			createCache({
				key: 'muiltr',
				stylisPlugins: locale === 'arEG' ? [prefixer, rtlPlugin] : [],
			}),
		[locale]
	);

	// Handling user authentication
	const [isTokenLoaded, setIsTokenLoaded] = useState<boolean>(false);

	return (
		<CacheProvider value={cacheMuiDirection}>
			<ThemeProvider theme={themeWithLocale}>
				<CssBaseline />
				<Router>
					<QueryClientProvider client={queryClient}>
						<>Foliogen</>
					</QueryClientProvider>
				</Router>
			</ThemeProvider>
		</CacheProvider>
	);
};
export default App;
