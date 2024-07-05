import { Github } from "../github/essentials";
export namespace Repos {

const baseURL = `${Github.ASSETS_URL}/${Github.OWNER}`;

    export enum Names {
        HIAGUEDES = "Hiaguedes",
        IP_TRACK = "ip-address-tracker-master",
        LINK_AGREGATOR = "h1.labs-link-aggregator"
    }

    export enum Assets {
        HIAGUEDES = `${baseURL}/${Names.HIAGUEDES}/${Github.MainBranches.MAIN}/assets/preview-hiaguedes.png`,
        IP_TRACK = `${baseURL}/${Names.IP_TRACK}/${Github.MainBranches.MASTER}/design/desktop-preview.jpg`,
        LINK_AGREGATOR = `${baseURL}/${Names.LINK_AGREGATOR}/${Github.MainBranches.MASTER}/assets/preview-links-aggregator.png`,
    }

    export enum Id {
        HIAGUEDES = 292165857,
        IP_TRACK = 294868284,
        LINK_AGREGATOR = 372140412,
    }
}