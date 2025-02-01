import { Page } from 'playwright';

/**
 * Asserts and gets the Flutter Fit Glass Pane Canvas Handle on Attach and Visibility
 * @param page
 */
export async function assertAndGetFitGlassCanvasHandleOnAttachAndVisibility(page: Page) {

    // ✅ make sure flutter fit glass pane is loaded && visible, so, wait for Flutter Web CanvasKit to load
    await page.waitForSelector('flt-glass-pane', {
        timeout: 5000,
        state: 'attached'
    });
    const element = page.locator('flt-glass-pane');
    await element.scrollIntoViewIfNeeded();

    // ✅ use evaluate to access shadow DOM and get the canvas inside it
    const glassPaneLocator = page.locator('flt-glass-pane');
    const canvasHandle = await glassPaneLocator.evaluateHandle(el => {
        const shadowRoot = el.shadowRoot;
        // @ts-ignore
        return shadowRoot.querySelector('flt-scene-host flt-canvas-container canvas');
    });

    // ✅ OR just use this line
    // ✅ const canvasHandle = await glassPaneLocator.evaluateHandle(el => el.shadowRoot?.querySelector('flt-scene-host flt-canvas-container canvas'));

    const isVisible = await canvasHandle.isVisible();

    if (!isVisible) {
        throw new Error('Canvas is not visible');
    }

    return canvasHandle;
}
