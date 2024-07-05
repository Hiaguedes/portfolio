import { Github } from "../github/essentials";
export namespace Repos {

const baseURL = `${Github.ASSETS_URL}/${Github.OWNER}`;

    export enum Names {
        HIAGUEDES = "Hiaguedes",
        IP_TRACK = "ip-address-tracker-master"
    }

    export enum Assets {
        HIAGUEDES = `${baseURL}/${Names.HIAGUEDES}/${Github.MainBranches.MAIN}/assets/preview-hiaguedes.png`,
        IP_TRACK = `${baseURL}/${Names.IP_TRACK}/${Github.MainBranches.MASTER}/design/desktop-preview.jpg`,
    }

    export enum Id {
        HIAGUEDES = 292165857,
        IP_TRACK = 294868284
    }
}