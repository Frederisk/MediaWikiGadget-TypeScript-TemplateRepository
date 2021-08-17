$((): void => {
    function main(): void {
        if (!window.mw) { return undefined; }
        const msg: Record<string, string> = {
            text: "Hello World!"
        };
        window.alert(msg['text']);
    }
    main();
});
