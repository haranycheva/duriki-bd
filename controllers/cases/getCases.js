import { Case } from "../../models/Case.js"

const getCases = async(req, res, next) => {
    const cases = await Case.find()
    res.json(cases)
}

export default getCases