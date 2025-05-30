import { Release } from "../../models/Release.js";

const getReleases = async(_, res, next) => {
    const releases = await Release.find()
    res.json(releases)
};

export default getReleases
