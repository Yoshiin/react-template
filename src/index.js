import ReactDOM from 'react-dom';
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

ReactDOM.render(<ThemeProvider theme={theme}><App /></ThemeProvider>, document.getElementById('root'));
