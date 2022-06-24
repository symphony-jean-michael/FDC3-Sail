interface Window {
    readonly versions: NodeJS.ProcessVersions;
    readonly workspace: { isConnected: () => boolean; };
    readonly home: { getApps: () => Promise<unknown>; };
    readonly fdc3: { getInfo(): import("/Users/nicholaskolba/connectifi/electron-fdc3/node_modules/@finos/fdc3/dist/api/ImplementationMetadata").ImplementationMetadata; open: (app: import("/Users/nicholaskolba/connectifi/electron-fdc3/node_modules/@finos/fdc3/dist/api/Types").TargetApp, context?: import("/Users/nicholaskolba/connectifi/electron-fdc3/node_modules/@finos/fdc3/dist/context/ContextTypes").Context) => Promise<FDC3Result>; broadcast: (context: import("/Users/nicholaskolba/connectifi/electron-fdc3/node_modules/@finos/fdc3/dist/context/ContextTypes").Context) => void; raiseIntent: (intent: string, context: import("/Users/nicholaskolba/connectifi/electron-fdc3/node_modules/@finos/fdc3/dist/context/ContextTypes").Context, app?: import("/Users/nicholaskolba/connectifi/electron-fdc3/node_modules/@finos/fdc3/dist/api/Types").TargetApp) => Promise<FDC3Result>; raiseIntentForContext(context: import("/Users/nicholaskolba/connectifi/electron-fdc3/node_modules/@finos/fdc3/dist/context/ContextTypes").Context, app?: import("/Users/nicholaskolba/connectifi/electron-fdc3/node_modules/@finos/fdc3/dist/api/Types").TargetApp): Promise<FDC3Result>; addContextListener: (contextType: string | import("/Users/nicholaskolba/connectifi/electron-fdc3/node_modules/@finos/fdc3/dist/api/Types").ContextHandler, handler?: import("/Users/nicholaskolba/connectifi/electron-fdc3/node_modules/@finos/fdc3/dist/api/Types").ContextHandler) => FDC3Listener; addIntentListener: (intent: string, listener: import("/Users/nicholaskolba/connectifi/electron-fdc3/node_modules/@finos/fdc3/dist/api/Types").ContextHandler) => FDC3Listener; findIntent: (intent: string, context: import("/Users/nicholaskolba/connectifi/electron-fdc3/node_modules/@finos/fdc3/dist/context/ContextTypes").Context) => Promise<FDC3Result>; findIntentsByContext: (context: import("/Users/nicholaskolba/connectifi/electron-fdc3/node_modules/@finos/fdc3/dist/context/ContextTypes").Context) => Promise<FDC3Result>; getSystemChannels: () => Promise<FDC3Result>; getOrCreateChannel: (channelId: string) => Promise<FDC3Result>; joinChannel: (channel: string) => Promise<FDC3Result>; leaveCurrentChannel: () => Promise<FDC3Result>; getCurrentChannel: () => Promise<FDC3Result>; };
}
