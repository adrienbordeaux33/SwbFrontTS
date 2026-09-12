const sections = [
    {
        id: "actus",
        number: "01",
        title: "Les actus",
        description: "Retrouvez les entraînements, événements et rendez-vous du collectif.",
        action: "Découvrir les actus",
    },
    {
        id: "contact",
        number: "02",
        title: "Nous contacter",
        description: "Une question, une envie de participer ? Échangeons autour du workout.",
        action: "Prendre contact",
    },
    {
        id: "adhesions",
        number: "03",
        title: "Adhésions",
        description: "Rejoignez Street Workout Bordeaux et progressez avec la communauté.",
        action: "Rejoindre le club",
    },
    {
        id: "athletes",
        number: "04",
        title: "Nos athlètes",
        description: "Découvrez celles et ceux qui font vivre le mouvement bordelais.",
        action: "Voir les athlètes",
    },
];
const cardsMarkup = sections
    .map(({ id, number, title, description, action }) => `
			<a class="nav-card" href="#${id}">
				<span class="card-content">
					<strong>${title}</strong>
					<span>${description}</span>
				</span>
				<span class="card-action">${action}<span aria-hidden="true">↗</span></span>
			</a>`)
    .join("");
const contactLinksMarkup = `
				<div class="contact-links" aria-label="Coordonnées de Street Workout Bordeaux">
					<a href="mailto:streetworkoutbordeaux@hotmail.com">
						<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 5h18v14H3z" /><path d="m3 6 9 7 9-7" /></svg>
						<span>streetworkoutbordeaux@hotmail.com</span>
					</a>
					<a href="tel:0618322149">
						<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.6 3.5 9 3l2 5-2.2 1.5a15.5 15.5 0 0 0 5.7 5.7L16 13l5 2 .5 2.4c.2 1.2-.7 2.3-1.9 2.4C11.2 20.5 3.5 12.8 3.7 4.4c.1-1.2 1.2-2.1 2.9-.9Z" /></svg>
						<span>06 18 32 21 49</span>
					</a>
					<a href="https://www.instagram.com/streetworkoutbordeaux/" target="_blank" rel="noreferrer">
						<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" /></svg>
						<span>Instagram</span>
					</a>
					<a href="https://www.facebook.com/groups/StreetWorkoutBordeaux/?locale=fr_FR" target="_blank" rel="noreferrer">
						<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 21v-8h2.7l.4-3H14V8.1c0-.9.3-1.6 1.7-1.6h1.8V3.8c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.5-4 4.1V10H8.4v3h2.7v8" /></svg>
						<span>Facebook</span>
					</a>
				</div>`;
const adhesionLinkMarkup = `
				<a class="adhesion-link" href="https://www.helloasso.com/associations/street-workout-bordeaux/adhesions/adhesion-association-swb-2026-2027" target="_blank" rel="noreferrer">
					<span>Adhérer sur HelloAsso</span>
					<span aria-hidden="true">↗</span>
				</a>`;
const newsMarkup = `
				<div class="news-list" aria-label="Actualités de Street Workout Bordeaux">
					<article class="news-item news-item-upcoming">
						<div class="news-meta"><span>Prochain training</span><span>Dimanche 13 septembre 2026</span></div>
						<h3>Training au spot Queyries</h3>
						<p>Retrouvez-nous au spot Queyries à partir de 14h pour un nouvel entraînement Street Workout.</p>
						<address>21 parc d'activités des Queyries, 33000 Bordeaux</address>
					</article>
					<article class="news-item">
						<div class="news-meta"><span>15 août 2026</span><span>Riga, Lettonie</span></div>
						<h3>La France en haut du podium</h3>
						<p>Le président de l'association, Adrien, représentait la France lors des Calisthenics World Championships et réalise l'exploit de monter sur la plus haute marche du podium.</p>
						<a class="news-link" href="https://www.instagram.com/p/DcIzWpFRtUI/" target="_blank" rel="noreferrer">Voir le récap <span aria-hidden="true">↗</span></a>
					</article>
					<article class="news-item">
						<div class="news-meta"><span>6 &amp; 7 septembre 2026</span><span>Montgeron, France</span></div>
						<h3>34 médailles pour la Team SWB</h3>
						<p>La Team SWB a fait le déplacement pour les championnats de France et remporte 34 médailles, dont 10 en or !</p>
						<a class="news-link" href="https://www.instagram.com/p/DdErvvnRjtM/" target="_blank" rel="noreferrer">Voir le récap <span aria-hidden="true">↗</span></a>
					</article>
				</div>`;
const activeAthletes = [
    {
        handle: "valentina__mhs",
        url: "https://www.instagram.com/valentina__mhs/",
    },
    { handle: "bolowofficiel", url: "https://www.instagram.com/bolowofficiel/" },
    {
        handle: "adrien_swb_poolska",
        url: "https://www.instagram.com/adrien_swb_poolska/",
    },
    { handle: "ryansaleh04", url: "https://www.instagram.com/ryansaleh04/" },
    { handle: "jesuisarnaud", url: "https://www.instagram.com/jesuisarnaud/" },
    { handle: "papach988", url: "https://www.instagram.com/papach988/" },
    { handle: "swsofyane", url: "https://www.instagram.com/swsofyane/" },
    { handle: "allanld1", url: "https://www.instagram.com/allanld1/" },
];
const reserveAthletes = [
    { handle: "thibault_sw", url: "https://www.instagram.com/thibault_sw/" },
    { handle: "bboybachir", url: "https://www.instagram.com/bboybachir/" },
    { handle: "ramba_sw", url: "https://www.instagram.com/ramba_sw/" },
    { handle: "raf_swb", url: "https://www.instagram.com/raf_swb/" },
];
const athleteLinksMarkup = (athletes) => athletes
    .map(({ handle, url }) => `
					<a class="athlete-link" href="${url}" target="_blank" rel="noreferrer">
						<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" /></svg>
						<span>@${handle}</span>
						<span class="athlete-arrow" aria-hidden="true">↗</span>
					</a>`)
    .join("");
const athletesMarkup = `
				<div class="athlete-groups" aria-label="Athlètes de Street Workout Bordeaux">
					<div class="athlete-group">
						<h3>Actifs</h3>
						<div class="athlete-list">${athleteLinksMarkup(activeAthletes)}</div>
					</div>
					<div class="athlete-group athlete-group-reserve">
						<h3>Réserve</h3>
						<div class="athlete-list">${athleteLinksMarkup(reserveAthletes)}</div>
					</div>
				</div>`;
const detailMarkup = sections
    .map(({ id, title, description }) => `
			<section class="detail-section" id="${id}">
				<p class="eyebrow">Street Workout Bordeaux</p>
				<h2>${title}</h2>
				<p>${description}</p>
				${id === "actus" ? newsMarkup : ""}
				${id === "contact" ? contactLinksMarkup : ""}
				${id === "adhesions" ? adhesionLinkMarkup : ""}
				${id === "athletes" ? athletesMarkup : ""}
			</section>`)
    .join("");
document.body.innerHTML = `
	<main class="page-shell">
		<div class="background-mark" aria-hidden="true"></div>
		<section class="hero" id="top">
			<div class="hero-copy">
				<p class="eyebrow">Association sportive loi 1901· Since 2014</p>
				<h1>Street<br /><em>Workout</em><br />Bordeaux</h1>
			</div>
		</section>

		<nav class="card-grid" aria-label="Navigation principale">
			${cardsMarkup}
		</nav>

		<div class="details">${detailMarkup}</div>
	</main>
`;
export {};
//# sourceMappingURL=app.js.map