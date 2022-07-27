import { createRoot } from 'react-dom/client';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { setTranslations, setLocale } from 'react-i18nify';
import config from 'react-global-configuration';
import 'styles/index.scss';
import App from "./App"

const theme = createTheme({
	palette: {
		primary: {
			main: "#110091",
		},
	},
});

config.set(require("../config/config.json"));
setTranslations(require("../res/locales/wording.json"));
setLocale(config.get("lang"));

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<ThemeProvider theme={theme}><App tab="home" /></ThemeProvider>);
