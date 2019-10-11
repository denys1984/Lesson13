var numbSections = 5;

function buildPage(numbSections) {
	this.data = {
		sections : numbSections
	};
	this.template = [];
	this.methods = {
		createButton: () => {
			this.template.push(
			`<div class="menu-link">
			<span></span>
			<span></span>
			<span></span>
			</div>`
			);
		},
		createSection: () => {
			for (let i = 1; i <= this.data.sections; i++) {
				this.template.push(
					`<section id="section-${i}">
					<h2> Section ${i} </h2>
					</section>`
				)
			}	
		},
		createMenu: () => {
			var menuItems = [];
			for (let i = 1; i <= this.data.sections; i++) {
				menuItems.push(
					`<li><a href="#section-${i}"> Section-${i} </a></li>`
				)
			}
			this.template.push(`
			<menu>
				<a class="close-btn">&times;</a>
				<ul>
					${menuItems.join(' ')}
				</ul>
			</menu>
			`);
		},
		compound: () => {
			console.log(this.template);
			document.querySelector('#wrapper').innerHTML = this.template.join(' ');
		}

	};	
	this.render = () => {
		this.methods.createButton();
		this.methods.createSection();
		this.methods.createMenu();
		this.methods.compound();
	}
	return this.render();
}

buildPage(numbSections);


var menuLink = document.querySelector('.menu-link'),
	menu = document.querySelector('menu'),
	close = document.querySelector('.close-btn');

	menuLink.onclick = function() {
		menu.classList.toggle('menu-active');
	};

	close.onclick = function() {
		menu.classList.toggle('menu-active');
	};

