import { Github } from "../github/essentials";
export namespace Repos {

const baseURL = `${Github.ASSETS_URL}/${Github.OWNER}`;

    export enum Names {
        HIAGUEDES = "Hiaguedes",
        IP_TRACK = "ip-address-tracker-master",
        LINK_AGREGATOR = "h1.labs-link-aggregator",
        QUIZ_WEB = "quiz-web",
        JOURNEY_NLW = 'journey-nlw-backend'
    }

    export enum Assets {
        HIAGUEDES = `${baseURL}/${Names.HIAGUEDES}/${Github.MainBranches.MAIN}/assets/preview-hiaguedes.png`,
        JOURNEY_NLW = `${baseURL}/${Names.JOURNEY_NLW}/${Github.MainBranches.MAIN}/assets/wallpaper_nlw.png`,
        IP_TRACK = `${baseURL}/${Names.IP_TRACK}/${Github.MainBranches.MASTER}/design/desktop-preview.jpg`,
        LINK_AGREGATOR = `${baseURL}/${Names.LINK_AGREGATOR}/${Github.MainBranches.MASTER}/assets/preview-links-aggregator.png`,
        QUIZ_WEB = `https://camo.githubusercontent.com/dcd1dad10f0be4ed2e0fafb5c30c5c253a77222ff1e3fd511b64d068f9052b1f/68747470733a2f2f692e696d6775722e636f6d2f41524b4b6f64312e6a7067`,
    }

    export enum Id {
        HIAGUEDES = 292165857,
        IP_TRACK = 294868284,
        LINK_AGREGATOR = 372140412,
        QUIZ_WEB = 332921968,
        JOURNEY_NLW = 826600981,
    }
}