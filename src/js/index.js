// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';
import{printList} from './printList';

const ThemesElement = document.getElementById('themes');

ThemesElement.addEventListener('change', e => printList(e.target.value));
