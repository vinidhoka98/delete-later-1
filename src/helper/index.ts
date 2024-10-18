import * as Utils from "@contentstack/utils"

export const isLiveEditTagsEnabled = process.env.CONTENTSTACK_LIVE_EDIT_TAGS === "true";

export const addEditableTags = (entry: any, contentTypeUid: string, locale?: string) => {
  Utils.addEditableTags(entry, contentTypeUid, true, locale)
}
