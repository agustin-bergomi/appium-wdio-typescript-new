class ViewsPage {
    get viewsOption() {
      return $('~Views');
    }
  
    get buttonsOption() {
      return $('~Buttons');
    }
  
    async openViews() {
      await this.viewsOption.click();
    }
  
    async openButtons() {
      await this.buttonsOption.click();
    }
  }
  
  export default new ViewsPage();
  