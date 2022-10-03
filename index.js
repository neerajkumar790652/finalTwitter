const mainPage = document.querySelector('.main-page');
const loginPage = document.querySelector('.login-page');
const middleContent = document.querySelector('.middle-content');
const btnTop = document.querySelector('.btn-top');
const newsFeedPage = document.querySelector('.feeds-page');
const loginModel = document.querySelector('.login-model');
const modelX = document.querySelector('.login-model i');
const loginFormBtn = document.querySelector('.login-form-btn');
const postBtn = document.querySelector('.post-btn');
const modelWrapper = document.querySelector('.model-wrapper');
const model = document.querySelector('.model');
const postModelX = document.querySelector('.model-header i');
const modelPostBtn = document.querySelector('.model-header button');
const modelFooterPlus = document.querySelector('.model-footer span');
const modelInput = document.querySelector('.model-input');
const user = document.querySelector('.user');
const sidebar = document.querySelector('.sidebar');
const sidebarWrapper = document.querySelector('.sidebar-wrapper');
const Xbtn = document.querySelector('.sidebar-header i');
const toggle = document.querySelector('.toggle');
const circle = document.querySelector('.circle');

//
//
//main page
const goToLoginPage = () => {
	mainPage.style.display = 'none';
	loginPage.style.display = 'grid';
};

middleContent.addEventListener('click', (e) => {
	if (e.target.classList[1] === 'main-btn') {
		goToLoginPage();
	}
});

btnTop.addEventListener('click', () => {
	const inputUserInfo = document.querySelector('.user-info');
	const inputPassword = document.querySelector('.password');
	if (inputUserInfo.value !== '' && inputPassword.value !== '') {
		mainPage.style.display = 'none';
		newsFeedPage.style.display = 'block';
		// sidebarWrapper.style.display="none"
	} else {
		goToLoginPage();
		loginModel.style.display = 'block';
	}
});

//login model
modelX.addEventListener('click', () => {
	loginModel.style.display = 'none';
});
loginFormBtn.addEventListener('click', () => {
	const userinput = document.querySelector('.loginpage-user');
	const passwordinput = document.querySelector('.loginpage-password');
	if (userinput.value !== '' && passwordinput.value !== '') {
		loginPage.style.display = 'none';
		newsFeedPage.style.display = 'block';
		// loginModel.style.display="none";
	} else {
		loginModel.style.display = 'block';
	}
});
// post model
postBtn.addEventListener('click', () => {
	model.style.display = 'block';
	modelWrapper.classList.add('model-wrapper-display');
});
postModelX.addEventListener('click', () => {
	model.style.display = 'none';
	modelWrapper.classList.remove('model-wrapper-display');
	if (modelInput.value !== '') {
		modelInput.value = '';
		changeOpacity(0.5);
	}
});
const changeOpacity = (x) => {
	modelPostBtn.style.opacity = x;
	modelFooterPlus.style.opacity = x;
};
modelInput.addEventListener('keypress', (e) => {
	if (e.target.value !== '') {
		changeOpacity(1);
	}
});

modelInput.addEventListener('blur', (e) => {
	if (e.target.value === '') {
		changeOpacity(0.5);
	}
});
// side bar
user.addEventListener('click', () => {
	sidebar.classList.add('sidebar-display');
	sidebarWrapper.classList.add('sidebar-wrapper-display');
});
Xbtn.addEventListener('click', () => {
	sidebar.classList.remove('sidebar-display');
	sidebarWrapper.classList.remove('sidebar-wrapper-display');
});

// dark mode
toggle.addEventListener('click', () => {
	circle.classList.toggle('move');
	Array.from(darkElements1).map((darkEl1) => {
		darkEl1.classList.toggle('dark-1');
	});
	Array.from(darkElements2).map((darkEl2) => {
		darkEl2.classList.toggle('dark-2');
	});
	Array.from(lightText).map((lightText) => {
		lightText.classList.toggle('light');
	});
	Array.from(border).map((border) => {
		border.classList.toggle('border-color');
	});
});

const darkElements1 = document.querySelectorAll('.dark-mode-1');
const darkElements2 = document.querySelectorAll('.dark-mode-2');
const lightText = document.querySelectorAll('.light-text');
const border = document.querySelectorAll('.border');
const logoutSidebar = document.querySelector('.logout-sidebar');
logoutSidebar.addEventListener('click', () => {
	mainPage.style.display = 'grid';
	newsFeedPage.style.display = 'none';
	// sidebarWrapper.style.display="none";
});
