const homeScreen = require("../screens/home.screen");
const loginScreen = require("../screens/login.screen");
const myStoreScreen = require("../screens/myStore.screen");

describe('Access Admin Panel', () => {
    it('should login with valid credentials',  async () => {
        await homeScreen.goToLogin1()
        await homeScreen.goToLogin2()
        await loginScreen.setStoreAddress('http://lojaebac.ebaconline.art.br/')
        await loginScreen.continueSite()
        await loginScreen.setEmail()
        await loginScreen.continueEmail()
        await loginScreen.setPass()
        await loginScreen.continuePassword()
        expect(await myStoreScreen.getStoreName()).toEqual('EBAC - Shop')

    });
})