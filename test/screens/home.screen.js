class HomeScreen {
    get skipButton(){
        return $('id:button_skip')
    }
    get loginButton() { return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.LinearLayout/android.widget.Button[1]')}

    async goToLogin1(){
        await this.skipButton.click()
    }
    async goToLogin2(){
        await this.loginButton.click()
    }
}

module.exports = new HomeScreen()