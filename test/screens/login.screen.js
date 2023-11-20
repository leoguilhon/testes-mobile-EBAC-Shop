class LoginScreen {
    get #storeAddress() {
        return $('android.widget.EditText');
    }
    get #emailSpace() {
        return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.RelativeLayout/android.widget.ScrollView/android.widget.ScrollView/android.view.ViewGroup/android.widget.RelativeLayout/android.widget.RelativeLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.EditText');
    }
    get #passwordSpace() {
        return $('id:input')
    }
    get #continueSiteButton() {
        return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.RelativeLayout/androidx.cardview.widget.CardView/android.view.ViewGroup/android.widget.Button');
    }
    get #continueEmailButton() {
        return $('id:bottom_button');
    }
    get #continuePasswordButton() {
        return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.RelativeLayout/androidx.cardview.widget.CardView/android.view.ViewGroup/android.widget.Button[1]');
    }

    async setStoreAddress(url) {
        this.#storeAddress.setValue(url);
    }
    async setEmail() {
        this.#emailSpace.setValue('lojaebacqe@gmail.com');
    }
    async setPass() {
        this.#passwordSpace.setValue('GD*peToHNJ1#c$sgk08EaYJQ');
    }

    async continueSite() {
        await this.#continueSiteButton.click();
    }
    async continueEmail() {
        await this.#continueEmailButton.click();
    }
    async continuePassword() {
        await this.#continuePasswordButton.click();
    }
}

module.exports = new LoginScreen();