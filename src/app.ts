import '../app.css';
import { onMount } from 'svelte';
let darkmode = 'true';
onMount(() => {
	var allElements = document.getElementsByTagName('*');
	// @ts-ignore
	for (let element of allElements) {
		element.style.opacity = 1;
	}
	document.documentElement.classList.add('bg-white');
	document.documentElement.classList.add('dark:bg-slate-800');
	if (window.localStorage.getItem('darkmode') === null) {
		window.localStorage.setItem('darkmode', 'true');
		document.documentElement.classList.add('dark');
	} else {
		if (window.localStorage.getItem('darkmode') === 'true') {
			document.documentElement.classList.add('dark');
		}
	}
});

function darkToggle() {
	if (window.localStorage.getItem('darkmode') === 'true') {
		window.localStorage.setItem('darkmode', 'false');
		document.documentElement.classList.remove('dark');
		
	} else if (window.localStorage.getItem('darkmode') === 'false') {
		window.localStorage.setItem('darkmode', 'true');
		document.documentElement.classList.add('dark');
	}
}
