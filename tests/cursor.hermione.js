describe("cursor moving in firefox", function() {
    it("should capture hovered elements", async function() {
        const selectors = [
            '.item:nth-child(1)',
            '.item:nth-child(8)',
            '.item:nth-child(17)'
        ];

        await this.browser.url('index.html');

        for (let i in selectors) {
            const selector = selectors[i];

            const elem = await this.browser.$(selector);
            await elem.moveTo({ xOffset: 10, yOffset: 10 });
            await this.browser.assertView(`hover-${i}`, '.container');
        }
    });

    it("should capture unhovered state", async function() {
        await this.browser.url('index.html');
        await this.browser.assertView('unhovered', '.container');
    });
});
