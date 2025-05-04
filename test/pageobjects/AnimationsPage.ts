class AnimationsPage {

    get AnimationsOption() {
        return $('~Animations')
    }

    get BoucingBallsOption() {
        return $('~Bouncing Balls')
    }

    async openAnimations() {
        (await this.AnimationsOption).click()
    }

    async openBouncingBalls() {
        (await this.BoucingBallsOption).click()
    }
}

export default new AnimationsPage()