interface SiteMessageData<T> {
    type: string,
    content: T,
    src: string,
    srcSiteTag: string,
    targetSiteTag?: string
}