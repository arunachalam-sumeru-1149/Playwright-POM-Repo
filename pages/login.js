exports.LoginPage = class LoginPage {

    constructor(page) {

        this.page = page
        this.username_textbox = page.locator('id=username')
        this.password_textbox = page.locator('id=password')
        this.login_button = page.getByRole('button', { name: 'Login' })

    }

    async gotoLoginPage(){

        await this.page.goto('https://the-internet.herokuapp.com/login')
    }

    async enterUsername(username){

        await this.username_textbox.fill(username)

    }

    async enterPassword(password){

        await this.password_textbox.fill(password)

    }

    async clickLogin(){

        await this.login_button.click()
    }

    async login(username, password){

        await this.username_textbox.fill(username)
        await this.password_textbox.fill(password)
        await this.login_button.click()
    }


}