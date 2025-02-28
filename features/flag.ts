export enum FeatureFlag {
    TRANSCRIPTION = "transcription",
    IMAGE_GENERATION = "image-generation",
    ANALYSE_VIDEO = "video-analysis",
    TITLE_GENERATION = "title-generation",
    SCRIPT_GENERATION = "script-generation",
    GRAMMER_R_ENHANCEMENT = "grammar-and-readability-enhancement",
    HASH_TREND_SUGGESTION = "hashtag-and-trend-suggestions",
}

export const featureFlagEvents : Record<FeatureFlag, {
    event : string
}> = {
    [FeatureFlag.TRANSCRIPTION] : {
        event : "transcribe"
    },
    [FeatureFlag.IMAGE_GENERATION] : {
        event : "generate-image"
    },
    [FeatureFlag.ANALYSE_VIDEO] : {
        event : "video-analysis"
    },
    [FeatureFlag.TITLE_GENERATION] : {
        event : "generate-title"
    },
    [FeatureFlag.SCRIPT_GENERATION] : {
        event : ""
    },
    [FeatureFlag.GRAMMER_R_ENHANCEMENT] : {
        event : "garenhancement"
    },
    [FeatureFlag.HASH_TREND_SUGGESTION] : {
        event : "hashtrend"
    },
};
